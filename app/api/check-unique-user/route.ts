//@ts-nocheck

import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    if (!body.id) throw new Error("No user data!");
    const res = await sql`INSERT INTO Farmers (farmerID) VALUES (${body.id}) ON CONFLICT DO NOTHING`;

    if (res.rowCount === 0) {
      const res = await sql`SELECT * FROM farmers WHERE farmerId = ${body.id}`;
      return NextResponse.json({ data: res.rows }, { status: 201 });
    }
    return NextResponse.json({ data: res.rows }, { status: 201 });
    // }
  } catch (e) {
    return NextResponse.json({ e }, { status: 500 });
  }
}