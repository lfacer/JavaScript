// output build
const outputDefault = (output) => {
  let articleDefault = document.createElement("article");

  let outputName = document.createElement("h3");
  outputName.textContent = output.species.name;

  let img1 = document.createElement("img");
  img1.setAttribute("src", output.sprites.front_default);

  let img2 = document.createElement("img");
  img2.setAttribute("src", output.sprites.back_default);

  articleDefault.appendChild(outputName);
  articleDefault.appendChild(img1);
  articleDefault.appendChild(img2);

  document.querySelector("#output").appendChild(articleDefault);
};

const outputShiny = (output) => {
  let articleShiny = document.createElement("article");

  let outputName = document.createElement("h3");
  outputName.textContent = output.species.name;

  let img3 = document.createElement("img");
  img3.setAttribute("src", output.sprites.front_shiny);

  let img4 = document.createElement("img");
  img4.setAttribute("src", output.sprites.back_shiny);

  articleShiny.appendChild(outputName);
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
      // console.log(output)
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

