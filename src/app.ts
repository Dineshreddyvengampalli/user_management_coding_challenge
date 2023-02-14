import express, { Request, Response, NextFunction } from "express";
import { dbConnection } from "./model/db";
import { router } from "./routes/user";

const app = express()
app.use(express.json());
app.use('/',router)
app.use(express.urlencoded({ extended: true }))

dbConnection()

app.listen(3000, (): void => {
    console.log("server is running on 3000");
  });

export default app