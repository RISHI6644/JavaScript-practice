console.log("Let's dive into the world of classes in JS!!!");

/* Class: In object-oriented programming, a class is an extensible program-code-template
    for creating objects, providing initial values for state (member variables) and
    implementations of behavior (member functions or methods).
   In practice, we often need to create many objects of the same kind, like users, or
    cars or whatever.
   In modern JavaScript, there is a more advanced “class” construct, that introduces
    great new features which are useful for object-oriented programming.
 */

class Student {
    constructor(_name, _id) {
        this.name = _name;
        this.id = _id;
    }
    greeting() {
        console.log(`Greeting! ${this.name}. Your id is ${this.id}`);
    }
}

let student1 = new Student("Rishikesh Das", 18301074);
console.log(student1);

student1.greeting();
