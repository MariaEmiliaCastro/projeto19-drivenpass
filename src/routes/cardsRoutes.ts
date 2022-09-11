import { Router } from "express";
import validateJWT from "../middlewares/validateJwtMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { cardSchema } from "../schemas/cardsSchema";
import cardsController from "../controllers/cardsController";

const cardsRoutes = Router();

cardsRoutes.post("/cards", validateJWT, validateSchemaMiddleware(cardSchema), cardsController.savecard);
cardsRoutes.get("/cards/:id", validateJWT, cardsController.getcard);
cardsRoutes.delete("/cards/:id", validateJWT, cardsController.deletecard);
cardsRoutes.get("/cards", validateJWT, cardsController.getAllcards);

export default cardsRoutes;