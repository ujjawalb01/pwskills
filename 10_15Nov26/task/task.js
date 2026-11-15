let studentName = "MarK Robber";
let age = 24;

let mathMarks = 65;
const scienceMarks = 70;
const englishMarks = 80;

const bonusMarks = 5;
const totalSubjectMarks = 300;



function totalMarks(mathMarks, scienceMarks, englishMarks) {
    return mathMarks + scienceMarks + englishMarks;
}

function percentage(total) {
    return (total / totalSubjectMarks) * 100;
}

let originalTotal = totalMarks(mathMarks, scienceMarks, englishMarks);
let originalPercentage = percentage(originalTotal);

mathMarks += bonusMarks;

let updatedTotal = totalMarks(mathMarks, scienceMarks, englishMarks);
let updatedPercentage = percentage(updatedTotal);


let grade;

if (updatedPercentage >= 90) {
    grade = "A+";
}
else if (updatedPercentage >= 75) {
    grade = "A";
}
else if (updatedPercentage >= 60) {
    grade = "B";
}
else if (updatedPercentage >= 40) {
    grade = "C";
}
else {
    grade = "Fail";
}


let result;

if (mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40) {
    result = "Pass";
}
else {
    result = "Fail";
}


if (mathMarks > 90) {
    console.log("Maths: Excellent Score!");
}
else {
    console.log("Maths: Score is not above 90.");
}

if (mathMarks < 35 || scienceMarks < 35 || englishMarks < 35) {
    console.log("Warning: Scored below 35 in a subject.");
}
else {
    console.log("No subject below 35.");
}

if (updatedPercentage >= 90) {
    console.log("Excellent Performance");
}

if (updatedPercentage < 40) {
    console.log("Needs Improvement");
}

console.log("STUDENT RESULT REPORT");

console.log("Student Name: " + studentName);
console.log("Age: " + age);

console.log("Maths: " + mathMarks);
console.log("Science: " + scienceMarks);
console.log("English: " + englishMarks);

console.log("Bonus Marks in Maths: " + bonusMarks);

console.log("Total Marks: " + updatedTotal);
console.log("Percentage: " + updatedPercentage.toFixed(2) + "%");

console.log("Grade: " + grade);
console.log("Final Result: " + result);
