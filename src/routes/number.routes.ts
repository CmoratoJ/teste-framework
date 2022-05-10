import { Router } from "express";

import { CalcNumberController } from "../modules/calcNumber/useCases/CalcNumberController";

const calcNumberRoutes = Router();

const calcNumber = new CalcNumberController();

calcNumberRoutes.post("/", calcNumber.handle);

export { calcNumberRoutes };