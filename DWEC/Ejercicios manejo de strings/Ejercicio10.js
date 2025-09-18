function generarNombre3(n1,n2,n3){
    resultado = '';
    if(n1.length < 5 || n2.length < 5 || n3.length < 5){
        resultado = 'Error';
    }
    else{
        resultado = n1.substring(n1.length - 3, n1.length)+n2.substring(n2.length - 3, n2.length)+n3.substring(n3.length - 3, n3.length);
    }
    return resultado;
} 
console.log(generarNombre3('Xuan','Pepe','Raul'));
console.log(generarNombre3('Juuuan','Pepeee','Raaaul'));