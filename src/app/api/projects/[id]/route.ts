import { NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

import { Project } from "@/db/models/project/Project";
import { dbConnect } from "@/lib/dbConnect";

export async function GET(request: NextRequest, response: NextApiResponse) {
  try {
    // Extract userId from request URL
    const userId = request.nextUrl.pathname.split("/").pop();

    // Validate userId
    if (!userId) {
      return response.status(400).json({ error: "Invalid userId" });
    }

    await dbConnect();

    const projects = await Project.find({ "createdBy._id": userId })
      .populate("createdBy")
      .sort([["title", -1]]);

    // Send the response with the table data
    return Response.json({ projects });
  } catch (error) {
    console.error(error);
    return Response.json({ error });
  }
}
