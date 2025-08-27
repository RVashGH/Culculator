const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');
const button = document.querySelector('.equals');
const select = document.getElementById('select');
const container = document.querySelector('.container');
const resultDisp = document.getElementById('result');
const copy = document.querySelector('.copy');

function showResult(result) {
    if (result == "Infinity") {
        resultDisp.style.color = "red";
        resultDisp.textContent = "Ерор";
        
    } else {
        resultDisp.style.color = "black";
        resultDisp.textContent = result;
        
    }
    resultDisp.style.display = "flex";

    copy.style.display = "flex";

    copy.addEventListener('click', function() {
        navigator.clipboard.writeText(resultDisp.textContent);
    })
}

function calc() {
    const firstValue = Number(firstInput.value);
    const secondValue = Number(secondInput.value);
    const operation = select.value;

    let result = 0;

    switch(operation) {
        case "add":
            showResult(firstValue + secondValue);
            break;
        case "subtract":
            showResult(firstValue - secondValue);
            break;
        case "multiply":
            showResult(firstValue * secondValue);
            break;
        case "divide":
            showResult(firstValue / secondValue);
            break;
        default:
            return;
    }
}

button.addEventListener('click', calc);

document.addEventListener('keyup', function(event) {
    if (event.key === "Enter") { calc(); };
});