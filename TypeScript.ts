// TypeScript is a programming language developed by Microsoft that build upon JavaScript by adding static type checking and other features to enhance the development experience and maintainability of large-scale JavaScript applications. It essentially provides optional static typing for Javascript, allowing you to catch type-related errors at compile-time rather than runtime. 
// Here are some key differences between TypeScript and JavaScript. 

// 1. Static Typing: TypeScript allows you to explicity specify types for variables, function parameters, and return values. This helps in catching type-related errors early during developement and provides better code documentation. 
// 2. Type Annototaions: TypeScript uses type annotations to define the types of variables, parameters, and return values. This can be particularly useful in making code more readable and self-documentation. 
// 3. Interfaces and Type Aliases: TypeScript provides features like interfaces and type aliases to define custom data structures with specific shapes. 
// 4. Compile-time Checking: TypeScript code is traspiled to JavaScript before execution. During this process, the TypeScript compiler checks for type errors, which can help catch bugs before the code runs. 
// 5. ES6 + support: TypeScript supports the latest ECMAScript features and can transpile them to compactible versions of JavaScript. 
// 6. Tooling and IDE Support: TypeScript provides better tooling and IDE support compared to plain JavaScript. It can provide autocompletion, type information, and error checking in development enviroments. 


// TypeScript provides several built-in data types that you can use to define the types of variables function parameters and return values. Here are some of the available data types in TypeScript. 

// Boolean
let isDone: boolean = false; 

// Number: Represents both integer and floating point numbers. 
let decimal: number = 0; 
let hex: number = 0xf00d; 
let binary: number = 0b1010; 
let octal:  number = 0o744;

// Represents textual area: 
let color: string = "blue"; 
let fullName: string = 'Anish Kumal'; 

// Array: Represents an ordered Collection of values. 
let number: number[] = [1,2,3,4]; 
let names: string[] = ['anish', 'santosh', 'ramesh']; 

// Tuple: Represetns an array with a fixed number of elements of specific types: 
let x: [string, number]; 
x = ['Hello', 0]; // ok 
// x = [0, 'Hello'] // error 


// Enum: Represents a set of named constants: 
enum Color { 
    Red, 
    Green, 
    Blue, 
} 

let c: Color = Color.Green; 

//  Any: Represents a value of any type. Use it when you don't have type information or need to work with various types. 
let dynamicValue: any = "hello"; 
dynamicValue = 42; 

// void: Represents the absence of a value. Often used as the return type of functions that don't return a value. 
function logMessage(message: string):void {
    console.log(message); 
} 

const showMessage = (message:string): void => {
    console.log(message); 
} 

// Object: Represents a non-primitive type, i.e. anything that is not number, string, boolean, symbol, null or undefined. 
let obj: Object = {key: 'value'}; 
obj = ['Anish', 'kumal', 'santosh']; 



// *********** Docs ********
interface User {
    name: string, 
    id: number
}  

const user: User = {
    name: 'Anish', 
    id: 2
} 


// since javascript supports class and object-oriented-programming, so does TypeScript. you can use an interface declration with classes: 

interface User {
    name: string, 
    id: number 
}

class UserAccount {
    name: string;  
    id: number;  

    constructor(name:string, id: number) {
        this.name = name; 
        this.id = id; 
    } 
}
 
const user_account: User = new UserAccount('Anish', 1); 


// ***** composing types ************ 
// With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with unions, and with generics.

// unions 
type myBool = true | false; 


type WindowState = 'closed' | 'open' | 'minimized'; 
type lockState = 'locked' | 'unlocked'; 


// Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:
function getLength(obj: string | string[] ) {
    return obj.length; 
} 


// Type of 
function wrapInArray(obj: string | string[]) {
    if(typeof obj === 'string') {
        return [obj]; 
    }
    return obj; 
} 

// string	typeof s === "string"
// number	typeof n === "number"
// boolean	typeof b === "boolean"
// undefined	typeof undefined === "undefined"
// function	typeof f === "function"
// array	Array.isArray(a)


// Generics: 
// Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

type StringArray = Array<string>; 
type NumberArray = Array<number>; 
type ObjectWithNameArray = Array<{name: string}>; 


// we can declare own types that use generics: 
interface BackpackType<Type> {
    add: (obj: Type) => void; 
    get: () => Type; 
} 

declare const backpack: BackpackType<string>; 

// object is a string, because we declared it above as the variable part of Backpack.
const objects = backpack.get(); 

// backpack.add(23);  // Since the backpack variable is a string, you can't pass a number to the add function. 


// STRUCTURAL TYPE SYSTEM 
// One of the core priciples is that type checking focuses on the shape that values have. This is sometime is called 'duck typing' or 'structural typing' 

// In a structural type system, if two objects have the same shape, they are considered to be of the same type.

interface Point {
    x: number, 
    y: number
} 

function logPoint(p: Point) {
    console.log(`${p.x} ${p.y}`)
}

const point = {x: 12, y: 26}; 
logPoint(point); 


// The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.

// The shape-matching only requires a subset of the object’s fields to match.

