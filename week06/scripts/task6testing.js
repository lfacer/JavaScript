// Pikachu
const output = (pikachu) => {
  let article = document.createElement("article");
  
  let pikachuName = document.createElement("h3");
  pikachuName.textContent = pikachu.species.name;

  let img1 = document.createElement("img");
  img1.setAttribute("src", pikachu.sprites.front_default);
  
  article.appendChild(pikachuName);
  article.appendChild(img1);

  document.querySelector("#pikachu").appendChild(article);
};

const getPikachu = async () => {
  const respone = await fetch(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
  );
  pokemonList = await respone.json();
  output(pokemonList);
};
getPikachu();

const reset = () => {
  document.querySelector("#pikachu").innerHTML = "";
};


// Ditto
const output2 = (ditto) => {
  let article = document.createElement("article");
  
  let dittoName = document.createElement("h3");
  dittoName.textContent = ditto.species.name;

  let img1 = document.createElement("img");
  img1.setAttribute("src", ditto.sprites.front_default);
  
  article.appendChild(dittoName);
  article.appendChild(img1);

  document.querySelector("#ditto").appendChild(article);
};

const getDitto = async () => {
  const respone = await fetch(
      "https://pokeapi.co/api/v2/pokemon/ditto"
  );
  pokemonList = await respone.json();
  output(pokemonList);
};
getDitto();


const reset2 = () => {
  document.querySelector("#ditto").innerHTML = "";
};

let pokemon = pikachu + ditto;

document.querySelector("pokemon").appendChild(artile)

// Sort by
const sortBy = () => {
  reset();

  let filter = document.querySelector("#sortBy").value;

  switch (filter) {
      case "Pikachu":
          output(
              pokemonList.sort((pikachu, ditto) => {
                  let pikachuName = pikachu.pikachuSprites.toLowerCase();
                  let dittoName = ditto.dittoSprites.toLowerCase();
                  if (pikachuName < dittoName) return -1;
                  else if (pikachuName > dittoName) return 1;
                  else return 0;
              })
          );
          break;

      case "Ditto":
          output(
            pokemonList.sort((pikachu, ditto) => {
              let pikachuName = pikachu.pikachuSprites.toLowerCase();
              let dittoName = ditto.dittoSprites.toLowerCase();
              if (pikachuName > dittoName) return -1;
              else if (pikachuName < dittoName) return 1;
              else return 0;
              }) 
          );
          break;
      default:
          output(
              pokemonList.sort((pikachu, ditto) => 
                  pikachu.pikachuName.toLowerCase() > ditto.dittoName.toLowerCase()
                      ? 1
                      : ditto.dittoName.toLowerCase() >
                        pikachu.pikachuName.toLowerCase()
                      ? -1
                      : 0
              )
          );
          break;
  }
};

document.querySelector("#sortBy").addEventListener("change", sortBy);