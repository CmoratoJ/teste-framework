import { Request, Response } from "express";
import { CalcNumberUseCase } from "./CalcNumberUseCase";

class CalcNumberController {
    
    handle(request: Request, response: Response): Response {
        const { number } = request.body;

        const calcNumberUseCase = new CalcNumberUseCase();

        const decompose = calcNumberUseCase.execute(number);

        return response.json(decompose);
    }
    
}

export { CalcNumberController };