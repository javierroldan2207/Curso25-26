//1.1. Utiliza document.createElement('etiqueta') para crear un nuevo elemento HTML <div>. Asigna este elemento a una variable llamada nuevoDiv.
const nuevoDiv = document.createElement('div');

//1.2. Usa document.createTextNode('texto') para crear un nuevo nodo de texto con el contenido "Nuevo elemento de lista". Asigna este nodo a una variable llamada textoNuevo.
const textoNuevo = document.createTextNode('Nuevo elemento de lista');

//1.3. Utiliza nuevoDiv.appendChild(nuevoNodo) para agregar textoNuevo como hijo del nuevoDiv. Luego, agrega nuevoDiv como último hijo del elemento con el id "lipsum" en tu página web de ejemplo.
nuevoDiv.appendChild(textoNuevo);
document.getElementById('lipsum').appendChild(nuevoDiv);
//1.4. Añade a la página:

//Un nuevo párrafo al final del DIV ‘lipsum’ con el texto “Nuevo párrafo añadido por javascript” (fíjate que una palabra estça en negrita).
const nuevoParrafo = document.createElement('p');
const textoParrafo = document.createTextNode('Nuevo párrafo añadido por ');
const negrita = document.createElement('b');
negrita.appendChild(document.createTextNode('javascript'));
nuevoParrafo.appendChild(document.createTextNode('Nuevo párrafo añadido por '));
nuevoParrafo.appendChild(negrita);
document.getElementById('lipsum').appendChild(nuevoParrafo);

//Un nuevo elemento al formulario tras el ‘Dato 1’ con la etiqueta ‘Dato 1 bis’ y el INPUT con id ‘input1bis’ que al cargar la página tendrá escrito “Hola”.
const nuevoLabel = document.createElement('label');
nuevoLabel.setAttribute('for', 'input1bis');
nuevoLabel.appendChild(document.createTextNode('Dato 1 bis: '));
