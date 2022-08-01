// lets practice some spread in objects in javascript .

const studentInfo = {
    name : "Muhammad Shakir",
    age : 21,
    gender : "Male",
    status : "Student",
};

const acadamicDetails = {
    university : "SMIU",
    semester : 5,
    gpa : 3.2, 
};

const residence = {
    city : "Karachi",
    country : "Pakistan",
};


const merjAllData = {...studentInfo, ...acadamicDetails, ...residence};

console.log(merjAllData);
