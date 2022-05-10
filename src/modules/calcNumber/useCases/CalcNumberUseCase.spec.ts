import { CalcNumberUseCase } from "./CalcNumberUseCase";

const calcNumberUseCase = new CalcNumberUseCase();

describe("Testing CalcNumberUseCase", () => {
    it("should be a prime number", () => {
        const isPrime = calcNumberUseCase.isPrime(5);
        expect(isPrime).toBe(true);
    });

    it("should return all prime numbers from an number.", () => {
        const primeNumbers = calcNumberUseCase.primeNumbers(45);
        expect(primeNumbers).toEqual([3,5]);
    });

    it("should return all divisors from an number", () => {
        const dividers = calcNumberUseCase.dividingNumbers(45);
        expect(dividers).toEqual([1, 3, 5, 9, 15, 45]);
    });

    it("should return all divisors and all prime numbers from an number", () => {
        const decompose = calcNumberUseCase.execute(45);
        expect(decompose).toEqual(
            {
                "dividers": [1,3,5,9,15,45],
                "primeNumbers": [3,5]
            }
        )
    });
});