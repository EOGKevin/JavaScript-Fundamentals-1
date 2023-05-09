// tryk på windows knap og . samtidig for at få emoji

/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Joe");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let joe_matilda = "JM";
let $function = 27;

let person = "joe";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

/*
alert("Updated!");

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Joe");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Jensen";
console.log(lastName);
*/

/*
// Math operators
const now = 2037;
const ageJoe = now - 1991;
const ageSarah = now - 2018;
console.log(ageJoe, ageSarah);

console.log(ageJoe * 2, ageJoe / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2* 2

const firstName = "Joe";
const lastName = "Jensen";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; //  x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);1

// Comparison operators
console.log(ageJoe > ageSarah); // >, <. >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJoe = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJoe + ageSarah) / 2;
console.log(ageJoe, ageSarah, averageAge);
*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple\n\
lines"
);

console.log(`String with
multiple
lines`);
*/

/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start taking a driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/*
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); //NaN
console.log(typeof NaN); //number

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old"); //string
console.log("23" - "10" - 3); //int
console.log("23" / "2"); //int
console.log("23" > "18"); //bool
console.log("23" * "2"); // int

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

/*
//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //nothing in the boolean = false
console.log(Boolean(undefined));
console.log(Boolean("Jonas")); //string not empty = true
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)"); //if you have money
} else {
  console.log("You should get a job!"); //0 money
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined"); //height has a value/content
} else {
  console.log("Height is UNDEFINED"); //height doesn't have a value/content
}
*/

/*
const age = 18;
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (Loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 22 === 23 -> FALSE
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23, 7 or 9");
}

if (favourite !== 23) {
  // loose = (!=) strict = (!==)
  console.log("Why not 23?");
}
*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // True if both true
console.log(hasDriversLicense || hasGoodVision); // True
console.log(!hasDriversLicense); // hasDriversLicense = false

//if(hasDriversLicense && hasGoodVision) {
//  console.log('Sarah is able to drive!');
//} else {
//  console.log('Someone else should drive...');0
//}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

/*
const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;

  default:
    console.log('Not a valid day!');
    break;
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if ( day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday'){
  console.log('Write code examples');
} else if (day === 'friday'){
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day!');
}
*/

/*
3 + 4
1991
true && false && !false

if (23>10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/

/*
const age = 23;
//age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if(age>=18){
  drink2 = 'wine 🍷'
} else {
  drink2 = 'water 💧'
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/

