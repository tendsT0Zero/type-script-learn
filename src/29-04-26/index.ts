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


//Generics in TypeScript
// Generics in TypeScript allow you to create reusable components that 
// can work with a variety of data types. 
// They provide a way to define functions, classes, or interfaces that
//  can operate on different types while maintaining type safety. 
// By using generics, you can write code that is flexible and adaptable
//  to different data structures without sacrificing type checking.

interface ApiResponse<T>{
    data:T,
    status:number,
    message:string
}


const response:ApiResponse<Student>={
    data: student,
    status: 200,
    message: "Success"
}

console.log(response);


// Array

let numbers:number[] =[1,2,3,4,5];
let names:string[] = ["Nayeem", "John", "Doe"];
let tupeles:[string,number,string,boolean] = ["Nayeem", 20, "A+", true];
let mixedArray:(string|number|boolean)[] = ["Nayeem", 20, "A+", true, 123, "Hello"];


interface Profle{
    professionalInfo:{
        companyName:string,
        position:string,
        experience:number
    },
    personalInfo:{
        name:string,
        age:number,
        hobbies:string[]
    },
    contactInfo:{
        email:string,
        phone:string
    }

}

//array of Profile

let profiles:Profle[]=[
    {
        professionalInfo:{
            companyName:"Tech Company",
            position:"Software Engineer",
            experience:5
        },
        personalInfo:{
            name:"Nayeem",
            age:20,
            hobbies:["Coding", "Gaming", "Traveling"]
        },
        contactInfo:{
            email:"nayeem@example.com",
            phone:"123-456-7890"
        }

    },
    {
        professionalInfo:{
            companyName:"Another Tech Company",
            position:"Senior Developer",
            experience:8
        },
        personalInfo:{
            name:"John Doe",
            age:25,
            hobbies:["Reading", "Swimming", "Cooking"]
        },
        contactInfo:{
            email:"johndoe@example.com",
            phone:"098-765-4321"
        }
    },
    {
        professionalInfo:{
            companyName:"Tech Startup",
            position:"Frontend Developer",
            experience:3
        },
        personalInfo:{
            name:"Jane Smith",
            age:22,
            hobbies:["Designing", "Traveling", "Photography"]
        },
        contactInfo:{
            email:"janesmith@example.com",
            phone:"555-123-4567"
        }
    }
]


//Filter() in TypeScript
// filter the profile whose habbit is Designing

const designerProfiles=profiles.filter(
    (profile)=>profile.personalInfo.hobbies.includes("Designing")
)

console.log(designerProfiles);