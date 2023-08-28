console.log("Let's learn about the usage of 'this' keyword in JS!!!");

// We will learn about the usage of 'this' keyword in four cases:

// 'this' in non-strict, node-JS
console.log(this); // will return an empty object

// Now let's invoke 'this'  inside a function
function displayThis() {
    console.log(this);
}
displayThis(); // Will return a global object

/*
    Global Object: A global object is an object that is always exists in the global scope.
     It behaves differently in browser and on Node.
      i) In a web browser, any code which the script doesn't specifically start up as a background
            task has a Window as its global object. This is the vast majority of JavaScript code on the Web.
      ii) Scripts running under Node.js have an object called global as their global object.
 */


// Now let's invoke 'this'  from a function of an object
let obj = {
    name: "Rishi",
    age: 24,
    func: function () { // This function is actually a method because whenever we create a function inside
                              // an object, it will act as a method of that particular object
        console.log(this);
        console.log(this.name);
    }
};

obj.func() // It will refer to that particular object


// Now let's invoke 'this'  from a function of another function of an object

let obj2 = {
    name: "Monty",
    age: 25,
    func2: function () {
        function nestedFunc() {
            console.log(this);
        }
        nestedFunc();
    }
}

obj2.func2(); // Will return a global object
