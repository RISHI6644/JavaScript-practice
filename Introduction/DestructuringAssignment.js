console.log("Let's dive into the Destructuring Assignment!!!");

/* Destructuring Assignment: The destructuring assignment syntax is a JavaScript expression
    that makes it possible to unpack values from arrays, or properties from objects, into
    distinct variables.
   It uses similar syntax, but on the left-hand side of the assignment to define what values
    to unpack from the sourced variable.
   “Destructuring” does not mean “destructive”. It’s called “destructuring assignment,”
    because it “destructurizes” by copying items into variables. But the array itself is
    not modified.
 */

// Array Destructuring
let arr = ['R', 'I', 'S', 'H', 'I'];
console.log(arr[0]);
console.log(arr[1]);

let [a, b, c, d, e] = arr;
console.log(d);

// Ignore elements using commas
let [x, , y, , z] = arr;
console.log(y);
console.log(z);


// Object Destructuring
let obj = {
    name: "RISHI",
    age: 25,
    gender: "M"
};

let {p, q, r} = obj;
console.log(p); // undefined
console.log(q); // undefined
console.log(r); // undefined

let {name, age, gender} = obj;
console.log(name);
console.log(age);
console.log(gender);

// Accessing by particular key name
let {name: n, age: ag, gender: g} = obj;
console.log(n);
console.log(ag);
console.log(g);

// Nested Destructuring
// When we have nested objects
let obj2 = {
    name2: "Paige",
    age2: 21,
    gender2: "F",
    address: {
        country: "USA",
        city: "Florida"
    }
};

let {name2: n2, age2: ag2, gender2: g2, address: ad} = obj2;
console.log(n2);
console.log(ag2);
console.log(g2);
console.log(ad); // it will return the address in an Object format

// To access the element of a nested object
let {address: {country: ct}} = obj2;
console.log(ct);

// When the object has more properties, We can use the rest pattern
let courses = {
    CSE110: "Introduction to Programming",
    CSE111: "Object Oriented Programming",
    CSE220: "Data Structures",
    CSE221: "Algorithm"
};

let {CSE110: first, ...rest} = courses;
console.log(rest.CSE111);
console.log(rest.CSE220);
console.log(rest.CSE221);
