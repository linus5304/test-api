import { Router, Request, Response } from "express";
import { createUser, getUserById, getUsers, updateUser } from "../users/users.service";
import { createJob, getJobById, getJobs, updateJob } from "./jobs.service";

export const jobRouter: Router = Router();

jobRouter.post("/", async (req: Request, res: Response) => {

  const data = req.body;
  console.log("Post data ", data);
  try {
    const result = await createJob({ ...data, userId: '48e4e1ad-4523-4c19-b13c-5ab213a0bef3' });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

jobRouter.get("/", async (_: Request, res: Response) => {
  try {
    const result = await getJobs();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

jobRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const result = await getJobById(req.params.id);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

jobRouter.patch("/:id", async (req: Request, res: Response) => {
  try {
    const result = await updateJob(req.params.id, req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});
