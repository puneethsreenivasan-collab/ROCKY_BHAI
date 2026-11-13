// // // // let text = "hii this is your java script";

// // // // // string methods
// // // // // length of the string
// // // // console.log(text.length);

// // // // // upper case
// // // // console.log(text.toUpperCase());
// // // // // lower case
// // // // console.log(text.toLowerCase());

// // // // // index of the string word
// // // // console.log(text.indexOf("java"));

// // // // // last index of the word
// // // // console.log(text.lastIndexOf("java"));

// // // // // slice the string
// // // // console.log(text.slice(0, 3));

// // // // // replace the word
// // // // console.log(text.replace("java", "python"));

// // // // // split the string
// // // // console.log(text.split(" "));

// // // // //trim is used to remove the spaces
// // // // console.log(text.trim());

// // // // // reverse the string
// // // // console.log(text.split(" ").reverse().join(" "));

// // // let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // // console.log(num);

// // // // 6
// // // console.log(num[5]);

// // // // add at the end
// // // num.push(10);
// // // console.log("after push ", num);

// // // // add at the start
// // // num.unshift(0);
// // // console.log("after unshift ", num);

// // // // remove the last element
// // // num.pop();
// // // console.log("after pop ", num);

// // // // remove the first element
// // // num.shift();
// // // console.log("after shift ", num);

// // // // slice is used to show the slice and display the data
// // // console.log("before slice ", num);
// // // console.log("slice data", num.slice(2, 5));
// // // console.log("after slice ", num);

// // // // splice is used to remove the data
// // // console.log("before splice ", num);
// // // num.splice(2, 5, 10, 11, 12, 13, 14);
// // // console.log("after splice ", num);

// // // // sort is used to sort the data
// // // console.log("before sort ", num);
// // // num.sort((a, b) => b - a);
// // // console.log("after sort ", num);

// // // // reverse is used to reverse the data
// // // console.log("before reverse ", num);
// // // num.reverse();
// // // console.log("after reverse ", num);

// // // // map
// // // // filter
// // // // reduce
// // // // forEach

// // let student ={
// //     name:"puneeths",
// //     age:20,
// //     city:"pune"
// // }

// // console.log(student)

// // // add new property
// // student.address= "hiii"
// // console.log(student)

// // // delete the property
// // delete student.address
// // console.log("after delete",student)

// // // get all the values of the object
// // // console.log(Object.values(student))

// // // get all the keys of the object
// // // console.log(Object.keys(student))

// // // get all the entries of the object
// // // console.log(Object.entries(student))

// // types of function

// // function name (){
// //     // statement
// // }

// // // call the function
// // name()

// // let num1 = 1000;

// // console.log(num1);

// // named function , regular function
// // function hii() {
// //   console.log("this is function");
// // }
// // console.log("my function ",hii())

// // let num1 = 1000;
// // let num2 = 2000;

// // return function
// // function hii() {
// //     return num1 + num2;
// // }
// // console.log("my function ",hii())

// // let num1 = 5000;
// // let num2 = 2000;

// // // Higher order function
// // // function with parameters
// // function add(a, b,c) {
// //   return a+b+c;
// // }
// // function sub(a, b) {
// //   return a - b;
// // }
// // console.log(sub(num1, num2));
// // // arguments
// // console.log("add call " ,add(num1, num2 ,sub(num1, num2) ))

// // anonymous function
// // let hii = function () {
// //   console.log("hii");
// // };

// // hii();

// // // es6 arrow function

// // const data = () =>{
// //     console.log("hiii")
// // }

// // data();

// // immediate invoked function
// // (function () {
// //   console.log("hii");
// // })();

// // function p1() {
// //   console.log("P1");
// // }
// // p1();
// // p1();
// // p1();
// // p1();
// // p1();
// // p1();

// // wakeup

// function wakeUp() {
//   return "wake up";
// }
// // freshup

// function freshup() {
//   return "freshup";
// }
// // breakfast

// function breakfast() {
//   return "breakfast";
// }
// // work
// function work() {
//   return "work";
// }
// // lunch

// function lunch() {
//   return "lunch";
// }
// // snacks

// function snacks() {
//   return "snacks";
// }
// // dinner

// function dinner() {
//   return "dinner";
// }
// // nap

// function nap() {
//   return "nap";
// }
// // sleep

// function sleep() {
//   return "sleep";
// }

// //trainer

// const trainer =()=>{

//     let apple = "apple";

//     console.log(
//         wakeUp(),
//         freshup(),
//         breakfast(),
//         work(),
//         lunch(),
//         snacks(),
//         dinner(),
//         nap(),
//         sleep(),
//     )
// }

// //student

// const student =()=>{
//     return `${wakeUp()} ${freshup()} ${breakfast()} ${work()} ${lunch()} ${snacks()} ${dinner()} ${nap()} ${sleep()} `
// }

// console.log( student())

// trainer( );

// let text1 =" hii this is your java script";

// let number2 = 1000;
// let number1 = 1000;
// let text2 =" hii this is your python ";

// let url = "http://127.0.0.1:5500/js/day3"
// let denpoint = "index.html"

// // console.log(  text1, number1+number2 + text2)

// console.log( url+"/"+denpoint)

// let array = [
//     "puneeths",
//     "karthik",
//     "kumar"
// ]

// function start(){

//     console.log("hiii")
// }

// dom => document object model

// let h1tage = document.getElementsByTagName("h1")

// let h1tage = document.getElementById("h1id")
// let h1tage = document.getElementsByClassName("h1id")

// console.log(h1tage)

// const textchange = () => {
//     h1tage[0].innerHTML = " 🤣😂😒🤞"
//     h1tage[2].style.color = "blue"
// }

let box = document.getElementsByTagName("div");

const colors = [
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FFA500", // Orange
  "#800080", // Purple
  "#FFC0CB", // Pink
  "#000000", // Black
  "#FFFFFF", // White
  "#808080", // Gray
  "#A52A2A", // Brown
  "#00FFFF", // Cyan
  "#FF00FF", // Magenta
  "#008000", // Dark Green
  "#4B0082", // Indigo
  "#FFD700", // Gold
  "#40E0D0", // Turquoise
  "#DC143C", // Crimson
  "#7FFF00", // Chartreuse
  "#6495ED", // Cornflower Blue
];

const bikeImages = [
  "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600",
  "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600",
  "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600",
  "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
  "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800",
  "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800"
];
const colorchange = () => {
//   let index = Math.floor(Math.random() * colors.length);
  let index = Math.floor(Math.random() * bikeImages.length);
  console.log();
//   console.log(colors[index]);
//   box[0].style.backgroundColor = colors[index];
  box[0].style.backgroundImage = `url(${bikeImages[index]})`;
    box[0].style.backgroundSize = "100%", "100%";



};


// call function every 5 seconds
setInterval(colorchange, 1000);


// dom
// document object model

// get element by id
// get element by class name
// get element by tag name
// get element by query selector
// get element by query selector all
