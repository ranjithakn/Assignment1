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

let value = null;
console.log(value);

let value2;
console.log(value2);


//10) Use the unary typeof operator on various literals to return the following types 
//within the console window: string, number, Boolean, object, and undefined.

typeof ("John"); //string
typeof (10); // number
typeof (true); //boolean
typeof [1, 2, 3, 4]; //object
typeof name; //undefined

//11) Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:

//Hello Zak Ruvalcaba, welcome to the JavaScript class!
let fname = "Ranjitha";
let lname="KN"
alert("Hello " + fname + " " + lname + ",\nWelcome to the JavaScript");

//12) Replace the hardcoded string of your name with a prompt that asks the user for their name. 
//The prompt’s response will now be captured in the name variable.

//var name = window.prompt("What is your name: ");
//document.write("Hey " + name + "How are You?");
window.alert("Hey " + name + "How are You?");

//let class_taken = window.prompt("Enter the course");
//document.write("Hello " + name + "Welcome to the " + class_taken);

//13) Declare a variable called x and assign it a value of 10.
//Declare a variable called y and assign it a value of 20.
//Display the sum of those two numbers in the console window.
let x = 10, y = 20;
z = x + y;
document.write("The sum of two numbers is:" + z);

//14) Declare a variable called x and assign it a value of 20.
//Add and assign 20 to that variable and display the result in the console window.
//The result should be 40.

let x1 = 20;
x1 += 20;
document.write("The sum of two numbers is:" + x1);

//15) Declare a variable called x and assign it a value of 20.
//Multiply and assign 5 to that variable and display the result in the console window.
//The result should be 100.

let x2 = 20;
x2 *= 5;
document.write("The mul of two numbers is:" + x2);
//16) Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
//Divide and assign 1 to that variable and display the result in the console window.
//The result should be 2. If you got 6.66 try again.

let x3 = 20 % 3;
document.write("The remainder of two numbers is:" + x3);

//17)Using a set of Comparison and Logical operators, write an application that evaluates to true 
//and displays the result within the console window.
//App to display the number even or odd

/*let a = prompt("Enter an integer number");
//let a = 8;
if (a % 2 == 0) {
    document.write("Even number");
}
else
    document.write("Odd number");*/
    

/*Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
*/
/*
let a = 5;
if (a < 10) {
    document.write("The number is less than 10");
}
else if (a > 10) {
    document.write("The number is greater than 10");
}
else
    document.write("The number is equal to 10");
*/