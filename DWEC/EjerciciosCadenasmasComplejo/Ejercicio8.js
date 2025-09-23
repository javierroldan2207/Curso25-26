/**
 * 
 * @param {string} string 
 */
function contadorPalabras(string){
    let result = 0;
    let word = false;
    for(let i = 0; i<string.length; i++){
        if(string[i] !== ' '){
            if(!word){
                result++;
                word = true;
            }
        }else{
            word = false;
        }
    }
    return result;
}

console.log(contadorPalabras('Hola mi nombre es pepe.'));