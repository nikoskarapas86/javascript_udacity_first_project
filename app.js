let dinoData = [];
dinoData = Array.from(data["Dinos"]);
console.log(dinoData)
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
let dinos = dinoData.map((dino) =>Object.assign({...Dino(dino.diet,dino.fact,dino.height,dino.species,dino.weight,dino.when,dino.where)},{image:getUrlImage(dino.species)}) );

// Create Human Object

// Use IIFE to get human data from form

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
