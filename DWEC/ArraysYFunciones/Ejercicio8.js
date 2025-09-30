// Crea un script que:
//1. Pida al usuario una lista de números separados por coma con prompt().

let entrada = prompt("Introduce una listab de numeros separados por ,");
let numeros =entrada.split(",").map(num=>Number(num.trim()));

//2. Convierta la cadena en array con split.
let numeros2 = entrada.split();


//4. Calcule y muestre:

//* La suma y media con reduce.
let suma = numeros.reduce((acum, num) => acum + num, 0);
let media = suma / numeros.length;


//* El máximo y mínimo con Math.max(...arr) y Math.min(...arr).
let maximo=Math.max(...numeros);
let minimo= Math.min(...numeros);


//* Un nuevo array con solo los pares.
let pares = numeros.filter(num=>num %2=== 0);


//* Un nuevo array con todos multiplicados ×2.
let multiplicados = numeros.map(num => num * 2);


//* Si hay al menos un número mayor que 100 (some).
let hayMayor100 = numeros.some(num => num > 100);

//* Si todos son positivos (every).
let todosPositivos = numeros.every(num => num > 0);

//5. Muestre todos los resultados con console.table().
console.table({Numeros: entrada, ArrayNumeros: numeros2,Suma: suma, Media: media, Maximo: maximo, Minimo: minimo, Pares: pares, Multiplicados: multiplicados, MayorA100: hayMayor100, TodosPositivos: todosPositivos});