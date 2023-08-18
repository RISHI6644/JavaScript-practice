console.log("Let's learn about functions in JavaScript!!!");

/* Functions: A function is a block of code that performs a specific task.
    Functions are the main “building blocks” of the program.
    They allow the code to be called many times without repetition.
    Syntax: function name(parameters) {
                // function body
                }
    A JS function is executed when something invokes (calls) it.

    Parameters and Arguments: A function can be defined with a set of parameters
     that it will take. These are generally the values that we want the function
     to accept.
     Meanwhile, arguments are the values that we pass for those parameters.
 */

// Basic function in JS
function greet() { // function declaration and definition
    console.log("Greetings!!!");
}

greet(); // function invocation

// Parameterized function
function addNumbers(a, b) {
    console.log(a + b);
}

addNumbers(5, 10);

// Functions as expression
var a = 2 + 3; // This is an expression
console.log(a);

var div = function (a, b) { // Since this function does not have a name, so it is known as anonymous function
    return a / b;
}

var result = div(10, 5);
console.log(result);


console.log("Let's learn about Hoisting!!!");
/* Hoisting: In JS, hoisting refers to the process where declarations of functions,
    variables, classes, or imports are moved to the top of their scope before the
    code is executed.
    It can involve different behaviors depending on the type of declaration,
    such as being able to use a variable's value before it is declared or
    causing behavior changes in the scope.

    To know more: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
 */

console.log(x); // In other programming languages, this will result an error
hoistingDemo();
// add(4, 6); // It will show an error since add is not a function

var x = 'Hi';

function hoistingDemo() {
    console.log("MDN is best!");
}

var add = function (x, y) {
    console.log(x + y);
}

/* Execution Context: When the JavaScript engine scans a script file, it makes an
    environment called the Execution Context that handles the entire transformation
    and execution of the code.
    There are two types of execution contexts in JS:
    i) global: The global execution context is created when a JS script first starts
        to run, and it represents the global scope in JavaScript.
    ii) function: A function execution context is created whenever a function is called,
         representing the function's local scope.

    JavaScript program is executed in TWO PHASES:
    i) MEMORY ALLOCATION PHASE (Creation Phase) => JavaScript program goes throughout the
        program and allocates memory for Variables and Functions declared in the program.
    ii) CODE EXECUTION PHASE => JavaScript program now goes through the code line by line
         and executes the code.

    To know more: https://codedamn.com/news/javascript/execution-context-and-call-stack
                  https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/
 */


// Module 4's Challenge
// Question 1: What's the Output of the Following Code?
function checkAge(data) {
    if (data === { age: 18 }) {
        console.log("You are an adult!");
    } else if (data == { age: 18 }) {
        console.log("You are still an adult.");
    } else {
        console.log(`Hmm.. You don't have an age I guess`);
    }
}

checkAge({ age: 18 }); //  When we use === or == to compare objects, we are checking
                           // if the two object references point to the same memory location,
                           // not if their contents are the same. In our code, we are creating
                           // two different object instances with the same content, so the
                           // comparison will fail.
// To fix this, we should compare the values of the age property inside the objects, rather than
// comparing the entire objects:
function checkAge2(data) {
    if (data.age === 18) {
        console.log("You are an adult!");
    } else if (data.age == 18) {
        console.log("You are still an adult.");
    } else {
        console.log(`Hmm.. You don't have an age I guess`);
    }
}

checkAge2({ age: 18 }); // You are an adult!

// Question 5: What will be the output of the following code?
function fn(){
    return 4+5;
}
var out = fn(3,7); // The fn function is defined to take no parameters
                           // and returns the result of 4 + 5. Since the arguments
                           // are not used within the function, they will be ignored.
                           // The function will execute 4 + 5, which equals 9, and return that value.
console.log(out);
