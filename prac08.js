// let's have a look on parameters destructuring in javascript

const uniDetails = {
    name : "SMIU",
    location : "Karachi",
    certified : "HEC",
    programs : "BS(SE,CS,IT,DATA-SCIENCE,CYBER-SECURITY,AI) & Non BS",
    telNO : 0213471882,
    sector : "Public",
};

function uni(uniDetails){
    const {name,location,sector,telNo} = uniDetails;
    return `${name} ${location} ${sector}`;
};

uni(uniDetails);



