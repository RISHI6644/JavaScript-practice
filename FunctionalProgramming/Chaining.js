console.log("Let's learn about chaining in JS!!!");

/* Chaining: It is a process for taking an output from one method and
    passing it to another method in a same line.
 */

let arr = [{name: "Rocky", age: 36, gender: 'M'},
    {name: "Rolex", age: 42, gender: 'M'},
    {name: "Vikram", age: 54, gender: 'M'},
    {name: "Hannah", age: 24, gender: 'F'},
    {name: "Maeve", age: 29, gender: 'F'}];

// Calculate the age of all the Men (Males)
let mens = arr.filter(function (object) {
    return object.gender == 'M';
}).map(function (male) {
    return male.age;
})

// let ageOfMales = mens.map(function (male) {
//     return male.age;
// })
// console.log(ageOfMales);

console.log(mens);


// From the transactions array filter out positive elements and calculate the total amount
// Use filter and reduce to achieve this
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let positive_elements = transactions.filter(function (amount) {
    return amount > 0;
}).reduce(function (accumulator, money) {
    return accumulator + money;
})

console.log(positive_elements);
