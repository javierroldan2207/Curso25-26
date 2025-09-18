function devuelveMasLarga2(a,b,c){
    let resultado = '';
    if(a.length == b.length || a.length == c.length || b.length == c.length){
        resultado = 'Hay al menos dos cadenas iguales.';
    }
    else if(a.length > b.length && a.length > c.length){
        resultado = a;
    }
    else if(b.length > a.length && b.length > c.length){
        resultado = b;
    }
    else {
        resultado = c;
    }
    return resultado;
}

console.log(devuelveMasLarga2('ddd','fff','f'));
console.log(devuelveMasLarga2('ddfd','ffagsfdgf','fsfds'));
console.log(devuelveMasLarga2('ddafadsd','aadfdaserg','fagfdgfdsg'));
