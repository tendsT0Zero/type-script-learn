function greet(name: string): string {
  return `Hello ${name}!`;
}

console.log(greet("Nayeem"));

// primitive data types in typescript

let examCode: string = "TS-101";
let totalMarks: number = 100;
let isPassed: boolean = true;
let studentName: string = "Nayeem";
let studentAge: number = 20;
let studentGrade: string = "A+";

let studentPin: number | string = 12345; // can be a number or a string

//Non-primitive data types in TypeScript


//what is an interface in typescript?
// An interface in TypeScript is a way to define 
// the structure of an object. It specifies the properties 
// and their types that an object should have. 
// Interfaces are used to ensure that objects adhere to a specific shape,
//  making it easier to work with complex data structures and providing
//  better type safety. They can also be used to define contracts for 
// classes, ensuring that they implement certain methods or properties.
//can we add methods in an interface in typescript?
// Yes, we can add methods in an interface in TypeScript.

interface Student {
  name: string;
  age: number;
  grade: string;
  welcomeMessagePrinting(name: string): void; 
}


let student:Student={
  name: "Nayeem",
  age: 20,
  grade: "A+",
  welcomeMessagePrinting: (name) => {
    console.log(`Welcome, ${name}!`);
  }
}