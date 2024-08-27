import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    if (!body.id) throw new Error("No user data!");
    const isEsist = await sql`SELECT farmerID FROM farmers WHERE farmerID = ${body.id})`;
    console.log(body);
    if (isEsist) return NextResponse.json({ farmer: isEsist }, { status: 201 });
    else {
      const res = await sql`INSERT INTO Farmers (farmerID) VALUES (${body.id})`;
      return NextResponse.json({ farmer: res }, { status: 201 });
    }
  } catch (e) {
    return NextResponse.json({ e }, { status: 500 });
  }
}
