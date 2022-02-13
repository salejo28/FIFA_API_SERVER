import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import keys from "app/keys";
import { PlayerRoutes } from "app/routes";

export default class App {
  app: Application;

  constructor(private port: number) {
    this.app = express();
    this.port = port;

    this.Settings();
    this.Middlewares();
    this.Routes();
  }

  Settings() {
    this.app.set("port", this.port || keys.PORT);
  }

  Middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  Routes() {
    this.app.use("/api/v1", PlayerRoutes);
  }

  async listen() {
    await new Promise<void>((resolve) => {
      this.app.listen(this.app.get("port"), resolve);
    });
    console.log(`🚀 Server ready at http://localhost:${this.app.get("port")}`);
  }
}
