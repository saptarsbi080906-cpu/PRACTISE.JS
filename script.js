// console.log("Hello World");
//  name = "25"    //string
// console.log(name);
// // for naming we can use a-z,nums,_,$ but first letter wil be a-z,_,$ and reserved words cant be used ---best form of naminng "fullName" thr camel case
// // var can be redecleared but let or cont cant be
// console.log(fullName);

// console.log(typeof "Saptarshi"); // "string"
// console.log(typeof 24);          // "number"
// console.log(typeof true);        // "boolean"
// console.log(typeof undefined);   // "undefined"
// console.log(typeof null);        // "object"  <-- The well-known quirk/bug
// console.log(typeof {a: 1});      // "object"
// console.log(typeof [1, 2]);      // "object" (Arrays are a type of object)

// console.log(a);
// let b = Symbol("hello") ; //symbol
// console.log(b);


//--------DATA TYPES IN JS--------//
// Primitive Data Types : string, number, boolean, null, undefined, BigInt, Symbol
// Non-Primitive Data Types : Object, Array, Function
// let fullName = "Saptarshi Sarkar" ; // string
// let age = "24" ; // number
// let y ; // undefined
// let x = null; // null/object
// let isFollow = true; //boolean
// let a = BigInt("1234") ; //bigInt

// //--------OBJECTS IN JS--------//
//  const student = {
//     fullName : "Rahul", //object["key"],
//     age : 20,
//     cgpa : 8.2,
//     isPass : true
// };
// console.table(student);

// console.log(student);
// console.log( student.fullName ); //dot notation
// console.log( student["age"] ); //bracket notation
// student.cgpa = 8.5 ; //updating value
// console.log( student.cgpa );
// student.rollNo = 21 ; //adding new key value pair
// console.log( student );


//-----------ARITHMETIC OPERATORS--------//
/*    let a = 2;
let b = 5;
console.log ("a = ", a , "b = ", b );
console.log( "a + b =" , a + b); // addition
console.log( "a - b =" , a - b); // subtraction
console.log( "a * b =" , a * b); // multiplication
console.log( "a / b =" , a / b); // division
console.log( "a % b =" , a % b); // modulus
console.log( "a ** b =" , a ** b); // exponentiation
/* a ++  => a = a + 1  ---> increment
   a --  => a = a - 1  ---> decrement
console.log("a =", a);
a ++ ;
console.log("a++ =>", a);
a -- ;
console.log("a-- =>", a);


//-----------ASSIGNMENT OPERATORS--------//
let x = 10 ;
console.log("x =", x);
x += 5 ;
console.log("x += 5 =>", x);  // x = x + 5
x -= 3 ;
console.log("x -= 3 =>", x);  // x = x - 3
x *= 2 ;
console.log("x *= 2 =>", x);  // x = x * 2
x /= 4 ;
console.log("x /= 4 =>", x);  // x = x / 4
x %= 3 ;
console.log("x %= 3 =>", x);  // x = x % 3
x **= 3 ;
console.log("x **= 3 =>", x); // x = x ** 3


//-----------LOGICAL OPERATORS--------//
let a = 5 ;
let b = 6 ;
let cond1 = a >= b ;
let cond2 = a !== b ;
console.log("cond1 && cond2 =", cond1 && cond2); // AND
console.log("cond1 || cond2 =", cond1 || cond2); // OR
console.log("!cond1 =", !cond1); // NOT
console.log("!cond2 =", !cond2); // NOT


//-----------COMPARISON OPERATORS--------//
console.log("a == b =", a == b); // equal to
console.log("a === b =", a === b); // equal value and equal type
console.log("a != b =", a != b); // not equal
console.log("a !== b =", a !== b); // not equal value or not equal type
console.log("a > b =", a > b); // greater than
console.log("a < b =", a < b); // less than
console.log("a >= b =", a >= b); // greater than or equal to
console.log("a <= b =", a <= b); // less than or equal to   */


