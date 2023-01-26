import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";

export const findOrCreateEmail = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { email } = JSON.parse(req.body);
  const user = await User.findOne({
    email,
  });

  if (!user) {
    const newUser = new User({
      email,
    });
    await newUser.save();
    return res.status(201).json({ newUser, status: "created" });
  }
  res.status(201).json({ user, status: "finded" });
};
