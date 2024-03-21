import { NextRequest } from "next/server";
import { NextApiResponse } from "next";
import { ObjectId } from "mongodb";

import { dbConnect } from "@/lib/dbConnect";
import { TimerSession } from "@/db/models/timer/TimerSessions";

export async function GET(request: NextRequest, response: NextApiResponse) {
  try {
    // Extract userId from request URL
    const userId = request.nextUrl.pathname.split("/").pop();

    // Validate userId
    if (!userId) {
      return response.status(400).json({ error: "Invalid userId" });
    }

    await dbConnect();
    const table = await TimerSession.find({
      userId: new ObjectId(userId),
    })
      .select("body")
      .populate("body.selectedTags");

    console.log(table);
    // Send the response with the table data
    return Response.json({ table });
  } catch (error) {
    return Response.json({ error });
  }
}
