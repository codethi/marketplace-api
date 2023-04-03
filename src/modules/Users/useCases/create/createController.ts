import { Request, Response } from "express";
import { container } from 'tsyringe';
import { CreateService } from "./createService";

class CreateController {

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body;
      const createService = container.resolve(CreateService);
      await createService.execute(body);
      return res.sendStatus(201);
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}

export default new CreateController()