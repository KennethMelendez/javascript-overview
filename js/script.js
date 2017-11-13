// This declares the variable myVar
var myVar;
// This sets the value
myVar = 483902;

// This declares the myName variable to a string
var myName = 'Kenneth';

var mySentence = 'What\'s up??' + myName;

//a double qouted string cannot contain double quotes within unless they are excaped using a \,same applies for single quoted strings.
/*
      var my sentence = "What's up";
*/

//strings cannot break line by default.
var myLongString = "This actually isn't too long.";

// JavaScript is awesome!

//Booleans are either true or false
var myBoolean = false;
var myBoolean = true;

var numA = 14;
var numB = 27;


//addition in js is done with the + symbol
var sumOfAandB = numA + numB;

//This reasigns the value
var numA = 32;

//subtraction is done with th - symbol
var numAMinusNumB = numA - numB;

//Multiplication is done through an *
var numC = 3 * 3;

//DIvision is done with /
var numD = 4 / 2;

var myExponent = 2 ** 4;

//modulus is done with a % returning the remainder after division, 5 % 2 = 1

//helps to find if number is even or odd
var myModulus = 5 % 2;

var myFullName = myName + "Melendez";

//This is cancatenation, adding strings together spaces must be put in manually

var myFullName = myName + " " + "Melendez";

// This creates the me variable an assigns to be an object
var me = {
  //objects are made of named key value pairs
  name: "Kenneth Melendez",
  age: 25,
  isAwesome: true,
  head: {                   //head is an object inside me
    eyes: 2,
    hairColor:'brown',
    brain: true
  }
};

//properties on the me object would generally be accessed using dot notation

//me.name would return Kenneth Melendez, me.head.eyes would return 2

console.log(me.age);

//This sets the age property to the value of 30
me.age = 30;

console.log(me.age);


//Arrays are key value pairs where the key is a number, arrays are created []
var myArr = ['cat','dog', 99, 'bear', true, false, me,'Cool'];

//Arrays in JavaScript start with a 0 index, to access elements with an array using [] with the index number, myArr[0] would be cat, myArr[1] would be Tiger

console.log(myArr[1]);

var daysOfTheWeek = ['Sunday','Monday','Tuesday'];

console.log(daysOfTheWeek[2]);

//Object can hold arrays as the alue for properties
//this adds a hobbies property to the me object and sets it to be an array
me.hobbies = ['code','music','food','games'];

console.log(me.hobbies[0]);

var something;
// something is undefined the variable has been declared but a value has been set, that's okay
console.log(something);
//if js encounters a variable that does not exist it will through an error and stop executing any further script by default
// console.log(somethingElse);

//null is nothing
var nothing = null;

//function | this is a function declaration that creates a function called sayHello
function sayHello() {
  console.log('Welcome to JavaScript City dude!!!');
}
//function declarations do not end in a semicolon ;




//calling the function
sayHello();

//variable in a function is function scope local, it only exists in the function
function sayHelloTo(name) {
  var message = 'Welcome to JavaScript ' + name;
  console.log(message);
}

//this wors because function declarations are hoisted to the top of the document when read by the browser
sayHelloTo('meeeeeee');
// sayHelloTo('Richard Simmons');
// sayHelloTo(myFullName);

//will not work because functions should be defined before they are called
// sumNums();

var sumNums = function(firstNum,secondNum) {
  var sum = firstNum + secondNum;
  // This will return the value of the value of the sum variable to where the function is called, once a return statment s triggered no further code within the function is executed.
  return sum;
  //wont be executed below
  console.log("This is never going to happen");
};

sumNums(2,2);

// console.log( sumNums(2.2) );


var mySum = sumNums(923,13454);
