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


const sortBy = () => {
    reset();

    let filter = document.querySelector("#sortBy").value;

    switch (filter) {
        case "Default":
            output(
                pokemonList.sort((pikachu1, pikachu2) => {
                    let pikachuSprite1 = pikachu1.img1 + pikachu1.img2;
                    let pikachuSprite2 = pikachu2.img3 + pikachu2.img4;
                    pikachuSprite1 > pikachuSprite2;
                    if (pikachuSprite1 < pikachuSprite2) return -1;
                    else if (pikachuSprite1 > pikachuSprite2) return 1;
                    else return 0;
                })
            );
            break;

        case "Shiny":
            output(
                pokemonList.sort((pikachu1, pikachu2) => {
                    let pikachuSprite1 = pikachu1.img1 + pikachu1.img2;
                    let pikachuSprite2 = pikachu2.img3 + pikachu2.img4;
                    pikachuSprite1 < pikachuSprite2;
                    if (pikachuSprite1 > pikachuSprite2) return -1;
                    else if (pikachuSprite1 < pikachuSprite2) return 1;
                    else return 0;
                }) 
            );
            break;
        default:
            output(
                pokemonList.sort((pikachu1, pikachu2) => 
                    pikachu1 > pikachu2
                        ? 1
                        : pikachu2 >
                          pikachu1
                        ? -1
                        : 0
                )
            );
            break;
    }
};

document.querySelector("#sortBy").addEventListener("change", sortBy);
