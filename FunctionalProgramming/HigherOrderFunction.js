console.log("Let's learn about Higher Order Functions!!!");

/* Higher Order Functions: Higher order functions are functions that operate on
    other functions, either by taking them as arguments or by returning them.
    In simple words, a higher-order function is a function that receives a function
    as an argument or returns the function as output.
 */

let arr = [1, 2, 3, 4, 5];

let squaredArray = [];

for (let i = 0; i < arr.length; i++) {
    squaredArray.push(arr[i] * arr[i]);
}

console.log(squaredArray);

// Solving the same problem by using map
// map will loop through each element of the array and will perform specific operations which is provided
// nap method will always return a new array
const num = [7, 9, 8];

const squaredNum = num.map(function (n) {
    return n * n;
})

console.log(squaredNum);


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const $toBdt = 109;

const conversion = transactions.map(function (amount) {
    return (amount / $toBdt).toFixed(2);
})

console.log(conversion);


// Difference between map & for-each
const conversion2 = transactions.forEach((amount) => {
    return (amount / $toBdt).toFixed(2); // It will return undefined

    // To get the output, not in an array
    // console.log((amount / $toBdt).toFixed(2));
})

console.log(conversion2); // undefined


// More higher-order functions
// find: It returns the first element only which satisfy the condition
const transactions2 = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let firstWithdrawal = transactions2.find(function (n) {
    return n < 0;
})

console.log(firstWithdrawal);


// findIndex: It returns the index of the first element which satisfy the condition
let firstWithdrawalIndex = transactions2.findIndex(function (n) {
    return n < 0;
})

console.log(firstWithdrawalIndex);


// some: This method checks a condition to get true or false based on a condition
// It will return true if even one element satisfies the condition
const transactions3 = [1000, 3000, 4000, 2000, -898, 3800, 4500];
let negative_value = transactions3.some(function (n) {
    return n < 0;
})

console.log(negative_value);


// every: It also checks a condition to get true or false based on a condition
// It will return true only if every element satisfies the condition
const transactions4 = [1000, 3000, 4000, 2000, -898, 3800, 4500];
let value = transactions4.every(function (n) {
    return n < 0;
})

console.log(value);


// filter: It will return a new array including all the elements that matches
// the specific condition
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

let numbers = [1, 2, 20, 35, 12, 17, 46];

let evenElems = []

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        evenElems.push(numbers[i])
    }
}

console.log(evenElems);

// By using filter
let nums = [1, 2, 20, 35, 12, 17, 46];

let evenNums = nums.filter(function (n) {
    return n % 2 == 0;
})

console.log(evenNums);


const transactions5 = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let withdrawn = transactions5.filter(function (money) {
    return money > 0;
})

console.log(withdrawn);


// reduce: It always returns a single result
let arr2 = [1, 2, 5, 7];
let sum = 0; // works as an accumulator

for (let i = 0; i < arr2.length; i++) {
    sum = sum + arr2[i];
}

console.log(sum);


// By using reduce method
let arr3 = [1, 2, 5, 7];

let result = arr3.reduce(function (accumulator, value) { // accumulator = 0
    let out = accumulator + value;
    return out;
})

console.log(result);

let product = arr3.reduce(function (accumulator, value) { // accumulator = 1
    let out2 = accumulator * value;
    return out2;
})

console.log(product);
