import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllService } from "./findAllService";

class FindAllController {
  async handle(req: Request, res: Response) {
    try {
      const { limit, offset } = res.locals.pagination;
      const findAllService = container.resolve(FindAllService);
      const users = await findAllService.execute(limit, offset);
      return res.send({ users });
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}

export default new FindAllController();
