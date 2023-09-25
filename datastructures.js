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