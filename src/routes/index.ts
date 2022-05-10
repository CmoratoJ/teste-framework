import { Router } from "express";

import { calcNumberRoutes } from "./number.routes";

const router = Router();

router.use("/calcNumber", calcNumberRoutes);

export { router };