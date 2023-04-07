import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAvatarService } from "./updateAvatarService";

class UpdateAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = res.locals.user;
      const avatar = req.file?.path as string;
      const updateAvatarService = container.resolve(UpdateAvatarService);
      await updateAvatarService.execute(_id, avatar);
      return res.sendStatus(204);
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}
export default new UpdateAvatarController();
