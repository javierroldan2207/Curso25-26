/**
 * 
 * @param {string} text 
 */
function sustituirVocales(text){
    text.replaceAll(' ','');
    let vocals = 'aeiou';
    for(let i = 0; i<text.length; i++){
        if(vocals.includes(text.charAt(i))){
          text = text.replace(text.charAt(i),'*');
        }
    }
    return text;
}
console.log(sustituirVocales('hola'));
console.log(sustituirVocales('buenos dias a todos.'))