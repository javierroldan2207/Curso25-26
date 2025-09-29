let ventas = [
  {producto:'Libro', unidades:3, precio:12.5},
  {producto:'Bolígrafo', unidades:10, precio:1.2},
  {producto:'Carpeta', unidades:2, precio:5.0}
]


//1. Crea un nuevo array con el total por línea (unidades * precio).

let total = ventas.map(producto => producto.precio * producto.unidades);
console.log(total);

//2. Usa reduce para calcular el total de ventas.
let totalVentas = ventas.reduce((total,producto) => total + producto.unidades,0);
console.log(totalVentas);

//3. Usa filter para quedarte solo con productos de más de 2 unidades.
let cantProducto = ventas.filter(producto => producto.unidades > 2);
console.log(cantProducto);

//4. Convierte el array de productos en una cadena con map + join.
let arrayProductos = ventas.map(producto => producto.producto).join(',');
console.log(arrayProductos);

//5. Invierte el array con reverse y comprueba si afecta al original (referencia).
//6. Crea una copia del array usando slice antes de invertirlo.
let copia = arrayProductos.slice(0);
let invertida = ventas.reverse();
console.log(invertida);
console.log(copia);
