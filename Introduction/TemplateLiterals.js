console.log("Let's learn about Template literals!!!");

/* Template literals: Template literals are literals enclosed with backtick (`) characters,
    allowing for multi-line strings, string interpolation with embedded expressions, and special
    constructs called tagged templates.
    Template literals are sometimes informally called template strings, because they are used most
    commonly for string interpolation (to create strings by doing substitution of placeholders).

    Along with having normal strings, template literals can also contain other parts called placeholders,
    which are embedded expressions delimited by a dollar sign and curly braces: ${expression}.

    To know more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
 */

console.log("JavaScript is Awesome!!!");

// Let's try to print the string in multiple lines
// console.log("JavaScript
//     is Awesome!!!)    // So it is not allowing it!

// let's try to do this by using template literals
console.log(`JavaScript
is Awesome!!!`);

let a = 13;
console.log("The number is", a);
console.log("The number is " + a);

console.log(`The number is ${a}`);