// --------------TERNARY OPERATORS--------//
// let age = 18;
// let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
// console.log("Can person vote? :", canVote);
// let marks = 75;
// let grade = (marks >= 90) ? "A+" :
//     (marks >= 80) ? "A" :
//         (marks >= 70) ? "B+" :
//             (marks >= 60) ? "B" :
//                 (marks >= 50) ? "C" : "F";
// console.log("Grade :", grade);
// let mode = "dark";
// let backgroundColor = (mode === "dark") ? "#000000" :
//     (mode === "light") ? "#FFFFFF" :
//         (mode === "blue") ? "#0000FF" : "#808080";
// console.log("Background Color :", backgroundColor);
// let age = 65;
// let ageClass = (age >= 60) ? "senior" :
//     (age >= 18) ? "adult" : "minor";
// console.log("type =" , ageClass);
// let num = prompt("enter a number ");
// let result = (num % 5 === 0) ? "Divisible by 5" : "Not Divisible by 5" ;
// console.log("Result =", result);
// let marks = prompt("Enter Your Marks Here")
// let grade = (marks >= 90 && marks <= 100 ) ? "A" :
//     (marks >= 70 && marks <= 89) ? "B" :
//         (marks >= 60 && marks <= 69) ? "C" :
//             (marks >= 50 && marks <= 59) ? "D" : ( marks >= 0 && marks <= 49 ) ? "F" : "Error"  ;
// console.log("Your grade is" , grade );

// -----------IF-ELSE STATEMENTS--------//

//-------------@@@@@TASK 1@@@@@@-------------------//
// let marks = prompt("Enter Your Marks Here");
// if (marks >= 90 && marks <= 100) {
//     console.log("Excellect You Got A!");
// }
// else if (marks >= 70 && marks <= 89 ) {
//     console.log("Perfect You Got B.");
// }
// else if (marks >= 60 && marks <= 69 ) {
//     console.log("Satisfactory You Got C.");
// }
// else if (marks >= 50 && marks <= 59 ) {
//     console.log("Need Improvement You Got B.");
// }
// else if ( marks >= 0 && marks <= 49 ) {
//     console.log( "Better Luck Next Time :( You Failed");
// }
// else alert("Incorrect Marks Submitted!")


//------Loop & Strings--------//

//------For Loop--------//
//  for (let i = 1; i <= 5; i++) {
//      console.log(i , "Apna College");
//  }

// let sum = 0;
// for (let i = 0; i <=50 ;  i ++ ) {
//    sum += i
// }
// console.log("sum =",sum);

//***************NEVR RUN A INFINITE LOOP*****************//

//-------While Loop--------//
// let i = 1;
// while (i <=5 ){
//    i++
//    console.log("i =", i);
// }

//---------Do While Loop--------//
// let i = 1;
// do {
//    console.log("i =", i);
//    i++
// } while (i <=5 );

//----For...of Loop--------//
// let str = "JavaScript";
// let size = 0;
// for ( let i of str ) {
//    console.log("i =" ,i);
//    size ++ ;
// }
// console.log("size =", size);

//----For...in Loop--------//
// const student = {
//    fullName : "Rahul", //object["key"]
//    age : 20,
//    cgpa : 8.2,
//    isPass : true
// };
// for ( let key in student ) {
//    console.log( key , ":", student[key] );
// }

//--------------@@@@TASK 2@@@@@@-------------------//
// M1 //for ( i = 0 ; i <=100 ; i +=2 )
// {
//    console.log("i =",i);
// }
//M2//
// for (i = 0; i <= 100; i++) {
//    if (i % 2 === 0) { console.log("i =", i); }
// }

