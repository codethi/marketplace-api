import { Request, Response } from "express";
import { CreateService } from "./createService";

export class CreateController {
  constructor(private createService: CreateService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body;
      await this.createService.execute(body);
      return res.sendStatus(201);
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}
