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


const output = (pokemon) => {
    pokemon.forEach((pokemon) => {
        let article = document.createElement("article");

        let name = document.createElement("h3")
        name.textContent = pokemon.abilities;

        let abilities = document.createElement("h4")
        abilities.textContent = pokemon.abilities;

        let forms = document.createElement("h5")
        forms.textContent = pokemon.forms;

        let img = document.createElement("img")
        img.setAttribute("src", pokemon.front_default);
        img.setAttribute("alt", pokemon.name);
    
        article.appendChild(name);
        article.appendChild(abilities);
        article.appendChild(forms);
        article.appendChild(img);

        document.querySelector("#pokemon").appendChild(article);
        
    });
};


const getPokemon = async () => {
    const respone = await fetch(
        "https://pokeapi.co/api/v2/pokemon/ditto"
    );
    pokemonList = await respone.json();
    output(pokemonList);
};
getPokemon();


const reset = () => {
    document.querySelector("#pokemon").innerHTML = "";
};