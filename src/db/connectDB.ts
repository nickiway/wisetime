import mongoose from "mongoose";

export const connectDB = async () => {
  const connectionString = process.env.dbConnection as string;

  try {
    await mongoose.connect(connectionString, { dbName: "wisetime" });

    console.log("connected to DB");
  } catch (error) {
    console.error(error);
  }
};
