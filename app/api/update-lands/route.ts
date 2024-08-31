import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    await sql`UPDATE Farmers SET lands = ${body.lands} WHERE farmerid = ${body.accId}`;
    return NextResponse.json({}, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ e }, { status: 201 });
  }
}
