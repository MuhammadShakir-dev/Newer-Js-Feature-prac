// spread in function .

const ary = [10,90,89,67,56,45,786,564,987,765,654,987,253];

console.log(ary);

const max = Math.max(...ary);
console.log("The maximum number is  : " + max);

const min = Math.min(...ary);
console.log("The Minimum number is  :  " +  min);
