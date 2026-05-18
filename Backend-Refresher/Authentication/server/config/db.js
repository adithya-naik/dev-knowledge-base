import mongoose from "mongoose";

const dbConnect = async (MONGO_URL) => {
  try {
    await mongoose.connect(MONGO_URL)
    console.log("DB CONNCETED")
  } catch (error) {
    console.log("DATABASE CONNCTION FAILED")
    console.log(error)
  }
}

export default dbConnect;