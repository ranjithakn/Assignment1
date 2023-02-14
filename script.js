/*
Project: Assignment1 : My First JavaScript Application
Date: 2 / 10 / 23
Author: Ranjitha
*/

document.write("Welcome to First JS Program\n");
/* 1) Convert the following highlighted identifiers to Camel Case notation:
 let some_Month 
function the_Month()
let current_Month
let summer_month
let MyLibrary_Function
*/
// 2)Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
/*
let a = 10; //numeric literal
let b = "Hello";//string literal
let c = true; //boolen literal
let d = null; //null literal
*/
//3) Give me two examples of complex / variable expressions.

let name = 'Ranjitha K N'
alert(`Welcome the class ${name}`)

let a = 11.5;
let b = 10;
let c = a + b;
document.write("\n");
document.write("the values of c is: " + c);
document.write("\n");

//4) Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, 
//State, Zip Code, Your Age, Referral Source, May We Contact You.Use Camel Casing and Hungarian Notation when naming your identifiers.
let FirstName; // Upper Camel Case
let lastName; // Lower Camel case
let arrAddress; //Hungarian case prefix with datatype array
let arrCity; //Hungarian case prefix with datatype array
let arrState; //Hungarian case prefix with datatype array
let zipCode; // Lower Camel case
let iAge; //Hungarian case prefix with datatype integer
let referralSource; //Lower Camel Case
let mayWeContactYou; //Lower Camel case

//5) Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
// 3 ways to declare variables are var, let and const
FirstName = "Ranjitha";
lastName = "KN";
document.write("\n");
document.write("Your name is:\n " + FirstName + lastName);
const year = 20;
iAge = 30;
let age = iAge + year;
document.write("\n");
document.write("Present Age is:\n" + age);
//6) Create a variable. Add a number and a string and display the coerced result in the browser’s console window.
let var1 = 10;
let res = var1 + "Hello";
document.write("\n");
document.write("The result of int and string "+res);

// 7) Create two variables.
//For the first variable, add a Boolean and a string and display the coerced result.
//For the second variable, add a number and a Boolean and display the coerced result.

//let a;
//boolean b;
//let b = false;

//a = "hello" + true;
//document.write("Boolean+string"+a);
//let c = 19 + b;
//document.write("Boolean and int" + c); // in command prompt the c evaluates to 19, but in browser the output not displayed.

//8) Is the following string literal valid ? If not, how would you fix it ?
// The below statement through an error Uncaught SyntaxError: Unexpected identifier
//let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
//console.log(someString)

let someString = 'Who once said, \"Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
console.log(someString)
document.write(someString);

//9)Create a variable that produces a null value in the console window.
//Then, create a variable that produces an undefined value in the console window.



