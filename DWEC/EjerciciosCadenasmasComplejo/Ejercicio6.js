/**
 * 
 * @param {string} text 
 */
function comprimirRepeticiones(text){
    let result = '';
    let count = 1;
    for(let i = 0; i<text.length; i++){
        if(text.charAt(i)===text.charAt(i+1)){
            count++;
        }
        if(text.charAt(i) != text.charAt(i+1)){
            result = result + text.charAt(i)+count;
            count = 0;
        }
        
    }
    return result;
}
console.log(comprimirRepeticiones('aaaaaalllllffffmmm'));