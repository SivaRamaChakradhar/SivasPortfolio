import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.rating) {
      return NextResponse.json(
        { success: false, error: "Rating is required." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("portfolio");

    await db.collection("feedbacks").insertOne({
      name: body.name || "Anonymous",
      role: body.role || "Visitor",
      rating: body.rating,
      message: body.message || "",
      submittedAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Error saving feedback:", err);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to save feedback right now. Please try again.",
      },
      { status: 500 }
    );
  }
}