import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { appPort, isProduction } from "@/configs/env";
import db from "@/configs/database";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors({ origin: ["*"] }));
app.use(helmet());
app.use(morgan(isProduction ? "combined" : "dev"));

app.get("/", (_, res) => {
  return res.send({ message: "hello world" });
});

db.listen((port) => {
  app.listen(appPort, () => {
    if (!isProduction) {
      console.log(`Database listening on port ${port}`);
      console.log(`Server listening on port ${appPort}`);
    }
  });
});
