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
addStudent("Juan");

//Crea un método addGrade(studentName, grade) que añada una nueva nota al array grades del estudiante especificado.

function addGrade(studentName, grade) {
    let student = gradebook.students.find(student =>  student.name === studentName );
    if (student) {
        student.grades.push(grade);
    }
}
addGrade("Maria", 7);


//Imprimir los nombres de los estudiantes cuya nota promedio sea mayor que 8.
let student = gradebook.students.filter(student => student.average > 8);
console.log(student.name);