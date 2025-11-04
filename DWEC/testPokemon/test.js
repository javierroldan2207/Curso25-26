const peticionGet = new XMLHttpRequest();
peticionGet.open('GET', 'http://localhost:3000/pokemon');
peticionGet.send();
let pokemons = [];
let ul = document.querySelector("ul");

peticionGet.addEventListener("load", () => {
    if (peticionGet.status == 200) {
        pokemons = JSON.parse(peticionGet.responseText);
        pokemons.forEach(pokemon => {
            const lista = document.createElement("li");
            lista.textContent = pokemon.nombre;
            ul.appendChild(lista);
        });
    }else {
        console.log("Error.")
    }
    console.log(pokemons);
});

let boton = document.querySelector("button");

boton.addEventListener("click", (e) => {
    e.preventDefault();
    const newPokemon = {
        name: document.getElementById("name").value,
        level: document.getElementById("level").value,
        country: document.getElementById("country").value
    }

    const peticionPost = new XMLHttpRequest();
    peticionPost.open('POST', 'http://localhost:3000/pokemon');
    peticionPost.setRequestHeader('Content-type', 'application/json');
    peticionPost.send(JSON.stringify(newPokemon));

});



