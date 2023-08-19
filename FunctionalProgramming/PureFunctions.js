console.log("Let's learn about pure functions in functional programming!!!");

/* Impure Function:

    Pure Functions: A pure function is a function which given the same input and
        always returns the same output. It does not produce any side effects.
 */

let a = 4;
function add(x) { // This is an impure function
    console.log(x + a);
    a++;
}

add(6); // 10
add(6); // 11
add(6); // 12

// Let's write the same code in pure function
function pureAdd(x, a) {
   // console.log(x + a); // If we use console.log here means it is using
                        // external factor which is not allowed in pure functions
    return x + a; // Now the function is said to be pure
}
console.log(pureAdd(2, 3));

// pureAdd(2, 3); // 5
// pureAdd(2, 3); // 5
