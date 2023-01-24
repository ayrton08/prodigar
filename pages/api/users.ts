import type { NextApiRequest, NextApiResponse } from "next";

import { dbConnection } from "../../lib/moongose";
import User from "../../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnection();

  switch (method) {
    case "POST":
      try {
        const { email } = req.body;
        const user = await User.findOne({
          email: req.body.email,
        });

        if (!user) {
          const newUser = new User({
            email,
          });
          await newUser.save();
          res.status(201).json({ newUser });
        }
        res.status(201).json({ user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
