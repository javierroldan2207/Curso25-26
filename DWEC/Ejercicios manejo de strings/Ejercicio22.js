function firtsWord(string){
    let space = string.indexOf(" ");
    return space === -1 ? string : string.slice(0,space);
}
console.log(firtsWord("Holaamor buenas tardes."));