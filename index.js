function fizzBuzz(num){
    const canDivideByTrree = num % 3 === 0;
    const canDivideByfive = num % 5 === 0;
    if (canDivideByTrree && canDivideByfive){
        return 'FizzBuzz'
    } else if (canDivideByTrree){
        return 'Fizz';
    }else if (canDivideByfive){
        return 'Buzz';
    }
    return num.toString();
}

module.exports = fizzBuzz;