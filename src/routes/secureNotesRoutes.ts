import { Router } from "express";
import validateJWT from "../middlewares/validateJwtMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { secureNoteSchema } from "../schemas/secureNotesSchema";
import secureNotesController from "../controllers/secureNotesController";

const secureNotesRoutes = Router();

secureNotesRoutes.post("/secureNotes", validateJWT, validateSchemaMiddleware(secureNoteSchema), secureNotesController.savesecureNote);
secureNotesRoutes.get("/secureNotes/:id", validateJWT, secureNotesController.getsecureNote);
secureNotesRoutes.delete("/secureNotes/:id", validateJWT, secureNotesController.deletesecureNote);
secureNotesRoutes.get("/secureNotes", validateJWT, secureNotesController.getAllsecureNotes);

export default secureNotesRoutes;