//  Define Animal constructor function
function Animal() {
  this.type = "Animal";
}

// Add sound method to Animal.prototype
Animal.prototype.sound = function () {
  console.log("Animal sound");
};

// Define Dog constructor function and inherit from Animal
function Dog() {
  Animal.call(this); // Call Animal constructor
}

//Ensure Dog.prototype inherits from Animal.prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override sound method in Dog.prototype
Dog.prototype.sound = function () {
  console.log("Bark");
};

// Create an instance of Dog
let myDog = new Dog();

// Call sound method on myDog
myDog.sound();
