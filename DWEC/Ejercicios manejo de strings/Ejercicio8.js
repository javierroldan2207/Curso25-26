function generarNombre(n1,n2,n3){
    resultado = '';
    if(n1.length < 5 || n2.length < 5 || n3.length < 5){
        resultado = 'Error';
    }
    else{
        resultado = n1.substring(0,3)+n2.substring(0,3)+n3.substring(0,3);
    }
    return resultado;
} 
console.log(generarNombre('Xuan','Pepe','Raul'));
console.log(generarNombre('Juuuan','Pepeee','Raaaul'));
