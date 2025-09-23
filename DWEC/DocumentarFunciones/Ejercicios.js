// @ts-check 

/**
 * @type {string}
 */
const API_URL = "https://api.example.com";
/**
 * @type {number}
 */
let contador = 0;
/**
 * @type {boolean}
 */
const usuarioActivo = true;

/**
 * 
 * @param {number} base 
 * @param {number} altura 
 * @returns 
 */
function areaRectangulo(base, altura) {
return base * altura;
}

/**
 * 
 * @param {string} texto 
 * @returns 
 */
function convertirEnMayusculas(texto) {
return texto.toUpperCase();
}


/**
 * 
 * @param {string} nombre 
 * @param {string} apellido 
 * @returns 
 */
function generarNombreCompleto(nombre, apellido) {
return nombre + " " + apellido;
}


/**
 * 
 * @param {number} edad 
 * @returns 
 */
function esMayorDeEdad(edad) {
return edad >= 18;
}


/**
 * @typedef {Object} coche
 * @property {string} marca
 * @property {string} modelo
 * @property {number} año
 */
const coche = {
marca: "Toyota",
modelo: "Corolla",
año: 2020
};


/**
 * 
 * @param {coche} coche 
 * @returns 
 */
function mostrarCoche(coche) {
return `${coche.marca} ${coche.modelo} (${coche.año})`;
}


