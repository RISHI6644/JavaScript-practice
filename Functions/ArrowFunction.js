console.log("Let's learn about Arrow functions in JS!!!");

/* Array Function: Arrow functions can be used in the same way as
    Function as Expressions.
    Syntax: let func = (arg1, arg2, ..., argN) => expression;
    If we have only one argument, then parentheses around parameters
    can be omitted, making that even shorter.
    If there are no arguments, parentheses are empty.

    Multiline arrow functions: In these functions, expressions are enclosed
     in curly braces, which require a return within them to return a value.
 */

let func1 = function (p) {
    console.log(p * 2);
}

func1(5);

// Using arrow function / fat-arrow function
let func2 = (a) => console.log(a + 5);
func2(15);

let func3 = (a, b) => {
    let c = a + b;
    return c;
}

console.log(func3(6, 9));
