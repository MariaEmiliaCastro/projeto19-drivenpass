import { Router } from "express";
import usersRoutes from "./usersRoutes";
import credentialsRoutes from "./credentialsRoutes";
import cardsRoutes from "./cardsRoutes";

const router = Router();

router.use(usersRoutes);
router.use(credentialsRoutes);
router.use(cardsRoutes);

export default router;