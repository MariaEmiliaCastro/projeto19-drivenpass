import { Router } from "express";
import usersRoutes from "./usersRoutes";
import credentialsRoutes from "./credentialsRoutes";

const router = Router();

router.use(usersRoutes);
router.use(credentialsRoutes);

export default router;