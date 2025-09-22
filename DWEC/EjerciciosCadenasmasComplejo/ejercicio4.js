/**
 * 
 * @param {string} text 
 * @param {number} n 
 * @returns 
 */
function rotarDerecha(text,n){
    let move = '';
    let result = '';
    move = text.substring(n%text.length,text.length);
    result = move + text.substring(n%text.length,0);
    return result;
}

console.log(rotarDerecha('12345',8));