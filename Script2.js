// JavaScript source code
//17)Using a set of Comparison and Logical operators, write an application that evaluates to true 
//and displays the result within the console window.
//App to display the number even or odd

let a = prompt("Enter an integer number");
//let a = 8;
if (a % 2 == 0) {
    document.write("Even number");
}
else
    document.write("Odd number");

/*Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
*/

let b = prompt("Enter an integer number to compare");
if (b < 10) {
    document.write("\n      The number is less than 10");
}
else if (b > 10) {
    document.write("\n      The number is greater than 10");
}
else
    document.write("\n       The number is equal to 10");
