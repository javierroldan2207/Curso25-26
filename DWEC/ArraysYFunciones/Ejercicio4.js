let alumnos = [
  {nombre:'Ana', nota:7.5, curso:'DAW'},
  {nombre:'Luis', nota:4.5, curso:'DAW'},
  {nombre:'María', nota:9.0, curso:'DAW'},
  {nombre:'Pedro', nota:6.0, curso:'DAM'},
  {nombre:'Lucía', nota:8.5, curso:'DAM'}
]

///1. Obtén con filter solo los del curso DAW.
let cursoDaw = alumnos.filter(alumno => alumno.curso == 'DAW');
console.log(cursoDaw);

 //2. Usa map para quedarte con los nombres de los aprobados (nota≥5).
let aprobados = alumnos.filter(alumno => alumno.nota >= 5).map(alumno => alumno.nombre);
console.log(aprobados);

//3. Con reduce, calcula la media de notas de DAM.
let alumnosDam = alumnos.filter(alumno => alumno.curso == 'DAM');
let mediaNota = alumnosDam.reduce((total,alumno) => total + alumno.nota,0)/alumnosDam.length;
console.log(mediaNota);

//4. Con find, busca al alumno llamado ‘María’.
let buscaPorNombre = alumnos.find(alumno => alumno.nombre == 'María');
console.log(buscaPorNombre);

//5. Con findIndex, obtén la posición del primer suspenso.
let suspensoIndex = alumnos.findIndex(alumno => alumno.nota < 5);
console.log(suspensoIndex);

//6. Con sort, ordena los alumnos por nota descendente.
let ordenadosPorNota = alumnos.sort((a,b) => b.nota - a.nota);
console.log(ordenadosPorNota);

//7. Crea una función que reciba un array de alumnos y devuelva un objeto con {aprobados:x, suspensos:y}.

function notas(alumnos){
    let aprobados = alumnos.filter(alumno => alumno.nota >= 5);
    let suspenso = alumnos.filter(alumno => alumno.nota < 5);

    return {aprobados: aprobados.length, suspensos: suspenso.length};
}
console.log(notas(alumnos));
