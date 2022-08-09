import { Job, PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from "express";
import { json } from "stream/consumers";
import { jobRouter } from "./modules/jobs/jobs.controller";
import { userRouter } from "./modules/users/users.controller";
import cors from "cors";

const app = express();

export const prisma = new PrismaClient();

app.use(cors({
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
}));
app.use(express.json());


app.use("/users", userRouter);
app.use("/jobs", jobRouter);

app.get("/", async (_: Request, res: Response) => {
  const data = await prisma.job.findMany();
  res.send(data);
});

app.listen(4000, () => {
  console.log(`Server running on http://localhost:4000`);
});
