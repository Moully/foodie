import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://amoramgl:foodiebackend@cluster0.ug8zwlr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
