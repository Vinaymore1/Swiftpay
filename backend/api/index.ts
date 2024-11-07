import express, { Request, Response } from "express";
import env from "../src/utils/validateEnv";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
import rootRouter from "../src/routes";

const FRONTEND_URL = "https://swiftpay-vinaymore1s-projects.vercel.app";
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", rootRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Jai Shri Ram ji");
});

app.listen(env.PORT, () => {
  console.log("Server running at port: ", env.PORT);
});

