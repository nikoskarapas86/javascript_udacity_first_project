let dinoData = [];
dinoData = Array.from(data["Dinos"]);
console.log(dinoData);



function Creature(
  heightOfCreature,
  weightOfCreature,
  dietOfCreature,
  imageOfCreature
) {
  return {
    height: heightOfCreature,
    weight: weightOfCreature,
    diet: dietOfCreature,
    image: imageOfCreature,
  };
}
// Create Dino Constructor
function Dino(
  dinoDiet,
  dinoFact,
  dinoHeight,
  dinoSpecies,
  dinoWeight,
  dinoWhen,
  dinoWhere
) {
  return Object.assign(
    {},
    Creature(dinoHeight, dinoWeight, dinoDiet, dinoSpecies),
    {
      fact: dinoFact,
      species: dinoSpecies,
      when: dinoWhen,
      where: dinoWhere,
      image: dinoSpecies,
    }
  );
}
// Create Dino Objects
function getUrlImage(species) {
  return "images/" + species.toLowerCase() + ".png";
}
let dinos = dinoData.map((dino) =>
  Object.assign(
    {
      ...Dino(
        dino.diet,
        dino.fact,
        dino.height,
        dino.species,
        dino.weight,
        dino.when,
        dino.where
      ),
    },
    { image: getUrlImage(dino.species) }
  )
);

// Create Human Object
function Human(humanName, height, weight, diet) {
  return Object.assign({}, Creature(height, weight, diet, 'images/human.png'), {
    name: humanName,
  });
}

function getInput(id) {
  return document.getElementById(id).value;
}
// Use IIFE to get human data from form
function createHuman() {
  return (function () {
    const humanName = getInput("name");
    let heightWithFeet = parseFloat(getInput("feet"));
    let heightWithInches = parseFloat(getInput("inches"));
    let weight = parseFloat(getInput("weight"));
    let diet = getInput("diet");
    const height =( heightWithFeet * 12) + heightWithInches;
    
    return Human(humanName, height, weight, diet);
  })();
}
// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
document.getElementById("btn")
    .addEventListener("click", () =>{
        const human = createHuman();
        
        });