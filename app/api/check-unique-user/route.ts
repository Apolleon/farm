//@ts-nocheck

import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    if (!body.id) throw new Error("No user data!");
    const res = await sql`SELECT * FROM farmers WHERE farmerid = ${body.id}`;

    if (res.rowCount === 0) {
      await sql`INSERT INTO Farmers (farmerid, level, coins) VALUES (${body.id}, ${JSON.stringify({
        current: 1,
        goal: 60,
      })}, 10)`;
      const res = await sql`SELECT * FROM farmers WHERE farmerid = ${body.id}`;
      return NextResponse.json({ data: res.rows[0] }, { status: 201 });
    }
    return NextResponse.json({ data: res.rows[0] }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ e }, { status: 500 });
  }
}
