import { NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";

import { dbConnect } from "@/lib/dbConnect";
import {
  ISessionBody,
  ITimerSession,
  TimerSession,
} from "@/db/models/timer/TimerSessions";

export async function GET(request: NextRequest, response: NextApiResponse) {
  const userId = request.nextUrl.pathname.split("/").pop();

  try {
    await dbConnect();
    const table = await TimerSession.find({
      userId: new ObjectId(userId),
    }).select("body -_id");

    return Response.json({ table });
  } catch (error) {
    return Response.json({ error });
  }
}
