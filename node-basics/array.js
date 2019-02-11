var grades = [100, 50, 75, 97];
// totalGrade = 0
var totalGrade = 0;

grades.push(89);

// forEach -> add grade to totalGrade
grades.forEach(function(grade) {
    totalGrade += grade;
    console.log('Current total is ' + totalGrade);
});

// totalGrade / total number of grades
console.log('Average is ' + totalGrade / grades.length);