import express, { Request, Response, NextFunction } from "express";

import { deleteUser, getUsers } from "../controllers/userController";
import { postUser } from "../controllers/userController";

export const router = express.Router()

router.get("/users/:id",getUsers )
router.post("/users",postUser)
router.delete("/users/:id",deleteUser)

router.get("/",  (req: Request, res: Response, next: NextFunction) => {
    res.json({ msg: "hello from root " });
  });
