const name="Hadeed"; 
let age=21;
let favoriteGame="Tekken8";
let favoriteFood="Biryani";
let gymMembership=true;

console.log(name);
console.log(age);
console.log(favoriteGame);
console.log(favoriteFood);
console.log(gymMembership);

//Output:
Hadeed
21
Tekken8
Biryani
true

//Q1: What is the difference between let and const?
//Ans: The difference between let and const is that let allows you to declare variables that can be reassigned later, 
// while const is used to declare variables that cannot be reassigned after their initial assignment. 
// In other words, let is mutable and const is immutable.

//Q2: What are the six data types we learned?
//Ans: The six data types we learned are:
//1. String: Represents textual data, enclosed in single or double quotes.
//2. Number: Represents numeric values, including integers and floating-point numbers.
//3. Boolean: Represents a logical value that can be either true or false.
//4. Null: Represents the intentional absence of any object value.
//5. Undefined: Represents a variable that has been declared but has not yet been assigned a value.
// We didn't learn six data types, we learned five data types.

//Q3: What happens if you change a const variable?
//Ans: If you try to change a const variable, it will throw a TypeError because const variables are immutable and cannot be reassigned.

//JavaScript actually has 7 primitive data types, which are:
//1. String
//2. Number
//3. Boolean    
//4. Null
//5. Undefined
//6. Symbol
//7. BigInt 