//1. Crea una función media(...valores) que calcule la media de cualquier número de argumentos.
function media(...valores){
    let total = valores.reduce((total,nota) => total + nota,0);
    return total / valores.length;
}

console.log(media(5.2, 3.9, 6, 9.75, 7.5, 3));

//2. Usa spread para pasar un array de números a Math.min y Math.max.
let numeros = [5.2, 3.9, 6, 9.75, 7.5, 3];
console.log(Math.min(...numeros));
console.log(Math.max(...numeros));

//3. Crea un objeto config con varias propiedades y usa spread para clonar y cambiar solo una propiedad.
let persona ={
    nombre: 'Juan',
    apellido: 'Velazque',
    edad: 20
};

let nuevaPersona = {
    ...persona,
    nombre: 'Julian'
}

//4. Usa desestructuración en parámetros para una función que reciba {nombre, nota} y muestre en consola un mensaje como "Alumno: nombre - Nota: nota".
function mostrarAlumno({ nombre, nota }) {
  console.log(`Alumno: ${nombre} - Nota: ${nota}`);
}
let alumno = { nombre: "Ana", nota: 7.5, curso: "DAW" };
mostrarAlumno(alumno);
