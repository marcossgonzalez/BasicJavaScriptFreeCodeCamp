//----------------------------------
/*O primeiro tipo de loop que aprenderemos é chamado de loop while 
porque ele é executado enquanto uma condição especificada é verdadeira 
e para quando essa condição não é mais verdadeira.*/
//----------------------------------
// Setup
const myArray5 = [];

// Only change code below this line
let k = 5;
while (k>=0){
  myArray5.push(k);
  k--;
}
//----------------------------------
/* O tipo mais comum de loop JavaScript é chamado de loop for porque é executado um número específico de vezes.

Os loops For são declarados com três expressões opcionais separadas por ponto e vírgula:

para (a; b; c), onde a é a instrução de inicialização, b é a instrução de condição e c é a expressão final.*/
//----------------------------------
// Setup
const myArray2 = [];

// Only change code below this line
for (let i = 1; i<6; i++){
  myArray2.push(i);
}
//----------------------------------
//Os loops For não precisam iterar um de cada vez. Ao alterar a nossa expressão final, podemos contar por números pares.
//----------------------------------
// Setup
const myArray3 = [];

// Only change code below this line
for(let i = 1; i<10; i+=2){
    myArray3.push(i);
}
//----------------------------------
/* Um loop for também pode contar regressivamente, desde que possamos definir as condições corretas.

Para diminuir em dois cada iteração, precisaremos alterar nossa inicialização, condição e expressão final.

Começaremos em i = 10 e faremos um loop enquanto i > 0. Decrementaremos i em 2 cada loop com i -= 2. */
//----------------------------------
// Setup
const myArray4 = [];

// Only change code below this line
for (let i = 9; i>0; i-=2){
  myArray4.push(i);
}
//----------------------------------
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0; 
for (let i = 0; i < myArr.length; i++){
  total += myArr[i];

}
//----------------------------------
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i<arr.length;i++){
      for (let j = 0; j < arr[i].length; j++){
        product *= arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
//----------------------------------
/* O próximo tipo de loop que você aprenderá é chamado de loop do...while. Ele é chamado de loop do
...while porque primeiro fará uma passagem do código dentro do loop, não importa o que aconteça, 
e então continuará a executar o loop enquanto a condição especificada é avaliada como verdadeira. 
Ex: const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);

*/
//----------------------------------
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while( i<11);
//----------------------------------
function sum(arr, n) {
    // Only change code below this line
    if (n <= 0 ){
      return 0;
    } else{
      return sum(arr, n-1) + arr[n-1]
    }
    // Only change code above this line
  }
//-----------------------------------