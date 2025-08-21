let students = [
  { name: "John", rollNo: 1, marks: 85 },
  { name: "Jane", rollNo: 2, marks: 90 },
  { name: "Jim", rollNo: 3, marks: 78 },
  { name: "Jill", rollNo: 4, marks: 88 },
  { name: "Jack", rollNo: 5, marks: 92 },
  { name: "Jenny", rollNo: 6, marks: 95 },
  { name: "Joe", rollNo: 7, marks: 40 },
  { name: "Aess", rollNo: 8, marks: 87 },
  { name: "Bordan", rollNo: 9, marks: 91 },
  { name: "Jasmine", rollNo: 10, marks: 50 },
  { name: "Jake", rollNo: 11, marks: 84 },
  { name: "Julia", rollNo: 12, marks: 93 },
  { name: "Jared", rollNo: 13, marks: 82 },
  { name: "Jenna", rollNo: 14, marks: 75 },
  { name: "Jorge", rollNo: 15, marks: 81 },
  { name: "Jade", rollNo: 16, marks: 30 },
  { name: "yasmine", rollNo: 17, marks: 86 },
  { name: "Javier", rollNo: 18, marks: 83 },
  { name: "Jocelyn", rollNo: 19, marks: 97 },
  { name: "Saxon", rollNo: 20, marks: 79 },
];

let number_of_students = students.length;

if (number_of_students == 0) {
  console.log("No students found. Please add data first!");
} else {
  console.log("Total number of students:", number_of_students);
}

let random_index = Math.floor(Math.random() * number_of_students);
let random_student = students[random_index];
console.log("Randomly selected student:", random_student.name);
console.log("Randomly selected student dtails:", random_student);

let grade="F";
if (random_student.marks >= 90) {
  grade="A";
} else if (random_student.marks >= 75) {
  grade="B";
} else if (random_student.marks >= 50) {
  grade="C";
} else {
  grade="F";
}

console.log(`Student ${random_student.name} (Roll No: ${random_student.rollNo}) \n Marks: ${random_student.marks} -> Grade: ${grade}`);