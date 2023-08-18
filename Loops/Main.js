console.log("Let's dive into the conditional statements in JS!!!");

var marks = 91;

// if-else statements
if (marks >= 90) {
    console.log("Congrats! You've earned an A!!!");
}
else {
    console.log("Better Luck next time!!!");
}

// if-else if statements
var score = 85;

if (score < 40) {
    console.log("F");
}
else if (score >= 40 && score < 50) {
    console.log("D");
}
else if (score >= 50 && score < 60) {
    console.log("C");
}
else if (score >= 60 && score < 70) {
    console.log("B");
}
else if (score >= 70 && score < 80) {
    console.log("A-");
}
else if (score >= 80 && score < 90) {
    console.log("A");
}
else {
    console.log("A+");
}

// Loops are the statements that we use to control a flow of the
// program and to do some repetitive tasks

// for loop
for (var i = 0; i <= 3; i++) {
    console.log("for loop");
}

// Suppose you have given an array, and you have to return
// the square of each element of that array
var arr = [1, 2, 3, 4, 5];
var sqr_arr = [];

for (var i = 0; i < arr.length; i++) {
    sqr_arr[i] = arr[i] * arr[i];
    // sqr_arr.push(arr[i] * arr[i]);
}

console.log(sqr_arr);


// while loop
var num = 1;
while (num <= 5) {
    console.log(num);
    num++;
}
console.log()

// do while loop : It will execute at least once even if the condition gets violated
var i = 6;
do {
   console.log(i);
   i++;
} while (i <= 5);

// for-in loop: In JS, for-in loop allows to loop through the properties of an object
var colors = {
    primary: "Blue",
    secondary: "Red",
    tertiary: "White"
};

for (var color in colors) {
    console.log(color); // returns the key
    console.log(colors[color]); // returns the value
}

var arr = ["Better", "Call", "Saul"];

for (var x in arr) {
    console.log(arr[x]);
}

// for-of loop: allows iteration over iterable objects
var courses = ['CSE110', 'CSE111', 'CSE220', 'CSE221'];

for (var course of courses) { // Here, course actually specifying the values not the indices like for-in
    console.log(course);
}

// There is a method namely 'entries()' to access the indices
for (var [index, course] of courses.entries()) {
    console.log(index, course);
}

var str = "JavaScript";

for (var char of str) {
    console.log(char);
}
