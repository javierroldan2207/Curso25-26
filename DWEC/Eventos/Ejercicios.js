//1.1. Crea una página HTML con un botón. Agrega un escuchador de eventos para que cuando se haga clic en el botón
// , se muestre un mensaje en la consola del navegador.
const show = document.getElementById("miBoton")
const body = document.querySelector('body');
show.addEventListener("click", () => {
    const p = document.createElement('p');
    p.textContent = 'El boton a sido pulsado.';
    body.appendChild(p)
});

//1.2. Agrega otro elemento HTML (por ejemplo, un enlace) en la página y agrega 
// un escuchador de eventos para que cuando se pase el mouse sobre el elemento, el color de fondo cambie.

const enl = document.querySelector('a');

enl.addEventListener("mouseenter",() => {
    enl.style.color = "red";
});

enl.addEventListener("mouseleave", () => {
    enl.style.color = "blue";
});

//1.3. Agrega un escuchador de eventos al elemento document.body para que cuando se mueva el ratón en cualquier punto de la ventana del navegador, 
// muestre en algún elemento (puedes agregar un <div> o <p> al HTML)
// la posición del puntero respecto al navegador y respecto a la página.

const poss = document.body;
const xy = document.getElementById('position');
poss.addEventListener("mousemove" , (e) => {
    xy.textContent = `Posicion x: ${e.clientX} Posicion y: ${e.clientY}`;
});

//2.1 Agrega un escuchador de eventos al elemento document.body para que cuando se presione cualquier tecla, 
// muestre un mensaje de alerta con el nombre de la tecla pulsada y su código.

const doc = document.body;
const tecla = document.getElementById("tecla");

doc.addEventListener("keydown" ,(e) => {
    tecla.textContent = "tecla pulsada:" + e.key + " con el codigo: " + e.code;
});


//3.1. Crea una lista desordenada (<ul>) con varios elementos de lista (<li>) dentro. 
// Agrega un escuchador de eventos al elemento <ul> para que cuando se haga clic en cualquier elemento de la lista, 
//se muestre un mensaje en la consola indicando el texto del elemento clickeado.

const element = document.getElementById('liss');

element.addEventListener('click', (e) => {
    console.log(e.target.textContent);
});


//4.1. Crea un formulario HTML con campos de entrada para el nombre y el correo electrónico. Agrega un botón "Enviar" al formulario.
//Cuando se haga clic en el botón, valida que los campos de entrada no estén vacíos y muestra un mensaje de éxito o error en la página en función de la validación.
const form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('ms');
    if (name === '' || email === '') {
        message.textContent = 'Error';
    } else {
        message.textContent = 'Formulario enviado correcto.';
    }
});


//4.2. Agrega una función que dispare un evento personalizado "formularioEnviado" cuando se envíe el formulario con éxito. 
//Escucha este evento y muestra un mensaje personalizado en la consola cuando se dispare.

