//---------------------------------
/*Você já deve ter ouvido o termo objeto antes.

Os objetos são semelhantes aos arrays, exceto que, 
em vez de usar índices para acessar e modificar seus dados, 
você acessa os dados nos objetos por meio do que chamamos de propriedades.
Ex:
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
*/
//---------------------------------
const myDog1 = {
  // Only change code below this line
  name: "Bazinga",
  legs: 4,
  tails: 1,
  friends: ["Azul", "Rex", "Pet"],

  // Only change code above this line
};
//---------------------------------
//Existem duas maneiras de acessar as propriedades de um objeto:
//notação de ponto (.) e notação de colchetes ([]), semelhante a um array.
// Setup
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

// Only change code below this line
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt; // Change this line
//---------------------------------
/*A segunda maneira de acessar as propriedades de um objeto é a notação de colchetes ([]). 
Se a propriedade do objeto que você está tentando acessar tiver um espaço em seu nome, você precisará usar a notação de colchetes.*/
//---------------------------------
// Setup
const testObj3 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

// Only change code below this line
const entreeValue = testObj3["an entree"]; // Change this line
const drinkValue = testObj3["the drink"]; // Change this line
//---------------------------------
// Setup
const testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

// Only change code below this line
const playerNumber = 16; // Change this line
const player = testObj2[playerNumber]; // Change this line
//---------------------------------
// Setup
const myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

// Only change code below this line
myDog.name = "Happy Coder";
//---------------------------------
const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog.bark = "woof";
//---------------------------------
//Também podemos excluir propriedades de objetos desta maneira:
//delete ourDog.bark;
//---------------------------------
// Setup
const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

// Only change code below this line
delete myDog.tails;
//---------------------------------
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
//---------------------------------
//Para verificar se uma propriedade em um determinado objeto existe
//ou não, você pode usar o método .hasOwnProperty().
//---------------------------------
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  return "Not Found";
  // Only change code above this line
}
//---------------------------------
let myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
];
myMusic = [
  {
    artist: "my blues",
    title: "a",
    release_year: 2003,
    formats: ["my blues", "blues my"],
    gold: "true",
  },
  {
    artist: "my blues",
    title: "a",
    release_year: 2003,
    formats: ["my blues", "blues my"],
    gold: "true",
  },
];
//---------------------------------
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    "outside": {
      "trunk": "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];
//---------------------------------
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
//---------------------------------
// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (value === ""){
      delete records[id][prop];
    }
    else if (prop!="tracks" && value.length > 0){
        records[id][prop] = value;
    }
    else if (prop==="tracks" && value!==""){
        if (records[id].hasOwnProperty("tracks") === false){
        records[id]["tracks"] = [];
    }   records[id][prop].push(value);
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
//---------------------------------