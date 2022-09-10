import { Router } from "express";
import validateJWT from "../middlewares/validateJwtMiddleware";
import credentialsController from "../controllers/credentialsController";

const credentialsRoutes = Router();

credentialsRoutes.post("/credentials", validateJWT, credentialsController.saveCredential);

export default credentialsRoutes;