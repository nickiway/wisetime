import mongoose from "mongoose";

export const connectDB = async () => {
  const connectionString = process.env.dbConnection as string;

  try {
    await mongoose.connect(connectionString);
    console.log("connected");
  } catch (error) {
    console.error(error);
  }
};
