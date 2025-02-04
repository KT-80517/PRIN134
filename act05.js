let Grades = [88, 86, 91, 94, 89, 75, 89, 95, 96, 83];
let sum = 0;

function gradeAverage() {
    let average = 0; 
    for (let i = 0; i < Grades.length; i++) {
        sum += Grades[i];
    }
    average = sum / Grades.length;
    return average; 
}

function letterGrade(average) {
    if (average >= 90) {
        return `Grade Average: ${average} Your Rating: A. You Passed`;
    } else if (average >= 80) {
        return `Grade Average: ${average} Your Rating: B. You Passed`;
    } else if (average >= 70) {
        return `Grade Average: ${average} Your Rating: C. You Passed`;
    } else if (average >= 60) {
        return `Grade Average: ${average} Your Rating: D. You Passed`;
    } else {
        return `Grade Average: ${average} Your Rating: F. You Failed`;
    }
}

let average = gradeAverage(); 
console.log(letterGrade(average));