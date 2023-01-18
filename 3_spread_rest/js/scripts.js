function sumWrong(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum;
}

console.log(
    sumWrong(
        [
            33, 22, 49, 33, 22, 49, 33, 22, 49, 33, 22, 49, 33, 22, 49
        ]
    )
);

function properSum(...numbers) {
    console.log(numbers, numbers.length, typeof numbers);

    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }

    return sum;
}

console.log(properSum(33, 22, 49, 57, 104));
console.log(properSum(33, 22, 49));

function operationOnNumbersWrong(operation, numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (operation == '+') {
            result += numbers[i];
        }
        else if (operation == '-') {
            result -= numbers[i];
        }
    }

    return result;
}

console.log(operationOnNumbersWrong('+', [1, 2, 3]));
console.log(operationOnNumbersWrong('-', [1, 2, 3]));

function operationOnNumbers(operation, ...numbers) {
    console.log('operation', operation, typeof operation);
    console.log('numbers', numbers, numbers.length, typeof numbers);
    
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (operation == '+') {
            result += numbers[i];
        }
        else if (operation == '-') {
            result -= numbers[i];
        }
    }

    return result;
}

console.log(operationOnNumbers('+', 1, 2, 3));
console.log(operationOnNumbers('-', 1, 2, 3));