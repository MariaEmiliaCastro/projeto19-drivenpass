import { Router } from "express";
import usersController from "../controllers/usersController";
import { validateSchemaMiddleware } from '../middlewares/validateSchema';
import { usersSchema } from "../schemas/usersSchema";

const usersRoutes = Router();

usersRoutes.post("/users", validateSchemaMiddleware(usersSchema), usersController.createUser);
usersRoutes.post("/login", validateSchemaMiddleware(usersSchema), usersController.loginUser);
export default usersRoutes;