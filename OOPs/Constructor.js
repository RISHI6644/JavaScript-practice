console.log("Let's learn about constructors in Java!!!");

/* Constructor: The constructor method is a special method of a class for
    creating and initializing an object instance of that class.
   A constructor enables us to provide any custom initialization that must be
    done before any other methods can be called on an instantiated object.
   If we do not provide our own constructor, then a default constructor will be
    supplied for us. If our class is a base class, then the default constructor
    will be empty. i.e. constructor() {}
   But if our class is a derived class, then the default constructor
    calls the parent constructor by using 'super' keyword, passing along any arguments
    that were provided. i.e. constructor(...args) {super(...args);}
 */

function designCar(_brand, _color, _seats) {
    this.brand = _brand;
    this.color = _color;
    this.seats = _seats;

    this.drive = function () {
        console.log(`I am driving ${this.brand} and it is of ${this.color} color`);
    }
}

let car1 = new designCar("BMW", "Black", 4);
console.log(car1);
car1.drive();

let car2 = new designCar("Ferrari", "Red", 2);
console.log(car2);
car2.drive();
