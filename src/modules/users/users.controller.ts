import { Router, Request, Response } from "express";
import { createUser, getUserById, getUsers, updateUser } from "./users.service";

export const userRouter: Router = Router();

userRouter.post("/", async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const result = await createUser({ ...data });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

userRouter.get("/", async (_: Request, res: Response) => {
  try {
    const result = await getUsers();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

userRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const result = await getUserById(req.params.id);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

userRouter.patch("/:id", async (req: Request, res: Response) => {
  try {
    const result = await updateUser(req.params.id, req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});
