let notas = [5.2, 3.9, 6, 9.75, 7.5, 3, 6.5, 9.75]

//1. Crea una función flecha aprobados que devuelva solo las notas ≥5.
let aprobados = notas.filter((nota) => nota >= 5);
console.log(aprobados);
//2. Usa reduce para calcular la nota media.
let notaMedia = notas.reduce((total,nota)=> total + nota)/notas.length;
console.log(notaMedia);
//3. Usa Math.max(...notas) para obtener la nota más alta.
console.log(Math.max(...notas));