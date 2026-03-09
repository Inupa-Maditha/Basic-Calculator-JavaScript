let arrayIndex = 0;
let operationArray = [];
let isClickedOperator = false;
let isSubmitNumber = false;
let answer = document.getElementById("answer");
let question = document.getElementById("question");
let sum = document.getElementById("addBtn").innerText;
let sub = document.getElementById("substractBtn").innerText;;
let mul = document.getElementById("multiplicationBtn").innerText;;
let div = document.getElementById("divideBtn").innerText;;

function operator(operator) {

    isSubmitNumber = false;

    if (isClickedOperator) {
        arrayIndex--;
    }

    if (operator.value == 'sum') {
        operationArray[arrayIndex] = sum;
    } else if (operator.value == 'sub') {
        operationArray[arrayIndex] = sub;
    } else if (operator.value == 'mul' && arrayIndex != 0) {
        operationArray[arrayIndex] = mul;
    } else if (operator.value == 'div' && arrayIndex != 0) {
        operationArray[arrayIndex] = div;
    }

    displayOperation();
    arrayIndex++;
    isClickedOperator = true;

}

function getUserInputNumber() {

    let value = document.getElementById("numberField").value;

    if (!value == '') {

        isClickedOperator = false;

        if (arrayIndex == 0) {
            operationArray[arrayIndex] = sum;
            arrayIndex++;
            displayOperation();
        }
        if (isSubmitNumber) {
            arrayIndex--;
            operationArray[arrayIndex] += value;
        } else {
            operationArray[arrayIndex] = value;
            isSubmitNumber = true;
        }

        arrayIndex++;
        displayOperation();
        document.getElementById("numberField").value = '';

    }
}

function deleteLastInput() {
    if (operationArray.length > 0) {

        operationArray.length--;
        arrayIndex--;

    }

    if (arrayIndex % 2 == 0) {
        isSubmitNumber = true;
        isClickedOperator = false;
    } else {
        isSubmitNumber = false;
        isClickedOperator = true;
    }

    displayOperation();

}

function clearInputs() {
    arrayIndex = 0;
    operationArray.length = 0;
    isClickedOperator = false;
    isSubmitNumber = true;

    displayOperation();
}

function displayOperation() {
    console.log(operationArray);
    question.innerText = '';
    for (let i = 0; i < operationArray.length; i++) {
        question.innerText += operationArray[i];
    }
}