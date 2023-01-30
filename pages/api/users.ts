import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

import { dbConnection } from "../../lib/moongose";
import { findOrCreateEmail } from "../../controllers/user-controller";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { method } = req;

  await dbConnection();

  switch (method) {
    case "POST":
      try {
        await findOrCreateEmail(req, res);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
