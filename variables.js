/* O JavaScript fornece oito tipos de dados diferentes que são
undefined, null, boolean, string, symbol, bigint, number e object. */
var myName;
//Em JavaScript, você pode armazenar um valor em uma variável com o operador de atribuição (=).
myName = 5;
//Depois que um valor é atribuído a uma variável usando o operador de atribuição, 
//você pode atribuir o valor dessa variável a outra variável usando o operador de atribuição.
var b;
b = myName;
//É comum inicializar uma variável com um valor inicial na mesma linha em que ela é declarada.
var minhaVar = 0;
//Mas você também pode declarar uma variável string assim:
var meuNome = "seu nome";
//Quando variáveis ​​JavaScript são declaradas, elas têm um valor inicial indefinido. Se você fizer uma operação matemática 
//em uma variável indefinida, seu resultado será NaN, que significa "Não é um número". 
//Se você concatenar uma string com uma variável indefinida, obterá uma string indefinida.
//Lição freecodecamp:
// ----------------------------
var a = 5;
var b = 10;
var c = "I am a";


a = a + 1;
b = b + 5;
c = c + " String!";
// ----------------------------
/*Em JavaScript, todas as variáveis ​​e nomes de funções diferenciam maiúsculas de minúsculas. 
Isso significa que a capitalização é importante.

MYVAR não é o mesmo que MyVar nem myvar. 
É possível ter múltiplas variáveis ​​distintas com o mesmo nome, mas com maiúsculas e minúsculas diferentes. 
É altamente recomendável que, por uma questão de clareza, você não use esse recurso de linguagem.

Melhor prática

Escreva nomes de variáveis ​​em JavaScript em camelCase. 
No camelCase, nomes de variáveis ​​com várias palavras têm a primeira palavra em minúscula e a 
primeira letra de cada palavra subsequente é maiúscula. */
//Lição freecodecamp:
// Variable declarations
var studlyCapVar = 10;
var properCamelCase = "A String";
var titleCaseOver = 9000;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
//------------------------------
/*Um dos maiores problemas com a declaração de variáveis ​​com a palavra-chave var é que você pode facilmente sobrescrever declarações de variáveis:

var campista = "James";
var campista = "David";
console.log(campista);

No código acima, a variável camper é originalmente declarada como James e então substituída por David. 
O console então exibe a string David.

Em um aplicativo pequeno, você pode não encontrar esse tipo de problema. 
Mas à medida que sua base de código aumenta, você pode substituir acidentalmente uma variável que não pretendia. 
Como esse comportamento não gera erros, a busca e a correção de bugs se tornam mais difíceis.

Uma palavra-chave chamada let foi introduzida no ES6, uma grande atualização do JavaScript, 
para resolver esse possível problema com a palavra-chave var. Você aprenderá sobre outros recursos do ES6 em desafios posteriores.

Se você substituir var por let no código acima, ocorrerá um erro:

let campista = "James";
let campista = "David";

O erro pode ser visto no console do seu navegador.

Portanto, diferentemente de var, quando você usa let, uma variável com o mesmo nome só pode ser declarada uma vez.

*/
//Lição FreeCodeCamp
let catName = "Oliver";
let catSound = "Meow!";
//---------------------------------