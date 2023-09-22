/*Ao definir uma string, você deve começar e terminar com aspas simples ou duplas. 
O que acontece quando você precisa de uma aspa literal: "ou 'dentro da sua string?
Em JavaScript, você pode evitar que uma citação a considere como uma citação de 
fim de string colocando uma barra invertida (\) na frente da citação.*/
//Lição freecodecamp:
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
//---------------------------------
//Lição freecodecamp:
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';
//---------------------------------
/*Aspas não são os únicos caracteres que podem ser escapados dentro de uma string. 
As sequências de escape permitem que você use caracteres que de outra forma não conseguiria usar em uma string.
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed
*/
//Lição freecodecamp:
const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
//---------------------------------
//Em JavaScript, quando o operador + é usado com um valor String, ele é chamado de operador de concatenação. 
//Você pode construir uma nova string a partir de outras strings concatenando-as.
//Lição freecodecamp:
const myStr4 = "This is the start." + " This is the end."; // Change this line
//---------------------------------
//Também podemos usar o operador += para concatenar uma string no final de uma variável de string existente. 
//Isso pode ser muito útil para quebrar uma longa sequência em várias linhas.
//---------------------------------
let myStr5 = "This is the first sentence.";
myStr5+=" This is the second sentence."
//---------------------------------
// Only change code below this line
const myName = "Marcos";
const myStr6 = "My name is" + myName + " and I am well!";
//---------------------------------
// Change code below this line
const someAdjective = "cool";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;
//---------------------------------
/*Você pode encontrar o comprimento de um valor String escrevendo .length após a variável string ou literal de string.*/
//---------------------------------
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
//---------------------------------
// Setup
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName2[0]; // Change this line
//---------------------------------
// Setup
let myStr8 = "Jello World";

// Only change code below this line
myStr8 = "Hello World"; // Change this line
// Only change code above this line
//---------------------------------
// Setup
const lastName3 = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName3[2]; // Change this line
//---------------------------------
//Para obter a última letra de uma string, você pode subtrair uma do comprimento da string.
//Por exemplo, se const firstName = "Ada", você pode obter o valor da última letra da string usando firstName[firstName.length - 1].
//---------------------------------
// Setup
const lastName4 = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName4[lastName4.length -1]; // Change this line
//---------------------------------
// Setup
const lastName5 = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName5[lastName5.length -2]; // Change this line
//---------------------------------
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "My " + myAdjective + " " + myNoun + " " + myVerb + " so " + myAdverb ; // Change this line
// Only change code above this line
//---------------------------------