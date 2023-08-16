console.log("Let's learn about Arrays in JS!!!");

/* Arrays: Similar to variable, an array also stores data, but it can store
    multiple data items and stores them as ordered collections.
    It enables storing multiple values under a same variable name, and we can
    also perform operations on them by using different methods and properties.
    Also, every value gets a sequential index starting from 0.

    In JS, arrays can store values of different data types whereas in statically
    typed language, arrays can store data of a specific type by which the array
    is defined.

    Syntax: let x = new Array();
            or, let x = []; // This is mostly used
 */

var arr = [18, 30, 10, 74, "Rishi", 3.32];
console.log(arr);

var a = arr[0] + arr[5]; // Accessing the array elements
console.log(a);

arr[4] = "Kesh"; // Replacing an element
console.log(arr);

console.log('The length of the array is', arr.length);

// In build JS array methods
var arr2 = [13, 9, 19, 98];

// pop method: removes the last element
p = arr2.pop();
console.log(p); // To keep trac of the popped element
console.log('popped array', arr2);

// push method: adds an element at the end of an array
p2 = arr2.push(100);
console.log(p2);
console.log('Push array', arr2);

// shift method: removes the first element
s = arr2.shift();
console.log(s);
console.log('shifted aray', arr2);

// unshift method: adds an element at the start of an array
u = arr2.unshift(102);
console.log(u);
console.log('unshifted array', arr2);
