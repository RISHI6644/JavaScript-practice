console.log("Let's learn about how 'this' keyword behaves on browser!");

// 'this' in non-strict, browser
console.log(this); // will return a window which is an object

/*
    window: A global variable, window, representing the window in which
     the script is running, is exposed to JavaScript code. It is home to
     a variety of functions, namespaces, objects, and constructors which
     are not necessarily directly associated with the concept of a user
     interface window.
    In a tabbed browser, each tab is represented by its own Window object.
 */

// Now let's invoke 'this'  inside a function
function displayThis() {
    console.log(this);
}

displayThis(); // Will return a window object


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
