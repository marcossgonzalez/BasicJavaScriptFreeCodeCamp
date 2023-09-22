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