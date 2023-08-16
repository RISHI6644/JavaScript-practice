console.log("Let's learn about Modules and Modularity!!!");

/* Module: A module is just a file. One script is one module. Modules can
    load each other and use special directives export and import to interchange
    functionality, call functions of one module from another one:
        i)  export keyword labels variables and functions that should be accessible
             from outside the current module.
        ii) import allows the import of functionality from other modules.

   As our application grows bigger, we want to split it into multiple files, so-called
    “modules”. A module may contain a class or a library of functions for a specific purpose.
    It appeared in the standard in 2015 (ES6), gradually evolved since then, and is now
    supported by all major browsers and in Node.js.
 */

// Let's see an example of module
function addition(a, b) {
    console.log(a + b);
}

function subtraction(a, b) {
    console.log(a - b);
}

function multiplication(a, b) {
    console.log(a * b);
}

function division(a, b) {
    console.log(a / b);
}

module.exports = {
    add: addition,
    sub: subtraction,
    mul: multiplication,
    div: division
};