import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    if (!body.link) throw new Error("No user data!");
    const { rows } = await sql`select count(*) from farmers where refferer= ${body.link}`;

    return NextResponse.json(rows[0], { status: 201 });
  } catch (e) {
    return NextResponse.json({ e }, { status: 500 });
  }
}
