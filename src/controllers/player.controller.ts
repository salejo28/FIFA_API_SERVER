import { Request, Response } from "express";
import { Player } from "app/models";

export default class PlayerController {
  async SearchByTeam(req: Request, res: Response): Promise<Response> {
    const { page, name } = req.body;

    const players = await Player.paginate(
      {
        club: { $regex: name, $options: "i" },
      },
      {
        limit: 10,
        page: page || 1,
      }
    );
    const response = {
      page,
      totalPages: players.totalPages,
      items: players.docs.length,
      totalItems: players.totalDocs,
      players: players.docs,
    };

    return res.json({ ...response });
  }

  async SearchByQuery(req: Request, res: Response): Promise<Response> {
    const { search, page } = req.query;
    const order = req.query.order || "asc";
    if (!search) {
      const players = await Player.paginate(
        {},
        {
          limit: 10,
          page: parseInt(page?.toString() as string) || 1,
          sort: { name: order?.toString().toLowerCase() === "asc" ? 1 : -1 },
        }
      );
      const response = {
        page: parseInt(page?.toString() as string) || 1,
        totalPages: players.totalPages,
        items: players.docs.length,
        totalItems: players.totalDocs,
        players: players.docs,
      };
      return res.json({ ...response });
    }
    const players = await Player.paginate(
      {
        name: { $regex: search, $options: "gi" },
      },
      {
        limit: 10,
        page: parseInt(page?.toString() as string) || 1,
        sort: { name: order?.toString().toLowerCase() === "asc" ? 1 : -1 },
      }
    );
    const response = {
      page: parseInt(page?.toString() as string) || 1,
      totalPages: players.totalPages,
      items: players.docs.length,
      totalItems: players.totalDocs,
      players: players.docs,
    };
    return res.json({ ...response });
  }
}
