import { Router } from "express";
import validateJWT from "../middlewares/validateJwtMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { credentialSchema } from "../schemas/credentialsSchema";
import credentialsController from "../controllers/credentialsController";

const credentialsRoutes = Router();

credentialsRoutes.post("/credentials", validateJWT, validateSchemaMiddleware(credentialSchema), credentialsController.saveCredential);
credentialsRoutes.get("/credentials/:id", validateJWT, credentialsController.getCredential);
credentialsRoutes.delete("/credentials/:id", validateJWT, credentialsController.deleteCredential);
credentialsRoutes.get("/credentials", validateJWT, credentialsController.getAllCredentials);

export default credentialsRoutes;