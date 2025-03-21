import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    const result = await mongoose.connect(process.env.DB_URI);
    console.log(`Connected to MongoDB ${result.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
