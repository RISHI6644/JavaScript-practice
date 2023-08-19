console.log("Let's dive into the world of Functional Programming with JS!!!");

/* Functional Programming: Functional programming is a programming paradigm designed to
    handle functions in a better way in JS (mainly pure functions).
   JS is a multi-paradigm language. We can use object-oriented, procedural and functional
    programming paradigms all at the same time in JS.
 */

console.log("Now let's talk about imperative and declarative way of writing code!!!");

/* Imperative vs Declarative: i) Imperative way basically focuses on how to go about
    a solution whereas, Declarative way focuses on what to achieve from the problem.
 */

// Let's consider the following problem
// We will be given a number, and we have to check whether the square of that number
// is even or odd

// Imperative way of writing code
const a = 5;
const square = a * a;
let isEven;

if (square % 2 ==0) {
    isEven = true;
}
else {
    isEven = false;
}

console.log(isEven);


// Declarative way of writing code
const checkForSquare = (x) => (x * x % 2=== 0? true : false);
console.log(checkForSquare(4));
