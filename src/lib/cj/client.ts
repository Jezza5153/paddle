const CJ_BASE_URL = "https://developers.cjdropshipping.com/api2.0/v1";
const CJ_ACCESS_TOKEN = process.env.CJ_ACCESS_TOKEN || "";

interface CJResponse<T> {
  result: boolean;
  code: number;
  message: string;
  data: T;
}

export async function cjFetch<T>(
  endpoint: string,
  options: {
    method?: "GET" | "POST" | "PUT" | "PATCH";
    body?: Record<string, unknown>;
    params?: Record<string, string>;
  } = {}
): Promise<CJResponse<T>> {
  const { method = "GET", body, params } = options;

  let url = `${CJ_BASE_URL}${endpoint}`;
  if (params) {
    const searchParams = new URLSearchParams(params);
    url += `?${searchParams.toString()}`;
  }

  const headers: Record<string, string> = {
    "CJ-Access-Token": CJ_ACCESS_TOKEN,
    "Content-Type": "application/json",
  };

  const response = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `CJ API error ${response.status}: ${errorText}`
    );
  }

  const data = (await response.json()) as CJResponse<T>;

  if (!data.result) {
    throw new Error(`CJ API error: ${data.message} (code: ${data.code})`);
  }

  return data;
}
