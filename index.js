// console.log("Hello World");
// Variable and data types

// const number = 5;
// number = 10;
// console.log(number)

// var name = 'Sundar';
// name = 'Muskan';
// console.log(name)


// let num = 10;
// num = 20;
// console.log(num)

// var name;  // variable dec
// name = 'Sundar'; // assign
// console.log(name)

// var a1 = 'Sundar';
// var a2 = 20;
// var a3 = 5;
// var add = a1 + a2 + a3;
// console.log(add)

// Object in javascript

// const student = {
//     name: 'Sundar',
//     roll: 25,
//     branch: 'ECE',
// }
// console.log(student)


// Arithmetic operation
// let num1 = 40, num2 = 20;
// add = num1 + num2;
// sub = num1 - num2;
// product = num1 * num2;
// divi = num1 / num2;
// mod = num1 % num2;
// console.log(add);
// console.log(sub);
// console.log(product);
// console.log(divi);
// console.log(mod);

// let num1 = 10;
// console.log(num1++) //10
// console.log(num1) //11

// console.log(++num1) //11
// console.log(num1) //11

//Pre/Post Decrement
// let number = 15;
// console.log(--number) //14
// console.log(number) //14

// console.log(number--) //15
// console.log(number) //14

// let num = 20;
// console.log(++num)
// console.log(num)

// console.log(num++)
// console.log(num)

// Assignmnet operator

// let x = 4, y = 2;

// console.log(x += y);   // x=6
// console.log(x -= y);   //x=4
// console.log(x *= y);    // x=8
// console.log(x /= y);    // x=4
// console.log(x %= y);    // x=0
// console.log(x ** y);   // x=0

// Compirision operator

// let a = 5, b = 6;
// console.log(a == b);  // f
// console.log(a === b); // f
// console.log(a != b); // t
// console.log(a >= b); // f
// console.log(a <= b); // t

// Logical operator

// let a = 10, b = 20;
// console.log(a > 5 && b > 15); //t
// console.log(a > 5 && b < 15);  //f
// console.log(a > 5 || b < 15);   //t
// console.log(a < 5 || b < 15);  //f
// console.log(!b < 15);  //t
// console.log(!b > 15);  //f

// Conditional statements
// 1.if statement

// let age = 5;

// if (age >= 10) {
//     console.log("Aap daru pi sakte hai");
// }
// else {
//     console.log("Sorry! Aap nhi pi sakte hai");
// }

// let time = 18;
// if (time > 0 && time <= 12) {
//     console.log("Good Morning");
// }
// else if (time > 12 && time < 18) {
//     console.log("Good Afternoon");
// }
// else if (time >= 18 && time < 20) {
//     console.log("Good Evening");
// }
// else {
//     console.log("Good Night");
// }


// let age = prompt("Enter a age")
// if (age > 18) {
//     console.log("You can drive");
// }
// else {
//     console.log("You can not drive");
// }

// Ternary Operator
// let age = 15;
// let a = age > 18 ? "app daru pi sakte hai" : "aap nhii pi sakte hai";
// console.log(a);

// let age = prompt("Enter age");
// let a = age > 18 ? "You can drive" : "You can not drive";
// console.log(a)

//loop in javascript

// console.log("Hello world!")
// console.log("Hello world!")
// console.log("Hello world!")
// console.log("Hello world!")
// console.log("Hello world!")


// for loop
// let number = 2;
// for (i = 1; i <= 10; i++) {
//     console.log(number * i);
// }
// while loop

// let number = 2;
// while (number <= 20) {
//     console.log(number);
//     number = number + 2;
//

//do while loop

// let number = 2;
// do {
//     console.log(number);
//     number = number + 2;
// }
// while (number <= 20);

// for in loop

// const student = {
//     fname: "Ram",
//     lname: "Chandra",
//     age: 20,
// }
// let x;
// for (let x in student) {
//     console.log(x, ":", student[x]);
// }

//function

// function myFunction() {
//     console.log("Hello World");
// }

// myFunction();

//ex-2
// function addTwoNumber(x, y) {
//     console.log(x + y);
// }
// addTwoNumber(4, 5);

//ex-3
// function fToC(f) {
//     console.log("The ans is", ((f - 32) * 5) / 9);
// }
// fToC(98.6);

//ex-4

// let x = prompt("Enter first number");
// let y = prompt("Enter second number");

// function ProductTwoNumber(x, y) {
//     console.log(Number(x) * Number(y));
// }
// ProductTwoNumber(x, y);

//string in javascript
// let city = "Patna";
// console.log(city);
// let city1 = 'Gaya';
// console.log(city1);

// let quote = ` "work hard" `;
// console.log(quote)

// let city2 = `Saharsa`;
// console.log(city2)

// let city1 = `Patna`;
// let city2 = `Sitamarhi`;
// console.log(city.length);
// console.log(city[0]);
// console.log(city[4]);

