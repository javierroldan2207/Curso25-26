function saludoPersonalizado(name,age){
    console.log(`Saludos ${name}, con edad de ${age} años.`);
}
saludoPersonalizado('javier',24);

function listaCompra(string){
    console.log(`La lista de la compra es la siguiente: 
        ${string}`);
}

listaCompra('huevos,patas,leche.');

function informacionProducto(name,price,color){
    console.log(`Nombre del producto : ${name},
        precio: ${price},
        color: ${color}.`);
}

informacionProducto('llaves',3,'Azul');