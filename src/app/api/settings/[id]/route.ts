import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  const _id = request.query.id as string;
  const isValidId = ObjectId.isValid(_id);

  console.log("id", _id);
  console.log("is valid id", isValidId);

  return null;
}
