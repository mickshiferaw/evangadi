// Question 1: Find out the answers for these by displaying it on the console. You will need to compare the value on the left of the operator with the value on the right. Please note that the answer for each question below should be either True or False.
console.log (24 > 3)
console.log (2 < "12") 
console.log (0 == 2) 
console.log (2.0 === 2)
console.log (2.0 == "2")
console.log (2 < "John") 
console.log (2 > "John") 
console.log ("2" < "2") 
console.log ("2" > "12") 
console.log (1 == 1 || 3 == 2 || 3 == 7) 
console.log (1 == 1 && 2 == 2 && 3 == 7) 
console.log (1 == 1 || 2 == 2 && 3 == 7) 
console.log (1 == true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1"))

// Question 2: Answer the following questions. Make sure to think about each question and try to solve it in your brain before you see the result on the console.

// 1. Which expression returns true?
// A/   ‘1’ === 1 
// B/   1 == 1 
// C/   1 === 1 
// D/  B and C from above

// Answer D

// 2. What is the value of x in this statement? 
// let x = (1 == true);
//  A/ 1 
//  B/ true 
//  C/ false 
//  D/ undefined

// Answwr Undefined


//  3. What is the value of y from the following statements? 
// let x = 10; 
// let y = (x > 5) && (x < 15) 
//  A/ 10 
//  B/ 5 
//  C/ 15 
//  D/ true 

// Answer true

//  4. What is the value of x from the following statements? 
// let x = 5; 
//  x += 3; 
//  A/ 3 
//  B/ 8 
//  C/ 15 
//  D/ 5 

// Answer is 8

//  5. What is the value of y from the following statements? 
// let x = 10; 
// let y = x++; 
//  A/ 10 
//  B/ 11 
//  C/ 12 
//  D/ 13 

// Answer is 10

//  6. What is the value of y in the following statements? 
// let x = 1; 
// let y = (x !== 2);
//  A/ 1 
//  B/ 2 
//  C/ false 
//  D/ true

// Ansewr is true

// 7. What is the output of (+”2”+2)?

// Answer is 4

// 8. What is the output of (7 % 3)? 

// Answer is 1

// 9. What is the output of (2+true)?

// Answer is 3

// Question 3: 
// ● Write a simple script that adds 1 and 2 and displays the result on the console 
// ● Use variables a, b & c ● 
// Use "let" to declare the variables 
// ● Use the formula c = a + b ● 
// Display the value of c on console

let a = 1;
let b = 2;
let c = a + b;
console.log (c);

// Question 4: 
// ● Create a variable to hold your first name
// ● Create another variable to hold your last name 
// ● Create a third variable to hold your full name 
// ● Assign the value of your first name and last name to the first two variable 
// ● Use "+" to concatenate your first name and last name to assign the result to your last name's variable 
// ● Don't forget to include space between your first and last name 
// ● Display the value of your full name on the console

let firstName = "Michael";
let lastName = "Shiferaw";
let fullName = firstName + " " + lastName;
console.log (fullName)

