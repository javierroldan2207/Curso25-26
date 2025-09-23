/**
 * 
 * @param {string} string 
 * @param {number} move
 */

function cifradoCesar(string ,move){
    let result = '';
    let char = '';
    for(let i = 0; i<string.length; i++){
        char = string[i].charCodeAt()+move
        result += String.fromCharCode(char);
    }
    return result;
}

console.log(cifradoCesar('abc',2));