const display = document.querySelector("#display");

const reset = document.querySelector(".reset");
const delet = document.querySelector(".delet");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

const addition = document.querySelector("#addition");
const substraction = document.querySelector("#substraction");
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const comma = document.querySelector("#comma");

const enter = document.querySelector("#enter");

let operation = 0;
let userEnter = "";

let userEnterInt = 0;

let isAddition = false;
let isSubstraction = false;
let isDivision = false;
let isMultiplication = false;

let isDelet = false;

function caractersNumber() {
    if (userEnter.length >= 19) {
        display.textContent = "over";
        userEnter = "";
    }
}
function userEnterIsNull() {
    if (userEnter === "") {
        display.textContent = "0";
    }
}
function resetWithoutButton() {
    if (!isAddition && !isDivision && !isMultiplication && !isSubstraction) {
        operation = 0;
    } else if (!isAddition && !isDivision && !isMultiplication && !isSubstraction && delet) {
        operation = 0;
    }
}

delet.addEventListener("click", () => {
    userEnter = userEnter.slice(0, -1);
    if (userEnter != "") {
        display.textContent = userEnter;
    } else {
        userEnterIsNull()
    }
    isDelet = true;
    resetWithoutButton();
})

reset.addEventListener("click", () => {
    operation = "0";
    userEnter = "";
    userEnterIsNull()
})

one.addEventListener("click", () => {
    userEnter = userEnter + "1";
    display.textContent = userEnter;
    caractersNumber();
    resetWithoutButton();
})
two.addEventListener("click", () => {
    userEnter = userEnter + "2";
    display.textContent = userEnter;
    caractersNumber();
    resetWithoutButton();

})
three.addEventListener("click", () => {
    userEnter = userEnter + "3";
    display.textContent = userEnter;
    caractersNumber();
    resetWithoutButton();

})
four.addEventListener("click", () => {
    userEnter = userEnter + "4";
    display.textContent = userEnter;
    caractersNumber();
    resetWithoutButton();

})
five.addEventListener("click", () => {
    userEnter = userEnter + "5";
    display.textContent = userEnter;
    caractersNumber();
    resetWithoutButton();

})
six.addEventListener("click", () => {
    userEnter = userEnter + "6";
    display.textContent = userEnter;
    caractersNumber();
    resetWithoutButton();

})
seven.addEventListener("click", () => {
    userEnter = userEnter + "7";
    display.textContent = userEnter;
    caractersNumber();
    resetWithoutButton();

})
eight.addEventListener("click", () => {
    userEnter = userEnter + "8";
    display.textContent = userEnter;
    caractersNumber();
    resetWithoutButton();

})
nine.addEventListener("click", () => {
    userEnter = userEnter + "9";
    display.textContent = userEnter;
    caractersNumber();
    resetWithoutButton();

})
zero.addEventListener("click", () => {
    userEnter = userEnter + "0";
    display.textContent = userEnter;
    caractersNumber();
    resetWithoutButton();

})
addition.addEventListener("click", () => {

    if (operation != 0) {
        if (isAddition) {
            operation = operation + parseFloat(userEnter);
        } else if (isSubstraction) {
            operation = operation - parseFloat(userEnter);
        } else if (isDivision) {
            operation = operation / parseFloat(userEnter);
        } else if (isMultiplication) {
            operation = operation * parseFloat(userEnter);
        }

    } else {
        operation = parseFloat(userEnter);

    }
    isAddition = true;
    isSubstraction = false;
    isDivision = false;
    isMultiplication = false;
    isDelet = false;
    userEnter = "";
    display.textContent = userEnter;
    userEnterIsNull();

    caractersNumber();
})
multiplication.addEventListener("click", () => {

    if (operation != 0) {
        if (isAddition) {
            operation = operation + parseFloat(userEnter);
        } else if (isSubstraction) {
            operation = operation - parseFloat(userEnter);
        } else if (isDivision) {
            operation = operation / parseFloat(userEnter);
        } else if (isMultiplication) {
            operation = operation * parseFloat(userEnter);
        }

    } else {
        operation = parseFloat(userEnter);

    }
    isAddition = false;
    isSubstraction = false;
    isDivision = false;
    isMultiplication = true;
    userEnter = "";
    display.textContent = userEnter;
    userEnterIsNull();

    caractersNumber();
})
substraction.addEventListener("click", () => {

    if (operation != 0) {
        if (isAddition) {
            operation = operation + parseFloat(userEnter);
        } else if (isSubstraction) {
            operation = operation - parseFloat(userEnter);
        } else if (isDivision) {
            operation = operation / parseFloat(userEnter);
        } else if (isMultiplication) {
            operation = operation * parseFloat(userEnter);
        }

    } else {
        operation = parseFloat(userEnter);

    }
    isAddition = false;
    isSubstraction = true;
    isDivision = false;
    isMultiplication = false;
    userEnter = "";
    display.textContent = userEnter;
    userEnterIsNull();

    caractersNumber();
})
division.addEventListener("click", () => {

    if (operation != 0) {
        if (isAddition) {
            operation = operation + parseFloat(userEnter);
        } else if (isSubstraction) {
            operation = operation - parseFloat(userEnter);
        } else if (isDivision) {
            operation = operation / parseFloat(userEnter);
        } else if (isMultiplication) {
            operation = operation * parseFloat(userEnter);
        }

    } else {
        operation = parseFloat(userEnter);

    }
    isAddition = false;
    isSubstraction = false;
    isDivision = true;
    isMultiplication = false;
    userEnter = "";
    display.textContent = userEnter;
    userEnterIsNull();

    caractersNumber();
})

enter.addEventListener("click", () => {
    if (isAddition) {
        operation = operation + parseFloat(userEnter);
    } else if (isSubstraction) {
        operation = operation - parseFloat(userEnter);
    } else if (isDivision) {
        operation = operation / parseFloat(userEnter);
    } else if (isMultiplication) {
        operation = operation * parseFloat(userEnter);
    }
    isAddition = false;
    isSubstraction = false;
    isDivision = false;
    isMultiplication = false;

    userEnter = "";
    display.textContent = operation;

    console.log(operation);

})




