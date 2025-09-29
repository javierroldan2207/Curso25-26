//Crea un array llamado listaCompra con los siguientes elementos: 'Peras', 'Manzanas', 'Kiwis', 'Plátanos', y 'Mandarinas'.
const listaCompra = ['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas'];
//Usa el método splice para eliminar las 'Manzanas' de la lista de compra.
console.log (listaCompra.splice(1,1));
//Usa el método splice para añadir 'Naranjas' y 'Sandía' después de 'Plátanos' en la lista de compra.
listaCompra.splice(2,1,'Platanos','Naranjas','Sandia');
//Usa el método splice para reemplazar 'Kiwis' con 'Cerezas' y 'Nísperos' en la lista de compra.
listaCompra.splice(2,1,'Cerezas','Nispero');
//Imprime la lista de compra final por la consola.
console.log(listaCompra);


//Crea un array llamado original con algunos elementos.
const original = [1,2,3,4,5];
//Crea un nuevo array llamado copia que sea una copia de original utilizando el método slice.
let copia = original.slice(0);
//Modifica un elemento en copia y verifica si también se modifica en original.
copia.pop(1);
console.log(copia);
console.log(original);


//Crea un array llamado notas con las siguientes calificaciones: [4, 8, 3, 10, 5].
const notas = [4, 8, 3, 10, 5];
//Escribe una función que tome el array de notas y lo ordene de menor a mayor. Utiliza el método sort.
function ordenarNotas(notas){
    notas.sort(function(a,b){
        return a-b;
    });
    return notas;
}
//Imprime el array de notas ordenado por la consola.
console.log(ordenarNotas(notas));
console.log(notas.sort((a,b)=>a-b));