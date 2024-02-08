import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/db/connectDB";
import { User } from "@/db/models/User";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await connectDB();
    console.log("creating the user...");

    return NextResponse.json(
      { message: "The user was created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const GET = async () => {};
