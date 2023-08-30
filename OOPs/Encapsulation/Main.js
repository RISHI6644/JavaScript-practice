console.log("Let's learn about 'Encapsulation' in JS!");

/* Encapsulation: Encapsulation is the packing of data and functions into one component
    (for example, a class) and then controlling access to that component to make a "blackbox"
    out of the object.
   Because of this, a user of that class only needs to know its interface (that is, the data and
    functions exposed outside the class), not the hidden implementation.

   To achieve an encapsulation in JavaScript: -
    i) Use var keyword to make data members private.
    ii) Use setter methods to set the data and getter methods to get that data.
 */

class Person {
    // constructor() {
    //     var name;
    //     var age;
    // }

// Read/Write - Here, we use setter methods to write the data and getter methods to read that data.
    setName(_name) { // Write Only - In this case, we use setter methods only.
        this.name = _name;
    }

    getName() { // Read Only - In this case, we use getter methods only.
        return this.name;
    }

    setAge(_age) {
        this.age = _age;
    }

    getAge() {
        return this.age;
    }
}

let person1 = new Person();

person1.setName("RISHI");
console.log(person1.getName());

person1.setAge(25);
console.log(person1.getAge());
