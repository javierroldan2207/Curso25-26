function cuentaVocales(text){
    const vocals = 'aeiou';
    let count = 0;
    for(let i = 0; i<text.length; i++){
        for(let j = 0; j<vocals.length; j++){
            if(text.toLocaleLowerCase()[i] === vocals.toLocaleLowerCase()[j]){
                count++;
            }
        }
    }
    return count;
}

console.log(cuentaVocales('Hola, buenos dias.'));