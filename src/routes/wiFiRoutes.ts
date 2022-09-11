import { Router } from "express";
import validateJWT from "../middlewares/validateJwtMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { wiFiSchema } from "../schemas/wiFiSchema";
import wiFisController from "../controllers/wiFiController";

const wiFisRoutes = Router();

wiFisRoutes.post("/wifis", validateJWT, validateSchemaMiddleware(wiFiSchema), wiFisController.savewiFi);
wiFisRoutes.get("/wifis/:id", validateJWT, wiFisController.getwiFi);
wiFisRoutes.delete("/wifis/:id", validateJWT, wiFisController.deletewiFi);
wiFisRoutes.get("/wifis", validateJWT, wiFisController.getAllWiFis);

export default wiFisRoutes;