'use strict';

console.log("Let's discuss how 'this' keyword behaves in strict mode on browser!!!");

// 'this' in strict, browser
console.log(this); // will return a window which object


// Now let's invoke 'this'  inside a function
function displayThis() {
    console.log(this);
}

displayThis(); // Will return undefined


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

obj.func() // It will refer to that particular object. So, no difference


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

obj2.func2(); // Will return a window object
