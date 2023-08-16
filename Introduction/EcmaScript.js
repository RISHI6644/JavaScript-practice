console.log("Let's learn about ES6 in JavaScript!!!");

/* EcmaScript: ECMAScript is a scripting language specification on which JavaScript is based.
    ECMA (European Computer Manufacturers Association) International is in charge of standardizing
    ECMAScript.
    ES6 or the ECMAScript 2015 is the 6th and major edition of the ECMAScript language specification
    standard. It defines the standard for the implementation of JS, and it has become
    much more popular than the previous edition ES5.
    ES6 comes with significant changes to the JS language. It brought several new features such as
    let and const keywords, Arrow functions, default parameters, rest and spread operators, template
    literals, classes, modules and many other enhancements to make JS programming easier.
 */

console.log("Problems with var keyword!!!")
// i) “var” tolerates re-declarations
var v = 1998;
var v = 2000; // With var, we can redeclare a variable any number of times.
                      // If we use var with an already-declared variable, it’s just ignored

console.log(v)

// ii) “var” has no block scope means Variables, declared with var, are either function-scoped
      // or global-scoped. They are visible through blocks.
if (true) {
    var test = true;
}
console.log(test);

// iii) “var” variables can be declared below their use
// In other words, var variables are defined from the beginning of the function,
// no matter where the definition is
function sayHello() {
    phrase = "Hello!!!";
    console.log(phrase);

    var phrase; // all var are “hoisted” (raised) to the top of the function.
}

sayHello();
