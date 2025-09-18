function addGuiones(cadena) {
    let resultado = '';
    for(let i = 0; i<cadena.length;i++){
        resultado = resultado+cadena[i]+'-';
    }
    return resultado;
}
console.log(addGuiones("Hola"));