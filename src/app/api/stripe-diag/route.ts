import { NextResponse } from "next/server";
import Stripe from "stripe";
import https from "https";

export async function GET() {
  const key = process.env.STRIPE_SECRET_KEY;
  const diagnostics: Record<string, unknown> = {
    keyPresent: !!key,
    keyPrefix: key?.substring(0, 12),
    keyLength: key?.length,
    nodeVersion: process.version,
    timestamp: new Date().toISOString(),
  };

  // Test 1: raw https request to Stripe
  try {
    const rawResult = await new Promise<string>((resolve, reject) => {
      const req = https.get(
        "https://api.stripe.com/v1/balance",
        {
          headers: { Authorization: `Bearer ${key}` },
          timeout: 10000,
        },
        (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => resolve(data));
        }
      );
      req.on("error", reject);
      req.on("timeout", () => reject(new Error("timeout")));
    });
    diagnostics.rawHttps = JSON.parse(rawResult).object === "balance" ? "✅ works" : rawResult;
  } catch (e) {
    diagnostics.rawHttps = `❌ ${e instanceof Error ? e.message : e}`;
  }

  // Test 2: Stripe SDK with default settings
  try {
    const stripe = new Stripe(key || "", {
      apiVersion: "2025-02-24.acacia" as Stripe.LatestApiVersion,
      timeout: 10000,
    });
    const balance = await stripe.balance.retrieve();
    diagnostics.sdkDefault = `✅ works (${balance.available[0]?.currency})`;
  } catch (e) {
    diagnostics.sdkDefault = `❌ ${e instanceof Error ? e.message : e}`;
  }

  // Test 3: Stripe SDK with httpAgent
  try {
    const agent = new https.Agent({ keepAlive: false });
    const stripe = new Stripe(key || "", {
      apiVersion: "2025-02-24.acacia" as Stripe.LatestApiVersion,
      httpAgent: agent,
      timeout: 10000,
    });
    const balance = await stripe.balance.retrieve();
    diagnostics.sdkAgent = `✅ works (${balance.available[0]?.currency})`;
  } catch (e) {
    diagnostics.sdkAgent = `❌ ${e instanceof Error ? e.message : e}`;
  }

  return NextResponse.json(diagnostics);
}
