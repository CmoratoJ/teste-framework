import { AppError } from "../../../errors/AppError";

class CalcNumberUseCase {

    execute(number: number): Object {

        if(Number(number) && typeof number !== 'number') number = Number(number);

        if(number == 0) throw new AppError("There is no divisor for number 0");

        if (!Number(number)) throw new AppError("Value is not a number!");

        if (!Number.isInteger(number)) throw new AppError("Value is not a integer!");

        const dividers = this.dividingNumbers(number);
        const primeNumbers = this.primeNumbers(number);

        return { dividers, primeNumbers };
    }

    isPrime(n: number): boolean {
        for(let i = 2; i*i <= n; i++) {
            if(n % i === 0) return false;
        }

        return true;
    }

    dividingNumbers(number: number): number[] { 
        const dividers = [];

        for(let count = 1; count <= number; count++) {
            if (number % count === 0) {
                dividers.push(count);
            }
        }

        return dividers;
    }

    primeNumbers(number: number): Object {
        const primeNumbers = [];

        const dividers = this.dividingNumbers(number);

        for (let n of dividers) {
            if(n !== 1) {
                if(this.isPrime(n)) primeNumbers.push(n);
            }   
        }

        return primeNumbers;
    }
}

export { CalcNumberUseCase };