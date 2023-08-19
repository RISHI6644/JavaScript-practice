console.log("Let's learn about Objects in JavaScripts!!!");

/* Objects: In JS, an object is an unordered collection of key-value pairs.
    Each key-value pair is called a property. And key name is a string and
    value can be of any type.
    Example: car = { model_name: S-class,
                    brand_name: Mercedes,
                    top_speed: 400 kph,
                    dolor: Black
                  }
    JS provides many ways to create an object. The most commonly used one is to
    use the object literal notation.

    Syntax: let obj = new Object(); // Using "Object constructor"
            or, let obj = {}; // Using "Object literal"
 */

var myself = {
    firstName: "Rishikesh",
    lastName: "Das",
    age: 25
};

console.log(myself);


// Accessing values of an object
// Using dot notation
console.log(myself.age);


// Using bracket notation
var name = myself["firstName"];
console.log(name);

var hero= {
    hero_name: "Steve Rogers",
    weapon_name: "Shield",
    age:  179,
    allies: ['Bucky Barnes', 'Bruce Banner', 'Tony Stark'], // We can add an array as a value of a key

    isAvenger: true,

    address: {                      // We can add another object inside an Object
        state: "New York",
        city: {
            city_name: 'Brooklyn',
            city_pin: 12345
        }
    }
};

console.log(hero);
console.log(hero.allies[2]);
console.log(hero.address.city.city_name);

hero.isAvenger = false;
console.log(hero.isAvenger);

// Adding new property
hero.movie_names = ['First Avenger', 'Civil War', 'Avengers: Age of Ultron'];
console.log(hero);

// Deleting a property
delete hero.isAvenger;
console.log(hero);
