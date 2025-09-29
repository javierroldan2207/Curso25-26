let productos = [
  { id: 1, nombre: 'Teclado', precio: 25.5, stock: 10 },
  { id: 2, nombre: 'Ratón', precio: 15.0, stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 150.0, stock: 5 },
  { id: 4, nombre: 'USB', precio: 8.0, stock: 25 }
];
//1. Con filter, obtén los productos con stock > 0.
console.log(productos.filter(productos => productos.stock > 0));
//2. Con map, crea un array solo con los nombres de productos.
let nombresProducstos = productos.map(productos => productos.nombre);
console.log(nombresProducstos);
//3. Con reduce, calcula el valor total del stock (precio × stock).
let totalPrecio = productos.reduce((total,producto) => total + producto.precio * producto.stock,0);
console.log(totalPrecio);
//4. Usa sort para ordenar por precio ascendente.
productos= productos.sort((a,b)=> a.precio -b.precio );
//5. Crea una función buscarProducto(nombre) que devuelva el objeto que coincide (o null si no existe).
function buscarProducto(nombre){
  return productos.find((producto) => {
    if(producto.nombre === nombre){
        return producto;
    }else{
        return null;
    }
  }
)}
console.log(buscarProducto('USB'));

//6. Usa desestructuración para extraer nombre y precio del producto con id=3.
let {nombre,precio} = productos.find(producto => producto.id = 3);

//7. Convierte el array de productos en un Set de nombres y de nuevo en array para eliminar duplicados.
productos.form(new Set(productos));