//-------------------------------
function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }
//-------------------------------
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
      if (wasThatTrue){
        return "Yes, that was true"
      }
      return "No, that was false"
  
    // Only change code above this line
  
  }
//-------------------------------
// Setup
function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
//-------------------------------
//A igualdade estrita (===) é a contrapartida do operador de igualdade (==). No entanto, diferentemente do operador de igualdade, 
//que tenta converter ambos os valores comparados a um tipo comum, o operador de igualdade estrita não realiza uma conversão de tipo.
//-------------------------------
// Setup
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
//-------------------------------
// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
//-------------------------------
//Em JavaScript, você pode determinar o tipo de uma variável ou valor com o operador typeof, da seguinte maneira:
//Ex: typeof 3; typeof '3';
//O operador de desigualdade (!=, ! = sem espaço entre os símbolos) é o oposto do operador de igualdade.
//-------------------------------
// Setup
function testNotEqual(val) {
    if (val!= 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
//-------------------------------
//O operador de desigualdade estrita (!==) é o oposto lógico do operador de igualdade estrita.
//-------------------------------
// Setup
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
//-------------------------------
function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
//-------------------------------
//O operador maior ou igual a (>=) compara os valores de dois números.
//-------------------------------
function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
//-------------------------------
//O operador menor que (<) compara os valores de dois números. 
//Se o número à esquerda for menor que o número à direita, ele retornará verdadeiro.
//-------------------------------
function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
//-------------------------------
//O operador menor ou igual a (<=) compara os valores de dois números.
//-------------------------------
function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
//-------------------------------
//Às vezes, você precisará testar mais de uma coisa por vez. 
//O operador lógico e (&&) retorna verdadeiro se e somente se os operandos à esquerda e à direita dele forem verdadeiros.
//-------------------------------
function testLogicalAnd(val) {
  // Only change code below this line
    if (val<=50 && val>=25) {
      return "Yes";
    }
  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
//-------------------------------
//O operador lógico ou (||) retorna verdadeiro se algum dos operandos for verdadeiro. Caso contrário, retorna falso.
//-------------------------------
function testLogicalOr(val) {
  // Only change code below this line

  if (val<10 || val>20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
//-------------------------------
