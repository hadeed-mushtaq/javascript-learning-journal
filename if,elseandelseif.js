//The if statement.
//An if statement runs code only if a statement is true.
let age = 20;

if(age >= 18){
    console.log("You are an adult.");
}
//Output: You are an adult.

let age = 15;
 
if(age >= 18){
    console.log("You are an adult.");
}
//Output: Nothing. Because the condition is false.

//The else statement.
//An else runs when the if condition is false.

let age = 15;

if(age >= 18){
    console.log("You are an adult.");
} else{
    console.log("You are a minor.");
}
//Output: You are a minor.

//The else if statement.
//Use it when you have multiple conditions.

let marks = 85;

if(marks >= 90){
    console.log("Grade A+");
} else if(marks >= 80){
    console.log("Grade A");
} else if(marks >= 70){
    console.log("B");
} else{
    console.log("Grade C");
}
//Output: Grade A
