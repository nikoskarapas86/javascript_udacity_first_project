let dinoData = [];
dinoData = Array.from(data["Dinos"]);

// Create Dino Compare Method 1
function copareWeight(humanWeight) {
  let difWeight = this.weight - humanWeight;
  return difWeight > 0
    ? `${this.species} weighted more than yours `
    : difWeight == 0
    ? `${this.species} weights as your weight `
    : `${this.species} weights less than your weight `;
}

// Create Dino Compare Method 2
function compareHeight(humanHeight) {
  let difheight = this.height - humanHeight;
  return difheight > 0
    ? `${this.species} is heigher than your Height `
    : difheight == 0
    ? `${this.species} height is like your height `
    : `${this.species} height is less than yours `;
}

// Create Dino Compare Method 3
function compareDiet(humanDiet) {
  return this.diet == humanDiet
    ? `both of you are ${this.diet}`
    : "you have different diets";
}

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
      facts: [dinoFact],
      copareDinoWeight: copareWeight,
      compareDinoHeight: compareHeight,
      compareDinoDiet: compareDiet,
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
console.log(dinos);

// Create Human Object
function Human(humanName, height, weight, diet) {
  return Object.assign({}, Creature(height, weight, diet, "images/human.png"), {
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
    const height = heightWithFeet * 12 + heightWithInches;

    return Human(humanName, height, weight, diet);
  })();
}

function createHTMLCreature(species, image, facts) {
  const dinoDiv = document.createElement("div");
  dinoDiv.className = "grid-item";
  // let hforSpacies = document.createElement("p");
  // hforSpacies.innerText = species;
  // dinoDiv.appendChild(hforSpacies);
  let imagebackground = document.createElement("img");
  imagebackground.src = image;
  dinoDiv.appendChild(imagebackground);

    let pel = document.createElement("p");
    pel.innerText = facts[Math.floor(Math.random() * 3)];
    dinoDiv.appendChild(pel);
 
  return dinoDiv;
    
  }
 

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", () => {
  const human = createHuman();
  dinos.forEach((dino) => {
    dino.facts.push(dino.compareDinoDiet(human.diet));
    dino.facts.push(dino.compareDinoHeight(human.height));
    dino.facts.push(dino.copareDinoWeight(human.weight));
  });
  // Remove form from screen

  (document.getElementById("dino-compare").style.display = "none")
    

dinos.forEach(dino=>{

  let dinoItem = createHTMLCreature(dino.species, dino.image, dino.facts);
  document.getElementById("grid").appendChild(dinoItem);
  let humanElement = createHTMLCreature(human.species, human.image);
  document.getElementById("grid").appendChild(humanElement);
})


});
