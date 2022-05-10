import { Router } from "express";

import { CalcNumberController } from "../modules/calcNumber/useCases/CalcNumberController";

const calcNumberRoutes = Router();

const calcNumberController = new CalcNumberController();

calcNumberRoutes.post("/", calcNumberController.handle);

export { calcNumberRoutes };