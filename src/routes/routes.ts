import { Router } from "express";
import usersRoutes from "./usersRoutes";
import credentialsRoutes from "./credentialsRoutes";
import cardsRoutes from "./cardsRoutes";
import secureNotesRoutes from "./secureNotesRoutes";
import wiFisRoutes from "./wiFiRoutes";

const router = Router();

router.use(usersRoutes);
router.use(credentialsRoutes);
router.use(cardsRoutes);
router.use(secureNotesRoutes);
router.use(wiFisRoutes);

export default router;