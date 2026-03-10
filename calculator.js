let arrayIndex = 0;
let operationArray = [];
let total = 0;
let subtotal = '';
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
    answer.innerText = '';

    displayOperation();
}

function equal() {

    total = 0;
    subtotal = '';

    if (operationArray.length % 2 != 0) {
        operationArray.length--;
        displayOperation();
    }

    console.log('Final Array : ' + operationArray);

    for (let i = 0; i < operationArray.length; i += 2) {

        if (operationArray[i] == sum) {

            if (operationArray[i + 2] != mul && operationArray[i + 2] != div) {
                total += Number(operationArray[i + 1]);

            } else if (operationArray[i + 2] == mul || operationArray[i + 2] == div) {
                subtotal = Number(operationArray[i + 1]);

                for (let j = i + 2; operationArray[j] == mul || operationArray[j] == div; j += 2) {
                    if (operationArray[j] == mul) {
                        subtotal *= Number(operationArray[j + 1]);
                    } else if (operationArray[j] == div) {
                        subtotal /= Number(operationArray[j + 1]);
                    }
                }
                total += subtotal;
            }

        } else if (operationArray[i] == sub) {

            if (operationArray[i + 2] != mul && operationArray[i + 2] != div) {
                total -= Number(operationArray[i + 1]);

            } else if (operationArray[i + 2] == mul || operationArray[i + 2] == div) {
                subtotal = Number(operationArray[i + 1]);

                for (let j = i + 2; operationArray[j] == mul || operationArray[j] == div; j += 2) {
                    if (operationArray[j] == mul) {
                        subtotal *= Number(operationArray[j + 1]);
                    } else if (operationArray[j] == div) {
                        subtotal /= Number(operationArray[j + 1]);
                    }
                }
                total -= subtotal;
            }
        }

    }
    displayAnswer();
}

function displayOperation() {
    console.log(operationArray);
    question.innerText = '';
    for (let i = 0; i < operationArray.length; i++) {
        question.innerText += operationArray[i];
    }
}

function displayAnswer() {
    answer.innerText = total;
    console.log('Answer : ' + total);
}