//@ts-nocheck

import { webcrypto } from "crypto";
import type { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (req.method !== "POST") {
    return NextResponse.json({ error: "ту ещ ыглф" }, { status: 1001 });
  }

  if (!body.hash) {
    return NextResponse.json(
      {
        error: "Missing required field hash",
      },
      { status: 400 }
    );
  }

  if (!process.env.BOT_TOKEN) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }

  const data = Object.fromEntries(new URLSearchParams(body.hash));
  const isValid = await isHashValid(data, process.env.BOT_TOKEN);

  if (isValid) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  return NextResponse.json({ error: "Invalid hash" }, { status: 403 });
}

async function isHashValid(data: Record<string, string>, botToken: string) {
  const encoder = new TextEncoder();

  const checkString = Object.keys(data)
    .filter((key) => key !== "hash")
    .map((key) => `${key}=${data[key]}`)
    .sort()
    .join("\n");

  const secretKey = await webcrypto.subtle.importKey(
    "raw",
    encoder.encode("WebAppData"),
    { name: "HMAC", hash: "SHA-256" },
    true,
    ["sign"]
  );

  const secret = await webcrypto.subtle.sign("HMAC", secretKey, encoder.encode(botToken));

  const signatureKey = await webcrypto.subtle.importKey("raw", secret, { name: "HMAC", hash: "SHA-256" }, true, [
    "sign",
  ]);

  const signature = await webcrypto.subtle.sign("HMAC", signatureKey, encoder.encode(checkString));

  const hex = Buffer.from(signature).toString("hex");

  return data.hash === hex;
}
