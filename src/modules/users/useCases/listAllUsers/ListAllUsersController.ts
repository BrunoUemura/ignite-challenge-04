import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id = String(request.headers.user_id);
      const result = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).send(result);
    } catch (error) {
      return response.status(400).send({ error: error.message });
    }
  }
}

export { ListAllUsersController };
