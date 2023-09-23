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