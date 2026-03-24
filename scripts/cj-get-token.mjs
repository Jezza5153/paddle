#!/usr/bin/env node

/**
 * CJ Dropshipping Token Refresh Script
 * 
 * Usage:
 *   node scripts/cj-get-token.mjs
 * 
 * This script will:
 * 1. Use your CJ email and password to get a fresh access token
 * 2. Display the token so you can paste it into .env.local
 * 
 * Your CJ email/password are the same ones you use to log into
 * https://cjdropshipping.com
 */

const CJ_API_BASE = "https://developers.cjdropshipping.com/api2.0/v1";

async function getAccessToken(email, password) {
  console.log(`\n🔑 Requesting CJ access token for: ${email}\n`);
  
  const response = await fetch(`${CJ_API_BASE}/authentication/getAccessToken`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  
  if (!data.result) {
    console.error("❌ Failed to get token:", data.message);
    console.error("   Make sure your email and password are correct.");
    console.error("   These are the same credentials you use at cjdropshipping.com");
    process.exit(1);
  }

  const { accessToken, accessTokenExpiryDate, refreshToken, refreshTokenExpiryDate } = data.data;

  console.log("✅ Success! Here's your token info:\n");
  console.log("─".repeat(60));
  console.log(`ACCESS TOKEN:          ${accessToken}`);
  console.log(`ACCESS TOKEN EXPIRES:  ${accessTokenExpiryDate}`);
  console.log(`REFRESH TOKEN:         ${refreshToken}`);
  console.log(`REFRESH TOKEN EXPIRES: ${refreshTokenExpiryDate}`);
  console.log("─".repeat(60));
  console.log("\n📋 Copy this line into your .env.local file:\n");
  console.log(`CJ_ACCESS_TOKEN="${accessToken}"`);
  console.log(`\n⏰ This token expires in 15 days. Run this script again to refresh.`);
  console.log(`💡 Tip: Save your refresh token to get new access tokens without re-entering your password.\n`);

  return data.data;
}

async function refreshAccessToken(refreshToken) {
  console.log(`\n🔄 Refreshing CJ access token...\n`);
  
  const response = await fetch(`${CJ_API_BASE}/authentication/refreshAccessToken`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });

  const data = await response.json();
  
  if (!data.result) {
    console.error("❌ Refresh failed:", data.message);
    console.error("   Your refresh token may have expired (180 day limit).");
    console.error("   Run this script without --refresh to log in again.");
    process.exit(1);
  }

  const token = data.data;
  console.log("✅ Token refreshed!\n");
  console.log("─".repeat(60));
  console.log(`NEW ACCESS TOKEN:      ${token.accessToken}`);
  console.log(`EXPIRES:               ${token.accessTokenExpiryDate}`);
  console.log("─".repeat(60));
  console.log(`\n📋 Update your .env.local:\n`);
  console.log(`CJ_ACCESS_TOKEN="${token.accessToken}"\n`);

  return token;
}

// --- Main ---
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args[0] === "--refresh" && args[1]) {
    await refreshAccessToken(args[1]);
  } else {
    console.log("🏓 CJ Dropshipping Token Generator");
    console.log("===================================\n");
    console.log("Enter your CJ Dropshipping login credentials.");
    console.log("(Same email/password you use at cjdropshipping.com)\n");
    
    const email = await ask("📧 Email: ");
    const password = await ask("🔒 Password: ");
    
    await getAccessToken(email.trim(), password.trim());
  }
  
  rl.close();
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
