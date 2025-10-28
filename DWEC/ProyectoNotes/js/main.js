let gradebook = {
    students: [
        { name: "Ana", grades: [8, 7, 9], average: 0 },
        { name: "Luis", grades: [6, 8, 6], average: 0 },
        { name: "Maria", grades: [9, 10, 9], average: 0 }
    ]
};
//Crea un método calculateAverage() que calcule el promedio de las notas de cada estudiante y lo almacene en la propiedad average.
function calcularAverage() {
    let total = 0;
    let result = 0;
    gradebook.students.forEach(student => {
        total = student.grades.reduce((sum, grade) => sum + grade, 0);
        result = total / student.grades.length;
        student.average = result;
    })
}
calcularAverage();

//Crea un método addStudent(name) que añada un nuevo estudiante con un array vacío de notas.

function addStudent(name) {
    gradebook.students.push({ name: name, gardes: [] });
}


//Crea un método addGrade(studentName, grade) que añada una nueva nota al array grades del estudiante especificado.

function addGrade(studentName, grade) {
    let student = gradebook.students.find(student => student.name === studentName);
    if (student) {
        student.grades.push(grade);
    }
}



//Imprimir los nombres de los estudiantes cuya nota promedio sea mayor que 8.
let student = gradebook.students.filter(student => student.average > 8);


//Ordenar los estudiantes en función de sus promedios, de mayor a menor.
let ordenados = gradebook.students.sort((a, b) => b.average - a.average);



const alumName = document.getElementById('name');
const alumNote = document.getElementById('grades');
const alumnAvg = document.getElementById('avg');
const tbody = document.querySelector('tbody');







gradebook.students.forEach(student => {
    addRow(student)
})




function addRow({ name, grades, avg }) {
    //Crea tabla nueva.
    const newRow = document.createElement('tr');
    //Añade nuevo alumno.
    const newAlum = document.createElement('td');
    newAlum.textContent = name;
    //Añade nuevas notas.
    const newNotes = document.createElement('td');
    newNotes.textContent = grades;
    //Añade media de notas.
    const newAvg = document.createElement('td');
    newAvg.textContent = calcularAverage(newNotes);

    //Añadiendo celdas.
    newRow.appendChild(newAlum);
    newRow.appendChild(newNotes);
    newRow.appendChild(newAvg);

    //Añade fila.
    tbody.appendChild(newRow);

}



renderTable(gradebook);
