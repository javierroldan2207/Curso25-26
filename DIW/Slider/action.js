const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");
const colorBox = document.getElementById("colorBox");

function actualizarColor() {
    const r = parseInt(rojo.value);
    const g = parseInt(verde.value);
    const b = parseInt(azul.value);
    const color = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = color;
}

rojo.addEventListener("input", actualizarColor);
verde.addEventListener("input", actualizarColor);
azul.addEventListener("input", actualizarColor);

actualizarColor(); 

