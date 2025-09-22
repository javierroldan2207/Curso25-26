function esPalindromo(text){
    let invested = '';
    let result = false;
    text = text.replaceAll(' ','');
    for(let i = text.length-1; i > -1 ; i--){
        invested = invested + text[i];
    }
    if(text.toLocaleLowerCase() === invested.toLocaleLowerCase()){
        result = true;
    }
    return result;
}

console.log(esPalindromo('Dabale arroz a la zorra el abad'))