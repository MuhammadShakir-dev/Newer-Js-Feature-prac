// Lets practice spread with arrays in javascript 

const designation = function(lead,coLead,...remaning){
    console.log("GDSC lead is  : " + lead);
    console.log("GDSC Co Lead is  : " + coLead);
    console.log("Core team members are : " + remaning);
};

designation("Wajid","Muhammad Shakir","Mahfooz","Anum","Shiza","Ammad","Ayesha");


// lets take another exapmle;

const gdsc22 = ["Danella","Mahnoor","Urwa"];
const gdsc23 = ["Wajid","Shakir","Anum"];

const sumUp = ["GDSC 2021 - 2022 Team", ...gdsc22 , "GDSC 2022 - 2023 Team" , ...gdsc23];

console.log(sumUp);

// another one 

const name = ["Muhammad Shakir","helo"];

const breakTheName = [...name];

console.log(...name);
