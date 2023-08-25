console.log("Let's learn about the usage of 'this' keyword in JS!!!");

// We will learn about the usage of 'this' keyword in four cases:

// 'this' in non-strict, node-JS
console.log(this); // will return an empty object

// Now let's invoke 'this'  inside a function
function displayThis() {
    console.log(this);
}
displayThis(); // Will return a global object

