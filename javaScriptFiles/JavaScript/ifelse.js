//nested if-else

function checkGrade(score){
let grade;

if(score>=90){
    grade = 'A';
} else if(score>=80){
    grade = 'B';
} else if(score>=70){
    grade = 'C';
} else if(score>=60){
    grade = 'D';
} else {
    grade = 'F';
}

console.log(grade);
}

checkGrade(90);