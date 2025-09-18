function contadorDeletras(string,letra){
    let resultado = 0;
    for ( let i = 0; i<string.length; i++) {
        if(letra.toLocaleLowerCase() == string[i].toLocaleLowerCase()){
            resultado++;
        }
    }
    return resultado;
}
console.log(contadorDeletras('Hola mundo','O'));


function contadorDeLetras2(string1,string2,letra){
    let resultado = '';
    let cont1 = 0;
    let cont2 = 0;
    for(let i = 0; i<string1.length;i++){
        if(letra.toLocaleLowerCase() == string1[i].toLocaleLowerCase()){
            cont1++;
        }
    }
     for(let i = 0; i<string2.length;i++){
        if(letra.toLocaleLowerCase() == string2[i].toLocaleLowerCase()){
            cont2++;
        }
    }
    if(cont1>cont2){
        resultado = string1;
    }
    else{
        resultado = string2;
    }
    return resultado;
}

console.log(contadorDeLetras2('Javier','antonio','o'));