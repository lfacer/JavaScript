// output build
const outputDefault = (pikachu) => {
  let articleDefault = document.createElement("article");

  let pikachuName = document.createElement("h3");
  pikachuName.textContent = pikachu.species.name;

  let img1 = document.createElement("img");
  img1.setAttribute("src", pikachu.sprites.front_default);

  let img2 = document.createElement("img");
  img2.setAttribute("src", pikachu.sprites.back_default);

  articleDefault.appendChild(pikachuName);
  articleDefault.appendChild(img1);
  articleDefault.appendChild(img2);

  document.querySelector("#output").appendChild(articleDefault);
};

const outputShiny = (pikachu) => {
  let articleShiny = document.createElement("article");

  let pikachuName = document.createElement("h3");
  pikachuName.textContent = pikachu.species.name;

  let img3 = document.createElement("img");
  img3.setAttribute("src", pikachu.sprites.front_shiny);

  let img4 = document.createElement("img");
  img4.setAttribute("src", pikachu.sprites.back_shiny);

  articleShiny.appendChild(pikachuName);
  articleShiny.appendChild(img3);
  articleShiny.appendChild(img4);

  document.querySelector("#output").appendChild(articleShiny);
}


async function getPokemon() {
  let poke = document.querySelector("#poke").value;
  if (poke != null) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    if (response.ok) {
      let data = await response.json();
      reset();
      // console.log(pikachu)
      let filter = document.querySelector("#selectView").value;
      switch (filter) {
        case "Default":
          outputDefault(data);
          break;
        case "Shiny":
          outputShiny(data);
          break;
        default:
          outputDefault(data)
          break;
      }
    };
  }
}


const reset = () => {
  document.querySelector("#output").innerHTML = "";
};

document.querySelector("#getPokemon").addEventListener("click", getPokemon);

