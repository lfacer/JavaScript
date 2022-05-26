const div = document.querySelector("#app");
const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

// sending request
fetch(url).then((response)=>{
  return response.json();  // converting byte data to json
}).then(data=>{

   const {title, body} = data;

   // creating h1 and p elements
   const h1 = document.createElement('h1');
   const p = document.createElement('p');

  // adding content
  h1.textContent = title;
  p.textContent = body;

  // appending to div element
  div.appendChild(h1);
  div.appendChild(p);
})

let img1 = document.createElement("img");
img1.setAttribute("src", sprites.front_default);

let img2 = document.createElement("img");
img2.setAttribute("src", sprites.back_default);