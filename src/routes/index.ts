import { Router } from "express";

import { calcNumberRoutes } from "./calcNumber.routes";

const router = Router();

router.use("/calcNumber", calcNumberRoutes);

export { router };