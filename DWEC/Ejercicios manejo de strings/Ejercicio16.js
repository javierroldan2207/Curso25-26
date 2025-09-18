function contadorDeletras(string,letra){
    let resultado = 0;
    for ( let i = 0; i<string.length; i++) {
        if(letra == string[i]){
            resultado++;
        }
    }
    return resultado;
}
console.log(contadorDeletras('Hola mundo','o'));