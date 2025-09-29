let palabras = ['hola','adios','bien','mal','javascript','JS','array','map']

//1. Convierte todas las palabras a mayúsculas con map.
let mayusculas = palabras.map(palabra => palabra.toLocaleUpperCase());
console.log(mayusculas);

//2. Filtra solo las que tengan más de 3 letras.
let larga = palabras.filter(palabra => palabra.length > 3);
console.log(larga);

//3. Ordena por longitud ascendente.
let ordenadasLongitud = palabras.sort((a,b) => a.length - b.length);
console.log(ordenadasLongitud);

//4. Usa join para unirlas en una cadena separada por guiones.
let separadas = palabras.join('-');
console.log(separadas);

//5. Usa split para volver a tenerlas en array.
let unidas = separadas.split('-');
console.log(unidas);

//6. Con reduce, cuenta cuántas letras en total suman todas.
let totalLetras = palabras.reduce((total,nota) => total + nota).length;
console.log(totalLetras);