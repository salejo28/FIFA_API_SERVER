import { Request, Response, NextFunction } from "express";
import keys from "app/keys";

export const AuthenticateAPI = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["x-api-key"];
  if (!token) {
    return res.status(400).send("Unauthorize");
  }

  if (token !== keys.AUTHENTICATE_TOKEN) {
    return res.status(400).send("Unauthorize");
  }

  next();
};