//----------@@@@TASK 3@@@@@@-------------------//
// let guessNum = 30 ;
// let userNum = prompt("Guess A Number");
// while ( guessNum != userNum ){
//    userNum = prompt("Opps! Its a wrong number.Guess again")
// }
// alert("Congratulation ! You guessed the correct number")
// console.log("Congratulation ! You guessed the correct number");

//-----------Strings in JS------------//
// let str = "ApnaCollege";
// console.log("Original String :", str);
// console.log("Length of String :", str.length); //length property
// console.log("Letter is = ",str[8]); //indexing
// console.log("Letter is = ",str.charAt(8)); //charAt method
// console.log("Index of 'C' is =", str.indexOf('C')); //indexOf method
// console.log("Index of 'a' is =", str.indexOf('a')); //indexOf method
// console.log("Index of 'a' is =", str.lastIndexOf('a')); //lastIndexOf method
// console.log("Slice from 2 to 6 :", str.slice(2, 6)); //slice method
// console.log("Slice from 3 to end :", str.slice(3)); //slice method
// console.log("Substring from 2 to 6 :", str.substring(2, 6)); //substring method
// console.log("Replace 'College' with 'University' :", str.replace('College', 'University')); //replace method
// console.log("String in Uppercase :", str.toUpperCase()); //toUpperCase method
// console.log("String in Lowercase :", str.toLowerCase()); //toLowerCase method


//Template Literals in JS
// let sentence = `My name is Saptarshi Sarkar`;
// console.log(sentence);
// let object = {
//    fullName: "Saptarshi Sarkar",
//    age: 24,
//    cgpa: 8.5
// };
// console.log("My name is " , object.fullName , ", age is " , object.age , " and cgpa is " , object.cgpa); //concatenation

// let object1 = `My name is ${object.fullName}, age is ${object.age} and cgpa is ${object.cgpa}`;
// console.log(object1); //template literals

// let specialStr = `This is a multi-line string.
// It can span across multiple lines.
// Using template literals makes it easy.`;
// console.log(specialStr);

// let a = 10;
// let b = 20;
// console.log(`The sum of ${a} and ${b} is ${a + b}.`); //expression evaluation

// console.log("Saptarshi Sarkar");
// console.log(`Saptarshi Sarkar`);
// console.log(`Saptarshi
//    Sarkar`);
// console.log("Saptarshi\nSarkar"); //using escape sequence
// console.log("Saptarshi\tSarkar"); //using tap  sequence
// let name = "Saptarshi\tSarkar"; //\t doesnt count two spaces but one
// console.log(name);
// console.log(name.length);
// let str = "  My Name is Saptarshi Sarkar  ";
// console.log("Original String :", str);
// console.log("Length of Original String :", str.length); //length before trim
// console.log("Length of Trimmed String :", str.trim().length); //length after trim
// let number = `0123456789`;
// console.log(number.slice(1)); //slicing from index 1 to end
// console.log(number.slice(0,5)); //slicing from index 0 to 5
// console.log(number.substring(1)); //slicing from index 1 to end
// console.log(number.substring(0,5)); //slicing from index 0 to 5
// //slice and substring both are used to extract parts of a string but slice can accept negative indices while substring cannot.
// let str1 = "Saptarshi"
// let str2 = "Sarkar"
// console.log(str1.concat(" ", str2)); //concatenation using concat method
// console.log(str1 , str2);
// let num = " 1234567890987654321" ;
// console.log(num.replaceAll(2,"two"));

//-----------@@@@TASK 4@@@@@@-------------------//
//method 1
// let enterName = prompt("Please Enter Your Name Here , Without Space")
// console.log("Your user name is @"+enterName.toLowerCase()+enterName.length);
//method 2
// let enterName = prompt("Please Enter Your Name Here , With Space")
// console.log("Your user name is @"+enterName.toLowerCase().replaceAll(" ","")+enterName.length); //removing space using replaceAll method

//Functions in js
// function sum(a, b) {
//     return a + b;
// }
// console.log("Sum of 5 and 10 is =", sum(5, 10));

