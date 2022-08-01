// lets paractice some default parameters in javascript and what is the new methods ot syntax to do this.


// Example no 1
const fullName  =  function(firstname  = "Muhammad", lastname = "Ali"){
    return console.log("Hi!" + " " + firstname + " " + lastname)
}

fullName("Muhammad","Shakir");


// Example no 2
const rollDice  = function(start = 6){
    return Math.floor(Math.random() * start) + 1;
} 

rollDice();


// Example no 3.



