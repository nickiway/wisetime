import { NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

import { dbConnect } from "@/lib/dbConnect";
import { TimerSession } from "@/db/models/timer/TimerSessions";

export async function GET(request: NextRequest, response: NextApiResponse) {
  // Extract userId from request URL
  const path = request.nextUrl.pathname;
  console.log(path);
}
