/**
 * Data 
 * 
 * What is data?
 * Data is any kind of information that a computer can understand and store in memory. 
 * For example, data could be the number --> 10 or a collection of alphabetic characters --> 'Hello World!'
 * 
 * Intuitively, human beings know that there is a difference between a number and word. Unfortunately, computers don't.
 * 
 * So programming languages, like JavaScript, are built with categories or types that hold specific kinds of data in them.
 * As an example, JavaScript recognizes Numbers as distinct types of data. It also recognizes characters, 
 * wrapped in quotation marks (like "This is an example") as data types called Strings.  
 * 
 * This can be a bit confusing at first because when you speak out loud or write something down, you mix up words and 
 * numbers all the time. In natural language, what you say makes perfect sense to other human beings, but not to a computer.
 * 
 * Computers can't really understand natural language at a fundamental level. So instead, programming languages 
 * are built to distinguish between different data types that help the comupter better understand what we are actually saying.
 * 
 * For example,
 * I can't add "2" + "2" and expect to see the number 4 in JavaScript because these are both Strings (see the quotation marks). 
 * JavaScript won't understand that you are trying to add those together to get 4, instead it will spit out "22".
 * 
 * But, if you try to add 2 + 2 (these are seen as Numbers by JavaScript, no quotation marks), JavaScript will realize you are 
 * trying to add two numbers together and it will spit out 4.
 * 
 */

/**
 * Primitive Data Types in JavaScript
 * 
 * As I mentioned above, JavaScript always categorizes data into types.
 * The following data types are the most important ones to understand when you are beginning 
 * to learn JavaScript.
 * 
 * Number --> 239
 * String --> "Text here!"
 * Boolean --> true or false
 * Null --> no value
 * Undefined --> a value that hasn't been created yet
 * 
 */

/**
 * Number
 * 
 * The Number data type is literally a number that we can perform operations on.
 * For example, we are able to add, subtract, divide and multiply numbers.
 * 2 + 4 = 4
 * 2 * 2 = 4
 * 
 */

/**
 * String
 * 
 * The String data type is more like a holder of any information you want put inside it.
 * JavaScript recognizes Strings when they are encased with quotation marks " ".
 * 
 * You can put pretty much anything into a String.
 * "Hello, friends."
 * "312084932"
 * "true"
 * "undefined"
 * 
 * These are all Strings because they are wrapped in quotation marks. A common use case for 
 * strings is to represent information that we want our users to see, like text on a web page.
 * 
*/

/** 
 * Boolean
 * 
 * The Boolean data type allows us to evaluate whether information in our program is true or false.
 * 
 * It doesn't help us evaluate whether statements about the world are true or false, 
 * like answering the question: 
 * Do carrots taste good? 
 * 
 * It evaluates whether expressions in our code are logically valid. 
 * For example, 
 * 2 + 2 = 4 --> true
 * 20 > 10 --> true
 * 4823942 < 2 --> false
 * 
 * Booleans are a powerful tool, that help us write entry and exit conditions into our code.
 * For example, 
 * Is this user's password correct? 
 *   If true, allow them access to the app
 *   If false, deny them entry to the app and show an error message
 * 
 * This data type is a critical piece of the puzzle that allows us to create workflows like 
 * authenticating users to our app.
*/

/** 
 * Null
 * 
 * The Null data type represents no value.
 * 
 * In some cases we may want to create a piece of data that doesn't have a distinct value attached.
 * Once we get into variables, the Null data type will make more sense. We can basically assign a 
 * variable the Null value when we don't want it to have anything else attached to it.
 * 
*/

/** 
 * Undefined
 * 
 * The Undefined data type is similar to the Null data type, but unlike the Null, it acts sort of like a default or 
 * empty placeholder that is waiting for a value.
 * 
 * Programmers have to actively assign Null to variables, but if we create a variable without a distinct 
 * value in it, that variable is essentially empty and by default, JavaScript gives makes it Undefined.
 * 
*/



