/**
 * 
 * @param {string} string 
 */
function primerasMayusculas(string){
    let result = '';
    for(let i = 0; i<string.length; i++){
        let char = string[i];
        if(i === 0 || string[i-1] === ' '){
            result += char.toLocaleUpperCase();
        }else{
            result += char;
        }
    }
    return result;
}

console.log(primerasMayusculas('buenos dias a todo el mundo.'));