let phrases = [
  { phrase: "Hyper Text Markup Language" },
  { phrase: "Cascading Style Sheets" },
  { phrase: "Object Oriented Programming" }
];

//Crea una función que genere el acrónimo para cada frase y lo añada como una nueva propiedad acronym en cada objeto.
function generarAcronimo(){
    phrases.forEach (item => {  
        let words = item.phrase.split(" ");
        let acronym = words.map(word => word.charAt(0).toUpperCase()).join("");
        item.acronym = acronym;
    }
)}

generarAcronimo(phrases);

//Utiliza map() para devolver un array de objetos con los acrónimos ya generados.
let acronyms = phrases.map(item => ({ phrase: item.phrase, acronym: item.acronym }));
console.log(acronyms);

//Filtra las frases que contengan más de tres palabras y devuelve solo esas frases con su acrónimo.
let filteredPhrases = phrases.filter(item => item.phrase.split(" ").length > 3);

