function tieneLetra(string,letra){
    let resultado = 'True';
    if(string.indexOf(letra) === -1){
        resultado = 'False';
    }
    return resultado;
}
console.log(tieneLetra('Javier','a'));
console.log(tieneLetra('Javier','x'));