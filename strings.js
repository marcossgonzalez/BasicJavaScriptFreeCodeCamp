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