// function greet(name) {
//     return `Hello, ${name}! Welcome to Apna College.`;
// }
// console.log(greet("Saptarshi Sarkar"));

// let fun = function (x) {
//     return x * x;
// } ; //function expression
// console.log("Square of 5 is =", fun(5));
// let arrowFunc = (x) => x * x; //arrow function
// console.log("Square of 5 is =", arrowFunc(5));
// console.log(typeof arrowFunc);

// console.log("type of fun is =", typeof fun);


// Arrays in JS
// let marks = [97,82,85,94]
// console.log(marks[1]);
// let heros = ["Ironman","Superman","Spiderman","Hanuman","Batman","Thor"]
// console.log(heros[1]);
// marks[1]=100
// console.log(marks);  //strins are immutable but arrays are mutable

// let heros = ["Ironman","Superman","Spiderman","Hanuman","Batman","Thor"]
// for ( let i of heros )
// console.log(i);

// {let marks = [97,82,85,94]
// for (let i = 0 ; i<marks.length ; i++)  //for loop
//    console.log(marks[i]);}
// console.log("                                                                        ");

// {let marks = [97,82,85,94]
//    for ( let i of marks ) //for....of loop
//       console.log(i);}

//--------@Task 5@--------------//
// let marks = [97,82,85,94];
// let sum = 0;
// for (let val of marks){
//    sum += val
// }
// console.log(sum);
// console.log("avg = ",sum/marks.length);

//--------@Task 6@--------------/
// let prices = [250, 645, 300, 900, 50];
// let idx = 0;
// for (let val1 of prices) {
//    idx++
//    let offeredPrices = val1 - 0.1 * val1
//    console.log(`Price of item ${idx} = ${offeredPrices}`);
// }

// let prices = [250, 645, 300, 900, 50];
// for(let val of prices){
//    let offeredPrices = val - 0.1*val
//    console.log(offeredPrices);
// }

// let prices = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of prices) {
//    i++ ;
//    console.log(`Value of Item ${i} = ${val}`);
//    let newPrices = 0.9*val ;
//    console.log(`Value of Item ${i} after offer = ${newPrices}`);
// }

// let heros = ["Ironman","Superman","Spiderman","Hanuman","Batman","Thor"]
// heros.push("Wolverine") //adding at the end
// console.log(heros);
// heros.unshift("Captain America") //adding at the beginning
// console.log(heros);
// heros.pop() //removing from the end
// console.log(heros);
// heros.shift() //removing from the beginning
// console.log(heros);
// console.log("index of Spiderman is =",heros.indexOf("Spiderman"));
// heros.splice(2,1,"Wolverine") //removing and adding new element from specific index
// console.log(heros);
// let newHeros = heros.slice(1,4) //creating new array from existing array
// console.log(newHeros);
// console.log("length of heros array is =",newHeros.length);
// console.log("length of heros array is =",heros.length);

//---------@Task 7@--------//
// let companies = ["Bloomerg", "Microsoft", "Uber" , "Google" , "IBM" , "Netlix"];
// console.log(companies);

//Remove first one 
// companies.shift();
// console.log(companies);

// //Replace Uber with Ola
// companies.splice(1,1,"Ola")
// console.log(companies);

// //Add amazon at the end
// companies.push("Amazon")
// console.log(companies);
// let sum = 1 ;
// for (let i = -1 ; i<= 10 ; i++){
//    sum += i ;
// console.log(sum);

// }
// let sum = 0 ;

// for (let i = 0 ; i <= 10 ; i+1){
//    sum += i;
//    console.log(sum);

// }
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 (each on a new line)
// fibonacciIterative(6) returns 8

// fibonacciRecursive(6) returns 8

//................Function in Js...................//

// function sum(x, y) {
//    s = x + y;   // parameters x and y are local variables 
//    return s
// }
// let val = sum(3, 4);
// console.log(val);

