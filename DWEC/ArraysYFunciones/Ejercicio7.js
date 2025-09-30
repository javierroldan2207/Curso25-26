//1. Crea una función guardarPuntuacion(nombre, puntos) que guarde en localStorage un array de objetos con {nombre, puntos}.
const puntuaciones = []
function guardarPuntuacion(nombre, puntos) {
    return puntuaciones.push({nombre: nombre, puntos: puntos});
  
}
guardarPuntuacion("Ana", 30);
guardarPuntuacion("Javier", 50);
guardarPuntuacion("Luis", 40);
guardarPuntuacion("Pepe", 90);
guardarPuntuacion("Paco",82);
guardarPuntuacion("Paco",82);


//2. Crea otra función obtenerRanking() que devuelva el array ordenado por puntos descendente.
function obtenerRanking() {
   return puntuaciones.sort((p1,p2) => p2.puntos - p1.puntos);
}

console.log(obtenerRanking(puntuaciones));
//3. Muestra el top 3 usando slice y forEach.

function mostrarTop3() {
    let ranking= obtenerRanking();
    let top3 =ranking.slice(0, 3);
    top3.forEach((jugador, indice) => {
        console.log(`${indice + 1}. ${jugador.nombre} - ${jugador.puntos} puntos`);
    });
}

console.log(mostrarTop3())

//4. Asegúrate de que no se repiten jugadores usando un Set de nombres antes de guardar.
let sinRepetidos = new Set(puntuaciones);
