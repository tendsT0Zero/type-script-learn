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
