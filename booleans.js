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