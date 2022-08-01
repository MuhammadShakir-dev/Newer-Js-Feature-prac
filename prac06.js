// lets practice some destructing arrys in javascript.

const score = [77,21,56,48,63];
const [highScore,lowScore] = score;
console.log("High score is : " + highScore);
console.log("Low score is : " + lowScore);


// let's have a look on the perivous method of doing this.

const score = [77,21,56,48,63];
const highScore = score[0];
const lowScore = score[1];
console.log(score);
console.log("High score : " + highScore);
console.log("Low score  : " + lowScore);



//let's try with Math.max() and Math.min()

const score = [90,32,78,62,10,70,28,9];
const highScore = Math.max(...score);
const lowScore = Math.min(...score);
console.log("High score : " + highScore);
console.log("Low score  : " + lowScore);


// let's take another exapmle.

const rollNo = [77,31,78,108,107];
const [Shakir,Anum,...remaning] = rollNo;
console.log("Shakir roll no is  : " + Shakir);
console.log("Anum roll no is  : " + Anum);
console.log("Remaning Roll no are : " + remaning);



