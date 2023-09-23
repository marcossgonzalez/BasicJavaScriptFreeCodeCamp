//----------------------------
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
//----------------------------
function functionWithArgs(param, param1) {
  console.log(param + param1);
}
functionWithArgs(7, 9);
//----------------------------
//Podemos passar valores para uma função com argumentos.
//Você pode usar uma instrução return para enviar um valor de volta de uma função.
//----------------------------
function timesFive(arg) {
  return arg * 5;
}
//----------------------------
//Variáveis ​​declaradas sem as palavras-chave let ou const são criadas automaticamente no escopo global.
//----------------------------
// Declare the myGlobal variable below this line
function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}

// Only change code above this line
let myGlobal = 10;
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
//----------------------------
//As variáveis ​​declaradas sem a palavra-chave tornam-se variáveis ​​globais, independentemente de onde sejam declaradas.
//----------------------------
function myLocalScope() {
  // Only change code below this line
  let myVar = 5;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);
//----------------------------
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
//----------------------------
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
    sum += 5;
}

// Only change code above this line

addThree();
addFive();
//----------------------------
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
//----------------------------