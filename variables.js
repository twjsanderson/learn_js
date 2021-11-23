/**
 * Variables 
 * 
 * What are Variables?
 * 
 * Variables are names we give to storage locations in computer memory.
 * We assign data to variables and our computer holds that data in memory so we can do stuff with it later in our program.
 * 
 */

// For example, if we decide to create a new variable, called 'x', in our JavaScript file we would write it like this:

let x;

// Interestingly enough, we have actually given our new variable a value. By default JavaScript gives it the data type Undefined.
// *** We use the ; in JavaScript like a period in written english. It basically declares the end of a line of code.

/**
 * let, const, var
 * 
 * There are essentially 3 ways to declare a variable, using one of the above key words.
 * 
 * let -> is the most common way, later on we will discuss scope and how this affects variables declared with let
 * const -> is used when we want to create a variable whose value will never change, once it is declared, JavaScript
 *          will not let us change the value to something else
 * var -> an older way of declaring variables, we will clarify its difference from the 'let' key word later
 * 
 */

// Here is an example of a simple variable declaration that holds a Number data type with the value 29

let y = 29;

/**
 * Keep in mind some rules around naming variables in JavaScript
 * 
 * 1. The name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
 * 2. JavaScript variables are case sensitive, for example x and X are different variables.
 * 
 * Checkout a few more example variables below:
 * 
 */

// This variable holds information of String data type
let $thing = "I am a thing";

// These two variables are different because of the uppercase N
let num = 319;
let Num = 423948230;

// This variable holds a boolean value --> true
let _truthy = true;

/**
 * It's important to remember that you can re-assign values to variables that have alrady been declared
 * using let or var, not const
 */

let x = 9;
x = 10;

// If I were to evaluate the variable x now, the value would actually be 10 because we changed the value 
// inside by re-assigning it from 9 to 10.

// But if I were to try this:
let x = 9;
let x = 10;
// I would get an error, because I can't declare the same variable 'x' twice

// This variable cannot change its value because of the const key word
const aNumber = 89;

// This won't work! Trying to re-assign it to another value would produce an error
aNumber = 25;

// We can also assign a variable to a variable
let anotherVariable = 300
let yetAnotherVariable = anotherVariable

// In the above example, yetAnotherVariable is assigned the value of anotherVariable

/**
 * Null & Undefined
 * 
 * Remember Null is something we have to assign to a variable, while Undefined is something that exists
 * when we don't give a variable a value at all.
 * 
 */

// JavaScript will assign this variable a value of Undefined
let someValue;

// JavaScript sees this variable as containing a null data type
let anotherValue = null;


