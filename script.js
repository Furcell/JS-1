"use strict";

// დავალება-1
let number1 = 100;
console.log(number1);

if (number1 < 50) {
    console.log("ნაკლებია 50-ზე");
} else if ( number1 > 20){
    console.log("მეტია 20-ზე");
} else {
    console.log("შეცდომა");
}

// ? -ternary operator 
let conditionNumber = number1 < 50 ? "ნაკლებია 50-ზე" : number1 >20 ? "მეტია 20-ზე" : "შეცდომა";
console.log(conditionNumber);


// დავალება-2
let name1 = "მარიამი"
console.log(name1);

if (name1 = "მარიამი") {
    console.log("true");
} else {
    console.log("false");
}

// ? -ternary operator 
let conditionName = name1 == "მარიამი" ? "true" : "false"
console.log(conditionName);


//  დავალება-3
let Name2 = "მარიამი" ;

switch (Name2) {
    case "მარიამი" :
    console.log ("true");
    break;
    default:
    console.log("false");
}
