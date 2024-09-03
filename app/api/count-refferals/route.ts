import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    if (!body.link) throw new Error("No user data!");
    const res = sql`select count(*) from farmers where refferer= ${body.link}`;
    console.log(res);
    return NextResponse.json({ res }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ e }, { status: 500 });
  }
}
