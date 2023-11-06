// 1. Intentional Global Variable
var globalVar = "I am a global variable";

function displayGlobalVar() {
    console.log(globalVar); // Outputs: "I am a global variable"
}

displayGlobalVar();

// 2. Accidental Global Variable
function setGlobalAccidentally() {
    accidentalGlobal = "I am accidentally global";  // No 'var' keyword used!
}

setGlobalAccidentally();
console.log(accidentalGlobal); // Outputs: "I am accidentally global"

// 3. Potential Side Effects
function setVariable() {
    someValue = 10;  // Accidentally global
}

function anotherFunction() {
    var someValue = 20;  // Modifying the same global variable
    console.log(someValue);
}

setVariable();
anotherFunction(); // Outputs: 20
console.log(someValue);  // Outputs: 20, not 10 as might be expected
