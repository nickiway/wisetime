import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  const _id = request.query.id as string;
  const isValidId = ObjectId.isValid(_id);

  return null;
}
