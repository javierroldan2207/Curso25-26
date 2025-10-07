//1.1. Utiliza document.getElementById() para obtener el nodo con el id "main" de tu página web de ejemplo. Imprime el nodo en la consola.
const mainNode = document.getElementById("body");
console.log(mainNode);

//1.2. Usa document.getElementsByClassName() para obtener todos los elementos con la clase "error" en tu página web de ejemplo. Imprime la colección en la consola.

console.log(document.getElementsByClassName("error"));

//1.3. Utiliza document.getElementsByTagName() para obtener todos los elementos <p> de tu página web de ejemplo. Imprime la colección en la consola.

console.log(document.getElementsByTagName("p"));

//1.4. Emplea document.querySelector() para obtener el primer párrafo con la clase "error" en tu página. Imprime el nodo en la consola.

console.log(document.querySelector("p.error"));

//1.5. Usa document.querySelectorAll() para obtener todos los párrafos con la clase "error" en tu página. Imprime la colección en la consola.

console.log(document.querySelectorAll("p.error"));

//1.6. Obtén por consola, al menos de 2 formas diferentes:
//El elemento con id ‘input2’
console.log(document.querySelector("#input2"));
console.log(document.getElementById("input2"));

//La colección de párrafos
console.log(document.querySelectorAll("p"));
console.log(document.getElementsByTagName("p"));

//Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
console.log(document.getElementById("lipsum").querySelectorAll("p"));
console.log(document.querySelectorAll("#lipsum p"));

//El formulario (ojo, no la colección con el formulario sino sólo el formulario)
console.log(document.getElementById("myForm"));
console.log(document.querySelectorAll("form"));

//Todos los inputs
console.log(document.querySelectorAll("input"));
console.log(document.getElementsByTagName("input"));

//Sólo los inputs con nombre ‘sexo’
console.log(document.querySelectorAll("input[name='sexo']"));

//Los items de lista de la clase ‘important’ (sólo los LI)
console.log(document.querySelectorAll("li.important"));


//Ejercicio 2: Acceso a Nodos Relacionados
//2.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu página web de ejemplo. Imprime el nodo en la consola.
console.log(document.querySelector("#lipsum p"));
//2.2. Emplea el método nextElementSibling para obtener el siguiente hermano del párrafo obtenido en el ejercicio 2.1. Imprime el nodo en la consola.
console.log(document.querySelector("#lipsum p").nextElementSibling);
//2.3. Utiliza el método parentElement para obtener el elemento padre del párrafo obtenido en el ejercicio 2.2. Imprime el nodo en la consola.
console.log(document.querySelector("#lipsum p").parentElement);
//2.4. Obtén por consola, al menos de 2 formas diferentes:

//El primér párrafo que hay dentro del div ‘lipsum’
console.log(document.querySelector("#lipsum p"));
console.log(document.getElementById("lipsum").querySelector("p"));
//El segundo párrafo de ‘lipsum’
//El último item de la lista
//La label de ‘Escoge sexo’