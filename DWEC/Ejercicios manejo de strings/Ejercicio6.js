function devuelveMasLarga(a,b){
    let resultado = a;
    if(a.length < b.length){
        resultado = b;
    }
    return resultado;
}

console.log(devuelveMasLarga('buenos dias.','Juan'));
console.log(devuelveMasLarga('buenos dias.','buenos dias'));
