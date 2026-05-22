import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const client = await clientPromise;

    const db = client.db("portfolio");

    await db.collection("visitors").insertOne({
      name: body.name,
      role: body.role,
      visitedAt: new Date(),
    });

    return NextResponse.json({
      success: true,
    });

  } catch (err: unknown) {
    console.error("Error logging visitor:", err);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to save your visit right now. Please try again.",
      },
      { status: 500 }
    );
  }
}