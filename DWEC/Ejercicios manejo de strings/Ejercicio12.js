function tieneLetra2(string,letra){
    let resultado = 'True';
    if(string.toLocaleLowerCase().indexOf(letra.toLocaleLowerCase()) == -1){
        resultado = 'False';
    }
    return resultado;
}
console.log(tieneLetra2('Javier','A'));
console.log(tieneLetra2('Javier','x'));