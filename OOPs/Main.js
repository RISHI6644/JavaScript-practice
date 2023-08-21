"use strict";

console.log("Let's dive into the world of Object Oriented JavaScript!!!");

/* OOP: Object-oriented Programming is a computer programming model that organizes
    software design around data, or objects rather than functions and logic. An object
    can be defined as a data field that has unique attributes and behavior.

    The four pillars of OOPs are - Encapsulation, Abstraction, Polymorphism, Inheritance

    JS is not actually an Object-oriented language, but we can write Object-oriented code
     by using something known as prototype object.
 */


/* this keyword: A function's this keyword behaves a little differently in JavaScript
    compared to other languages. It also has some differences between strict mode and
    non-strict mode.
    'this' keyword refers to an object that is executing the current piece of
     code. It references the object that is executing the current function. If the function
     being referenced as a regular function, 'this' references the global object. If the
     function that is being referenced is a method in an object, 'this' references the object
     itself.
    'this' keyword behaves differently in browser and node.

   Non-strict mode: It is the default mode of operation in JavaScript. In this mode,
    the JavaScript engine allows for more flexible coding and provides fewer restrictions.
    This means that some code that would cause errors in strict mode may execute without any
    issues in non-strict mode. While this may seem advantageous at first, it can lead to
    unexpected behavior and security vulnerabilities.
    Non-strict mode of JavaScript is sometimes referred to as sloppy mode. This is not an
    official designation, but you are likely to come across it if you spend time doing serious
    JavaScript code.

   Strict mode: JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript,
    thereby implicitly opting-out of "sloppy mode". When strict mode is enabled, the JavaScript engine
    checks for syntax errors and runtime errors that would otherwise go unnoticed in non-strict mode.
    This makes it easier for developers to catch errors early in the development process, resulting in
    fewer bugs and better code quality.
    To enable strict mode in JavaScript, we simply need to add the string “use strict” at the beginning
     of a script or function.
 */

// Sloppy and strict mode example
a = 10; // Even if we have not defined it, but it will run
console.log(a);
