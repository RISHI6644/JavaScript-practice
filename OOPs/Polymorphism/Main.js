console.log("Let's learn about 'Polymorphism' in JS!");

/* Polymorphism: Let's break down the word:
                    Poly -->  many
                    Morph --> forms
                    ism  -->  method
    So, we can say that  polymorphism means the same function with different
     signatures. It is one of the core concepts of object-oriented programming
     languages. It provides an ability to call the same method on different
     JavaScript objects. As JavaScript is not a type-safe language, we can pass
     any type of data members with the methods.
 */

class Animal {
    sound() {
        console.log("Animals make different sounds!");
    }
}

class Dog {
    sound() {
        console.log("Dog Barks!");
    }
}

class Cat {
    sound() {
        console.log("Cat Mews!");
    }
}

let animal1 = new Animal();
animal1.sound();

let dog1 = new Dog();
dog1.sound();

let cat1 = new Cat();
cat1.sound();