// console.log(city.toUpperCase())
// console.log(city.toLowerCase())
// console.log(city.slice(0, 2))
// console.log(city.slice(2))

// let city3 = city1.concat(" ", city2);
// console.log(city3);

//Array in js
// let city = [`Patna`, `Sitamarhi`, `Bhagalpur`];
// console.log(city);
// console.log(city[0]);
// console.log(city.length)

// city[0] = `Delhi`;
// console.log(city);
// console.log(typeof (city))
// let city1 = city.toString();
// console.log(city1)
// console.log(typeof (city1))
// console.log(city.join("-"))

// let number = [1, 2, 5, 4, 9];
// let number1 = number.pop();
// let number2 = number.push(10);
// console.log(number)

// let a1 = [10, 12, 13];
// let a2 = [5, 8, 9];
// let a3 = [4, 6, 7];
// let a = a1.concat(a2, a3);
// console.log(a);
// console.log(a.sort())

//ex-home work
// const number = [40, 100, 1, 5, 25, 10];
// number.sort(
//     function (a, b) {
//         return a - b
//     }
// );

//Date in javascript

// const date = new Date("2022-12-08");
// // console.log(date)
// // console.log(date.getDate())
// // console.log(date.getDay())

// document.getElementById("demo").innerHTML = date;

// Break statement and continue statement
// let a = 1;

// for (var i = 0; i < 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(a + i);
// }

// document.getElementById("main").innerHTML = "Hello World!";
// document.getElementById("main").style.backgroundColor = "white";
// document.getElementById("main").style.color = "purple";
// document.getElementById("demo").innerHTML = "Welcome to our college";
// document.getElementById("demo").style.color = "white";

// DOM Object, create elements, add elements
//create element
// let div = document.createElement('div');
// div.innerHTML = '<p>CreateElement example</p>';

// create a new text node and add it to the div
// let text = document.createTextNode('CreateElement example');
// div.appendChild(text);
// document.body.appendChild(div);
// document.getElementById("main").innerHTML = '<h1>Saharsa</h1>';

// const main = document.getElementById("main");
// console.log(main)
// let div = document.createElement('div');
// div.id = "demo";
// div.className = "class1";
// div.innerHTML = '<h1>Login page</h1>';
// let text = document.createTextNode('Histoty of Patna')
// div.appendChild(text);
// document.body.appendChild(div);


// let query = document.querySelector("#main1");
// console.log(query)

// let parent = document.querySelector('#main1');
// console.log(parent.parentNode);

// sibling in dom

// let current = document.querySelector('#main2');
// let nextSibling = current.nextElementSibling;
// console.log(nextSibling);

// let current = document.querySelector('#main');
// let parent = current.parentElement;
// console.log(parent);

// function validateForm() {
//     let x = document.forms["myForm"]["fname", "email"].value;
//     if (x == "") {
//         alert("Name and Email must be filled out");
//         return false;
//     }
// }

// BOm in javascript

// let bom1 = window.innerHeight;
// let bom2 = window.innerWidth;
// console.log(bom1);
// console.log(bom2);

// window.open() - open a new window
// window.close() - close the current window
// window.moveTo() - move the current window
// window.resizeTo() - resize the current window

// window.open();
// window.close();

// window.moveTo();
// window.resizeTo(200, 500);
// window.history.back();

// window.alert("Hii, how are you?") popup box
// window.confirm("Are you okay?");  confirm box

// function myFunction() {
//     var txt;
//     if (confirm("Are you sure?")) {
//         txt = "Your form has been submitted";
//     } else {
//         txt = "Your form hasn't been submitted";
//     }
//     document.getElementById("demo").innerHTML = txt;
// }

//setTimeOut funtion and setTimeInterval function

// function myFunction() {
//     alert("Hii, how are you?")
// }

// Arrow function
// myFunction = () => {
//     alert("Hello World")
// }

// myFunction = (a, b) => {
//     console.log("Sum of two number is:", a + b);
// }
// myFunction(4, 5);

// Object in js

// var ninth = {
//     name: `Ram`,
//     roll: 101,
//     branch: `CSE`,
//     session: 2022,
//     sectiona: {
//         name: `Mohan`,
//         roll: 102,
//         branch: `ECE`,
//         session: 2023,
//     }
// }
// let x;
// for (let x in ninth) {
//     console.log(x, ":", ninth[x]);
// }
// console.log(ninth.sectiona)
// console.log(students.name);
// console.log(students.roll);
// console.log(students.branch);
// console.log(students.session);

//Callback
// function myFirst() {
//     console.log("Hello");
// }

// function mySecond() {
//     console.log("Bye");
// }
// mySecond();
// myFirst();
// mySecond();


function myDisplayer(result) {
    return result;
}

function myCalculator(num1, num2, myDisplayer) {
    let sum = num1 + num2;
    return sum;
}
let result = myCalculator(10, 20, myDisplayer)
console.log(result)

// let result = myCalculator(10, 15);
// myDisplayer(result);








































