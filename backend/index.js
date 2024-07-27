// packages
import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// utiles
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import productRouter from "./routes/productRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/products", productRouter);
app.use("/api/upload", uploadRouter);

const __dirname = path.resolve();

// It serve the /uploads (mentioned inside path.join) folder in localhost:5000/uploads path.
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

app.listen(port, () => console.log("Server running"));
