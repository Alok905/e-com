import mongoose from "mongoose";

// mongodb + srv://alokranjanjoshi0756789012:<password>@alok-cluster.j4df7ik.mongodb.net/?retryWrites=true&w=majority&appName=alok-cluster
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Successfully connected to mongoDB 👍")
    } catch (error) {
        console.error(`ERROR: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB