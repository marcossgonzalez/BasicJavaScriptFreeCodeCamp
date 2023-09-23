//-------------------------------
// Only change code below this line
const myArray = ["This is a string", 2];
//-------------------------------
//Arrays dentro uma da outra
// Only change code below this line
const myArray2 = [[4, "oi"]];
//-------------------------------
const myArray3 = [50, 60, 70];
let myData = myArray[0];
//-------------------------------
/*Ao contrário das strings, as entradas dos arrays são mutáveis ​
​e podem ser alteradas livremente, mesmo que o array tenha sido declarado com const.*/
//-------------------------------
// Setup
const myArray4 = [18, 64, 99];

// Only change code below this line
myArray4[0] = [45];
//-------------------------------
const myArray5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData2 = myArray5[2][1];
//-------------------------------
/* Uma maneira fácil de anexar dados ao final de um array é por meio do método 'push()'.*/
//-------------------------------
// Setup
const myArray6 = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
myArray6.push(["dog", 3]);
//-------------------------------
//.pop() é usado para retirar um valor do final de um array. Podemos armazenar esse valor exibido atribuindo-o a uma variável. 
//Em outras palavras, .pop() remove o último elemento de um array e retorna esse elemento.
//-------------------------------
// Setup
const myArray7 = [["John", 23], ["cat", 2]];

// Only change code below this line
let removedFromMyArray = myArray7.pop()
//-------------------------------
//pop() sempre remove o último elemento de um array. E se você quiser remover o primeiro?
//É aí que entra .shift(). Funciona exatamente como .pop(), exceto que remove o primeiro elemento em vez do último.
//-------------------------------
// Setup
const myArray9 = [["John", 23], ["dog", 3]];

// Only change code below this line
let removedFromMyArray2 = myArray9.shift()
//-------------------------------
//.unshift() funciona exatamente como .push(),
//mas em vez de adicionar o elemento no final do array, unshift() adiciona o elemento no início do array.
//-------------------------------
// Setup
const myArray10 = [["John", 23], ["dog", 3]];
myArray10.shift();

// Only change code below this line
myArray10.unshift(["Paul", 35])
//-------------------------------
const myList = [["Chocolate Bar", 15]
,["Chocolate Bar", 15],["Chocolate Bar", 15]
,["Chocolate Bar", 15]
,["Chocolate Bar", 15]
];
//-------------------------------