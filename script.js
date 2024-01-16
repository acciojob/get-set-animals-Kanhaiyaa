//complete this code
class Animal {
	constructor(species){
		this._species=species
	}

	get species(){
		return this._species
	}

	makeSound(){
		console.log("Generic animal sound")
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr")
	}
}

const genericAnimal = new Animal("Unknown");
console.log(genericAnimal.species); // Output: Unknown
genericAnimal.makeSound(); // Output: Generic animal sound

const fluffy = new Cat("Cat");
console.log(fluffy.species); // Output: Cat
fluffy.makeSound(); // Output: Generic animal sound
fluffy.purr(); // Output: purr

const rover = new Dog("Dog");
console.log(rover.species); // Output: Dog
rover.makeSound(); // Output: Generic animal sound
rover.bark(); // Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
