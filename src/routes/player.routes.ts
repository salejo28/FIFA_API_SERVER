import { Router } from "express";

import { AuthenticateAPI } from "app/auth";
import { PlayerController } from "app/controllers";

class Player {
  router: Router;
  constroller: PlayerController;

  constructor() {
    this.router = Router();
    this.constroller = new PlayerController();

    this.welcome();
    this.search();
    this.searchQuery();
  }

  welcome() {
    this.router.get("/", AuthenticateAPI, (req, res) => {
      return res.json({ message: "Welcome to api FIFA" });
    });
  }

  search() {
    this.router.post("/team", AuthenticateAPI, this.constroller.SearchByTeam);
  }

  searchQuery() {
    this.router.get(
      "/players",
      AuthenticateAPI,
      this.constroller.SearchByQuery
    );
  }
}

export default new Player().router;
