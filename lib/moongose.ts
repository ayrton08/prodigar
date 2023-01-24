import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error when initializing database");
  }
};
