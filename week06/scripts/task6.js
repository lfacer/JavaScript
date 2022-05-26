const today = new Date();

let dayOfWeek;

dayOfWeek = today.getDay();

let message1;

if (dayOfWeek >= 1 && dayOfWeek <=5) {
    message1 = "Weekday";
}

else {
    message1 = "Weekend";
}

let message2;
switch (dayOfWeek) {
    case 0:
        message2 = "Sunday";
        break;
    case 1:
        message2 = "Monday";
        break;
    case 2:
        message2 = "Tuesday";
        break;
    case 3:
        message2 = "Wednesday";
        break;
    case 4:
        message2 = "Thursday";
        break;
    case 5:
        message2 = "Friday";
        break;
    case 6:
        message2 = "Saturday";
        break;
    default:
        message2 = "Unknown - " + dayOfWeek
        break;
}

document.querySelector("#message1").textContent = message1;
document.querySelector("#message2").textContent = message2;


const output = (pokemons) => {
    pokemons.forEach((sprites) => {
        let article = document.createElement("article");

        let img1 = document.createElement("img");
        img1.setAttribute("src", sprites.front_default);

        let img2 = document.createElement("img");
        img2.setAttribute("src", sprites.back_default);
    
        article.appendChild(img1);
        article.appendChild(img2);

        document.querySelector("#pokemons").appendChild(article);
    });
};


const getPokemon = async () => {
    const respone = await fetch(
        "https://pokeapi.co/api/v2/pokemon/pikachu"
    );
    pokemonList = await respone.json();
    output(pokemonList);
};
getPokemon();


const reset = () => {
    document.querySelector("#pokemons").innerHTML = "";
};

// const pokemon1 = {
//     pokemonName: "Eevee",
//     pokemonType: "Normal",
//     picture: "insert png here"
// };

// document.querySelector('#eevee').textContent = pokemon1;