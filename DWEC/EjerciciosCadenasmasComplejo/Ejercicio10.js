
/**
 * 
 * @param {string} string1 
 * @param {string} string2 
 * @returns 
 */
function intercalar(string1, string2) {
    let result = '';
    let size = 0;
    if (string1.length < string2.length) {
        size = string2.length;
    } else {
        size = string1.length;
    }
    for (let i = 0; i < size; i++) {
        if (i < string1.length) {
            result += string1.charAt(i);
        }
        if(i < string2.length){
            result += string2.charAt(i);
        }
    }
    return result;
}

console.log(intercalar('hola', 'adios'));