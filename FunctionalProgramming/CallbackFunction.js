console.log("Let's learn about callback functions in JS!!!");

/* Callback Functions: In JS, a callback function is a function that is passed
    into another function as an argument (Since in JS, functions are objects).
    This function can be invoked at a later stage of time.
 */

function printFirstName(first_name, call_back) { // Here, call_back is referencing the printLastName function
    console.log(first_name);
    call_back("DAS");
}

printFirstName("RISHIKESH", printLastName);

function printLastName(last_name) {
    console.log(last_name);
}

const isEven = (n) => {
    return n % 2 == 0;
}

let printResult = (call_back, num) => { // Here, call_back is referencing the isEven function
    const isNumEven = call_back(num);
    console.log(`The number ${num} is an Even Number
${isNumEven}`);
}

printResult(isEven, 24);