// function factorial(n) {
//    if (n === 0 || n === 1) {
//       return 1;
//    } else {
//       return n * factorial(n - 1);
//    }
// }

// let number = prompt("Enter a number to calculate its factorial:");
// let result = factorial(number);
// console.log(`Factorial of ${number} is ${result}`);


// factorial = (n) => {
//    if (n === 0 || n === 1) {
//       return 1;
//    } else {
//       return n * factorial(n - 1);
//    }
// }
// let number = prompt("Enter a number to calculate its factorial:");
// let result = factorial(number);
// console.log(`Factorial of ${number} is ${result}`);

// const multiplication = (a , b ) => {
//    console.log(a * b);
// }
// multiplication(4,5)

const print =(prt)=>{
   console.log(prt);
}

// let count = 0 ;
// const countVowel = (str) => {
//    for (let letter of str)
//    {       
//       if (letter === "a" ||letter === "e" ||letter === "i" ||letter === "o" ||letter === "u" )
//       {
//          count++ ;
//       }      
//    }
//    print(`The number of vowels is ${count}`);
// }
// countVowel(prompt("Enter a text"));



// MATH
// const maxNum =6;
// const minNum =1;
// let randNum = Math.ceil(minNum + (Math.random()*(maxNum- minNum))) ;
// console.log(randNum);

// let arr = [ 1 , 2 , 3, 4];
// arr.forEach( function printval (val){
//    print(val)
// });

// for (let char of arr){
//    print(char)
// };


// let city = [ "kolkata" , "pune" , "delhi" , "mumbai"]
// city.forEach ((val) => {
// print(val.toUpperCase())
// })

// let num = [ 1 , 2 , 3 ,4 ,5 , 6 , 7 , 8 , 9 ]
// num.forEach((val) => {
//    print(val ** 2)
// })

// let nums = [ 1 ,2 , 3 ,4 ,5 , 6 , 7];
// let newArr = nums.map((val) =>{
//    return val;
// })
// print(newArr)

//Api  --> Json


// let obj = {
//    "name": "Saptarshi",
//    "age": 19,
//    "nameAge": function () {
//       console.log(this.name, this.age); //this finds the value in the current refernce
//    }
// }

// obj.nameAge();

// let arr = [ 1 ,2 , 3, 4 , 5]; //callback func 
// arr.map(
//    (item) =>{
//       console.log(item);  
//    }
// )


//------------Date Time -----------//
let myDate = new Date();
// print(myDate.toString());
// print(myDate.toDateString());
// print(myDate.toISOString());
// print(myDate.toLocaleString());  
// print(myDate.toLocaleDateString());
// print(myDate.toLocaleTimeString());
// print(myDate.getFullYear());
// print(myDate.getMonth() + 1); //it starts from 0
// print(myDate.getDate());
// print(myDate.getDay());
// print(myDate.getHours());
// print(myDate.getMinutes());
// print(myDate.getSeconds());
// print(myDate.getMilliseconds());
print(myDate.getTime()); // timestamp
print(Date.now()); // timestamp

//-------DOM--------//
// let test = document.querySelector("#test")
// print(test.tagName)   //Gives tag name
// print(test.innerHTML);
// let container = document.querySelector(".container")
// print(container.innerText);
// let student = document.querySelector ("#student");
// print(student.getAttribute("data-roll"));
// student.setAttribute("data-roll" , "39");
// print(student.getAttribute("data-roll"));

   //  const list = document.getElementById("myList");
   //  const button = document.getElementById("addBtn");

   //  let count = 3; // start from Item 3

   //  button.addEventListener("click", () => {
   //    const newItem = document.createElement("li");
   //    newItem.textContent = `Item ${count}`;
   //    list.append(newItem);
   //    // list.prepend(newItem);
   //    count++;
   //    // list.before(newItem);
   //    // list.after(newItem);
   //  });