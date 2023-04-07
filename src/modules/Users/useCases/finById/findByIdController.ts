import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdService } from "./findByIdService";

class FindByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const findByIdservice = container.resolve(FindByIdService);
    const user = await findByIdservice.execute(id);
    return res.send(user);
  }
}

export default new FindByIdController();
