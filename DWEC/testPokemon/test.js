const peticion = new XMLHttpRequest();
peticion.open('GET','http://localhost:3000/pokemon');
peticion.send();
let pokemons = "";

peticion.addEventListener("load", () => {
    if(peticion.status == 200){
        pokemons = JSON.parse(peticion.responseText);
        pokemons.array.forEach(pokemon => {
            const lista = createElement("li");
            
            ul.appendChild(pokemon);
        });
    }else{
        console.log("Error.")
    }
    console.log(pokemons);
});



