//-------------------------------------
function randomFraction() {

    // Only change code below this line
  
    return Math.random();
  
    // Only change code above this line
  }
//-------------------------------------
function randomWholeNum() {
    return Math.floor(Math.random()*10);
  }
//-------------------------------------
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
//-------------------------------------
//A função parseInt() analisa uma string e retorna um número inteiro.
//-------------------------------------
function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");
//-------------------------------------
/* 
A função parseInt() analisa uma string e retorna um número inteiro. 
É necessário um segundo argumento para a base, que especifica a base do número na string. 
A base pode ser um número inteiro entre 2 e 36.*/
//-------------------------------------
function convertToInteger(str) {
    return parseInt(str, 2);
  }
  
  convertToInteger("10011");
//-------------------------------------
/* O operador condicional, também chamado de operador ternário, pode ser usado como uma expressão if-else de uma linha.

A sintaxe é um ? b: c, onde a é a condição, b é o 
código a ser executado quando a condição retornar verdadeira e c é o código a ser executado quando a condição retornar falsa.
Ex: function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

*/
//-------------------------------------
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
   }
   
   checkEqual(1, 2);
//-------------------------------------
function checkSign(num) {
    return (num === 0 ) ? "zero": (num > 0) ? "positive" : "negative";
  }
  
  checkSign(10);
//-------------------------------------
// Only change code below this line
function countdown(n){
    if (n < 1){
      return [];
    } else if(n === -1){
      return;
    }else{
      let countArr = countdown(n - 1);
      countArr.unshift(n);
      return countArr;
    }
  }
  console.log(countdown(10))
  // Only change code above this line
  
//-------------------------------------
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0){
        return [startNum];
    }
    else{
      let arr = rangeOfNumbers(startNum, endNum - 1);
      arr.push(endNum);
      return arr;
    }
  };
  console.log(rangeOfNumbers(2,5))
//-------------------------------------