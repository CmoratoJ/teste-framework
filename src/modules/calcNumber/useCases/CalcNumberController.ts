import { Request, Response } from "express";
import { CalcNumberUseCase } from "./CalcNumberUseCase";

class CalcNumberController {
    
    handle(request: Request, response: Response): Response {
        const { number } = request.body;

        const calcNumberUseCase = new CalcNumberUseCase();

        const dividers = calcNumberUseCase.dividingNumbers(number);
        const primeNumbers = calcNumberUseCase.primeNumbers(number);

        return response.json({
            dividers,
            primeNumbers
        });
    }
    
}

export { CalcNumberController };