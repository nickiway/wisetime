import fs from "fs";

export function PATCH(req: Request, res: Response) {
  const body = req.body;
  console.log(body);

  return new Response("Test", {
    status: 200,
  });
}
