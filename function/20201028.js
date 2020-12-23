'use strict'
function hello() {
console.log('こんにちはこんにちは');
}

function helloSomeone(name) {
  console.log(`こんにち${name}さん`);
}

function helloCircleArea(radius){
  console.log(radius*radius*3.14);
}

function helloRectangleArea(width,height) {
 console.log(width*height);
}

function circleArea(radius) {
 return radius * radius * Math.PI;
}
let pi = circleArea(10);

function rectangleArea(width,height) {
return width*height
}

let men = rectangleArea(10,30);

