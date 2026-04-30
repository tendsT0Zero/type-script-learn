// Methods in Interface

interface Person {
  name: string;
  age: number;
  greet(): void; // Method in interface
}

let person: Person = {
  name: "Nayeem",
  age: 20,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  },
};
person.greet();

// Optional properties

interface Car {
  make: string;
  model: string;
  year?: number; // Optional property
}

let car1: Car = {
  make: "Toyota",
  model: "Camry",
};

let car2: Car = {
  make: "Honda",
  model: "Civic",
  year: 2020,
};

// Readonly properties

interface Point {
  readonly x: number;
  readonly y: number;
}
let point: Point = {
  x: 10,
  y: 20,
};

//point.x=40; // Error: Cannot assign to 'x' because it is a read-only property.
