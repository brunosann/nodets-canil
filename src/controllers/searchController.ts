import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/Pet";

export const search = (req: Request, res: Response) => {
  const query: string = req.query.q as string;
  if (!query) return res.redirect("/");
  const pets = Pet.getFromName(query);

  res.render("pages/page", {
    menu: createMenuObject(""),
    pets,
    query,
  });
};
