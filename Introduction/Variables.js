console.log("Let's learn about variables in JavaScript!!!");

/* Variables: variables are containers for storing data values. it means
    anything that can vary.
    In JS, a variable stores the data value which can be changed later on.
 */

// There is a reserved keyword namely 'var' to declare variables in JS
// Syntax: var variable_name = value; // Here, variable_name is called an identifier
var a = 5; // This variable storing an integer
var name = "JavaScript"; // This variable storing a string
var greet = 'Hello'; // In JS, we can assign string within double or single quote

/* Dynamically vs Statically typed languages
    Dynamically typed languages: variables can receive different values at runtime and
     their type is defined at run time. Example: var a = 24; var a = "Rishikesh";
     JS, python are dynamically typed language.
    Statically typed languages: each variable and expression is already known at compile-time
     Example: int a = 24; String name = "Rishikesh"
     Java, C++ are statically typed languages.
 */

var x = 18;
let y = 10;

console.log(x, y);

var x = 7;
// let y = 19; // Solution of the redeclaration problem
y = 15; // Re-assigning is allowed

console.log(x);
// console.log(y); // It will show an error
console.log(y);

if (true) {
    var z = 5;
    // let z = 5; // z will only be accessible in this scope
}
console.log(z); // Variables declared with var keyword are not blocked liked function scoped variables

// const keyword: It behaves like 'let' except re-assigning is not allowed means the value will remain constant
const PI = 3.1416;
console.log(PI);

// PI = 3.14; // cannot re-assign
