let students = [];

function addStudent(){

let name = document.getElementById("name").value;
let roll = document.getElementById("roll").value;
let math = Number(document.getElementById("math").value);
let science = Number(document.getElementById("science").value);
let english = Number(document.getElementById("english").value);

let student = {
    name:name,
    roll:roll,
    math:math,
    science:science,
    english:english
};

students.push(student);

alert("Student Added");
}

function displayStudents(){

let output = "";

for(let s of students){

output += `
Name: ${s.name} |
Roll: ${s.roll} |
Math: ${s.math} |
Science: ${s.science} |
English: ${s.english}
<br><br>
`;

}

document.getElementById("output").innerHTML = output;

}

function calculateTotal(){

let output="";

for(let s of students){

let total = s.math + s.science + s.english;

output += `${s.name} Total Marks: ${total} <br>`;
}

document.getElementById("output").innerHTML = output;
}

function calculateAverage(){

let output="";

for(let s of students){

let total = s.math + s.science + s.english;
let avg = total/3;

output += `${s.name} Average: ${avg.toFixed(2)} <br>`;
}

document.getElementById("output").innerHTML = output;
}

function showTopStudents(){

let output="";

for(let s of students){

let avg = (s.math+s.science+s.english)/3;

if(avg>80){

output += `${s.name} Average: ${avg.toFixed(2)} <br>`;

}

}

document.getElementById("output").innerHTML = output;
}

function showFailedStudents(){

let output="";

for(let s of students){

let avg = (s.math+s.science+s.english)/3;

if(avg<40){

output += `${s.name} Average: ${avg.toFixed(2)} <br>`;

}

}

document.getElementById("output").innerHTML = output;
}

function countStudents(){

let count = students.length;

document.getElementById("output").innerHTML = "Total Students: " + count;

}