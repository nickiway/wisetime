import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

import { Settings } from "@/db/models/Settings";
import { dbConnect } from "@/lib/dbConnect";

export async function GET(request: NextRequest, response: NextApiResponse) {
  const _id = request.nextUrl.pathname.split("/").pop() as string;
  const isValidId = ObjectId.isValid(_id);

  if (!isValidId)
    return Response.json({ error: "The provided id does not exist" });

  await dbConnect();
  const isSettings = await Settings.findOne({ createdBy: _id });

  if (!isSettings) {
    await Settings.create({ createdBy: _id });
  }

  // return Response.json({ projects });
}
