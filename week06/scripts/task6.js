// Pikachu
const output = (pikachu) => {
    let articleDefault = document.createElement("article");

    let articleShiny = document.createElement("article");
    
    let pikachuName = document.createElement("h3");
    pikachuName.textContent = pikachu.species.name;

    let img1 = document.createElement("img");
    img1.setAttribute("src", pikachu.sprites.front_default);

    let img2 = document.createElement("img");
    img2.setAttribute("src", pikachu.sprites.back_default);

    let img3 = document.createElement("img");
    img3.setAttribute("src", pikachu.sprites.front_shiny);

    let img4 = document.createElement("img");
    img4.setAttribute("src", pikachu.sprites.back_shiny);
    
    articleDefault.appendChild(pikachuName);
    articleDefault.appendChild(img1);
    articleDefault.appendChild(img2);
    articleShiny.appendChild(img3);
    articleShiny.appendChild(img4);

    document.querySelector("#pikachu").appendChild(articleDefault);
    document.querySelector("#pikachu").appendChild(articleShiny);
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

