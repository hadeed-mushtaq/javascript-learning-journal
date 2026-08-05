//Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (remainder)
console.log(a ** b); // 1000 (10³)

//Assignment Operators
let score = 10;

score += 5; // 15
score -= 2; // 13
score *= 2; // 26
score /= 2; // 13

console.log(score);

//Comparison Operators: These return a boolean value (true or false)
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(10 <= 9);  // false
console.log(10 == "10");  // true
console.log(10 === "10"); // false

//== vs ===
//== checks for equality of value, while === checks for equality of both value and type.
console.log(10 == "10");  // true (value is equal)
console.log(10 === "10"); // false (type is different)