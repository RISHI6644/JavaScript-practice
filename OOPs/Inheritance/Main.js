console.log("let's learn about Classical Inheritance in JS!!!");

/* Classical Inheritance: Classical inheritance is a way for one class to extend
    another class. So we can create new functionality on top of the existing.
   And by doing this, methods and properties from base class can be passed into
    derived class.
   JavaScript is a bit confusing for developers experienced in class-based languages
    (like Java or C++), as it is dynamic and does not have static types.
 */

class Human {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    welcome() {
        console.log(`Welcome ${this.name}!`);
    }
}

class Teacher extends Human {
    constructor(_name, _age, _initial) {
        super(_name, _age);
        this.initial = _initial;
    }

    // Inheriting a method from super class
    test() {
        super.welcome();
    }
}

class Student extends Human {
    constructor(_name, _age, _cgpa) {
        super(_name, _age);
        this.cg = _cgpa;
    }
}


let human1 = new Human("Rishi", 25);
console.log(human1);

let teacher1 = new Teacher("Rishikesh Das", 25, 'RKD');
console.log(teacher1);
teacher1.test();

let student1 = new Student("Rishikesh Das", 25, 3.32);
console.log(student1);
