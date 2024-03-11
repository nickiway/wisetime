import { NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";

import { Tag } from "@/db/models/project/Tag";
import { dbConnect } from "@/lib/dbConnect";

export async function GET(request: NextRequest, response: NextApiResponse) {
  const userId = request.nextUrl.pathname.split("/").pop();

  try {
    await dbConnect();
    const tags = await Tag.find({ createdBy: new ObjectId(userId) });
    return Response.json({ tags });
  } catch (error) {
    return Response.json({ error });
  }
}
