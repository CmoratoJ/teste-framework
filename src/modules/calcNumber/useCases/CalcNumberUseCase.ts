class CalcNumberUseCase {
    dividingNumbers(number: number): Object { 
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

        for(let count = 2; count <= number; count++) {
            let isPrimeNumber = true;
            for(let divider = 2; divider < count; divider++){
                if(count % divider === 0) {                    
                    isPrimeNumber = false;
                    break;
                }
            }
            if(isPrimeNumber) primeNumbers.push(count);
        }

        return primeNumbers;
    }
}

export { CalcNumberUseCase };