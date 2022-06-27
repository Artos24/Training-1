/*
let js = 'amazing';
console.log(40 + 40 + 40 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';

console.log(firstName)
console.log(firstName)
console.log(firstName)

let myFirstJob = 'Programmer';
let myCurrentJob = 'teacher';

console.log(myFirstJob);
///////////////////////////////////////////

let javascriptIsFun = true;
console.log(javascriptIsFun);


console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1999;

lastName = "Kobra";
console.log(lastName);


const now = 2022;
const ageJonas = now - 1999;
const ageSarah = now - 2005;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
//2 ** 3 2 dso potęgi 3

const firstName = 'Jonas';
const lastName = 'Kobra';
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

//Coparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2022;
const ageJonas = now - 1999;
const ageSarah = now - 2005;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2

console.log(ageJonas, ageSarah, averageAge);



const firstName = 'Bartosz';
const job = 'IT specialist';
const birthYear = 1999;
const year = 2022;
const age = year - birthYear;

const bartosz = "I'm " + firstName + ", a " + age + ' years old ' + job;

console.log(bartosz);

const bartoszNew = `I'm ${firstName}, a ${age} years old ${job}`
console.log(bartoszNew);

console.log(`Just a regular string ..`);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String with
multiple
lines`)


const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Sarah can start driving lessons `);

} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is not old enough to take driving lessons, take another ${yearsLeft} years`);
}


const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20
} else {
    century = 21;
}
console.log(century);

// Type conversion
const inputYear = `1991`;
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number(`Jonas`));

console.log(String(23), 23);

// Type coercion
console.log(`I'm` + ` 23 ` + `years old`)

console.log(`23` + `10` + 3);


// 5 falsy values: 0, '', undefinded, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Bartosz`));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 110;

if (money) {

    console.log(`Don't spend it all`);

} else {

    console.log(`You should get a job`);
}

let height;

if (height) {

    console.log(`defined`);
} else {

    console.log(`Undefined`);
}


const age = 18;

if (age === 18) console.log(`You just became an adult`);


const favourite = Number(prompt(`What's ur favourite number?`));

console.log(favourite);

if (favourite === 23) {
    console.log(`It's 23`);
} else if (favourite === 7) {
    console.log(`7 is also viable`);
} else {
    console.log(`It's neither 23 nor 7`);
}

if (favourite !== 23) console.log(`Why not 23?`)



const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense || hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

if (shouldDrive) {

    console.log(`Sarah is able to drive`);
} else {

    console.log(`Someone else shoud drive`);
}


console.log(!hasDriversLicense || hasGoodVision || isTired);



const day = `wednesdday`;

switch (day) {
    case `monday`:
        console.log(`monday`);
        break;
    case `tuesday`:
        console.log(`tuesday`);
        break;
    case `wednesday`:
        console.log(`wednesday`);
        break;
    case `thursday`:
        console.log(`thursday`);
        break;
    case `friday`:
        console.log(`friday`);
        break;
    default:
        console.log(`${day} is not a valid day`);
}

if (day === `wednesday` || day === `thursday`) {
    console.log(`That's a valid day`);
} else {
    console.log(`It's not wednesday nor thursday :(`)
}



age >= 18 ? console.log(`U can drink alcohol`) :
    console.log(`U cant drink alcohol`);
*/
const age = 23;

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `wine`;
} else {
    drink2 = `water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);