//------------------------------------------
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
//------------------------------------------
//Se você tiver várias condições que precisam ser abordadas, poderá encadear instruções if com instruções else if.
//------------------------------------------
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);
//------------------------------------------
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
//------------------------------------------
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  }

  return "Change Me";
  // Only change code above this line
}

testSize(7);
//------------------------------------------
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes == par) {
    return names[3];
  }
  return names[names.length - 1];
  // Only change code above this line
}

golfScore(5, 4);
//------------------------------------------
//Se você precisar combinar um valor com muitas opções, poderá usar uma instrução switch.
//Uma instrução switch compara o valor com as instruções case que definem vários valores possíveis.
//------------------------------------------
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  // Only change code above this line
  return answer;
}

caseInSwitch(1);
//------------------------------------------
//Em uma instrução switch talvez você não consiga especificar todos os valores possíveis como instruções case.
//Em vez disso, você pode adicionar a instrução padrão que será executada se nenhuma instrução case correspondente for encontrada.
//------------------------------------------
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff";
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);
//------------------------------------------
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High"
            break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(2);
//------------------------------------------