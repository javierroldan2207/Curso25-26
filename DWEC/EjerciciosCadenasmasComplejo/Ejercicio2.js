function invertirCadena(text){
    let result ='';
    for(let i = text.length-1; i > -1; i--){
        result = result + text[i] ;
    }
    return result;
}
console.log(invertirCadena('Hola mundo'));
console.log(invertirCadena('Buenos dias mundo.'));