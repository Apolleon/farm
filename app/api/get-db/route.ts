import { db, QueryResultRow } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await db.connect();
  const { rows } = await client.sql`SELECT * FROM pets`;
  try {
    return NextResponse.json({ rows }, { status: 200 });
  } catch (e) {
    console.error(e);
  }
}
