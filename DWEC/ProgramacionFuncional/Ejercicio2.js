let potencia = (base,exponente = 2) => {
    let valor = 1;
    for(let i = 1; i<=exponente; i++){
        valor = valor*base;
    }
    return valor;
}

console.log(potencia(5));