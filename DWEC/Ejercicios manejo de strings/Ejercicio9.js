function generarNombre2(n1,n2,n3){
    resultado = '';
    if(n1.length > 5 || n2.length > 5 || n3.length > 5){
        resultado = 'Error';
    }
    else{
        resultado = n1.charAt(n1.length-1)+n2.charAt(n2.length-1)+n3.charAt(n3.length-1);
    }
    return resultado;
} 
console.log(generarNombre2('Xuan','Pepe','Raul'));
console.log(generarNombre2('Juuuan','Pepeee','Raaaul'));