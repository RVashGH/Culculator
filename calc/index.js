const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');
const button = document.querySelector('.equals');
const select = document.getElementById('select');
const container = document.querySelector('.container');
const resultDisp = document.getElementById('result');
const copy = document.getElementById('copy');
const errorOne = document.querySelector('.err-one');
const logo = document.getElementById('logo');
const footer = document.querySelector('.footer');
const backButton = document.querySelector('.backbtn');
const desc = document.querySelector('.desc');
const ms = document.getElementById('ms');
const icon = document.getElementById('icon');

let statusXz = "main";

function showResult(result) {
    if (result == "Infinity" || String(result) == "NaN") {
        resultDisp.style.color = "red";
        resultDisp.textContent = "Еррор: " + result;
        
    } else {
        resultDisp.style.color = "black";
        resultDisp.textContent = result;
        
    }
    resultDisp.style.display = "flex";
    copy.style.display = "flex";

    resultDisp.addEventListener('click', function() {
        navigator.clipboard.writeText(resultDisp.textContent);
        copy.textContent = "✔️ скопировано!"
        copy.classList.add('copied');
        // icon.classList.add('copied');
        // icon.style.display = "flex";
        console.log(copy);
        setTimeout(() => {
            copy.textContent = "клик чтобы скопировать";
            copy.classList.remove('copied');
            // icon.classList.remove('copied');
            // icon.style.display = "none";
            console.log(copy);
        }, 5000);
    })

}

function calc() {
    const firstValue = Number(firstInput.value);
    const secondValue = Number(secondInput.value);
    const operation = select.value;
    const metricsys = ms.value;

    if(firstValue == 0 && secondValue == 0) {
        errorOne.classList.add("err-two")
        setTimeout(() => {
            errorOne.classList.remove("err-two")
        }, 2500);
    }

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
        case "power":
            showResult(Math.pow(firstValue, secondValue));
            break;
        case "sqrt":
            let sqrtValueFirst = Math.sqrt(firstValue);
            let sqrtValueSecond = Math.sqrt(secondValue);
            showResult(sqrtValueFirst + " и " + sqrtValueSecond);
            break;
        case "nrt":
            showResult(Math.pow(secondValue, 1/firstValue));
            break;
        case "sqr":
            let sqrValueFirst = Math.pow(firstValue, 2);
            let sqrValueSecond = Math.pow(secondValue, 2);
            showResult(sqrValueFirst + " и " + sqrValueSecond);
            break;
        case "sin":
            if (String(metricsys) == "deg"){
                let sinValueFirstDeg = Math.sin(firstValue * Math.PI / 180);
                let sinValueSecondDeg = Math.sin(secondValue * Math.PI / 180);
                showResult(sinValueFirstDeg + " и " + sinValueSecondDeg);
            }
            else if (String(metricsys) == "rad"){
                let sinValueFirstRad = Math.sin(Math.PI / firstValue);
                let sinValueSecondRad = Math.sin(Math.PI / secondValue);
                showResult(sinValueFirstRad + " и " + sinValueSecondRad);
            }
            break;
        case "cos":
            if (String(metricsys) == "deg"){
                let cosValueFirstDeg = Math.cos(firstValue * Math.PI / 180);
                let cosValueSecondDeg = Math.cos(secondValue * Math.PI / 180);
                showResult(cosValueFirstDeg + " и " + cosValueSecondDeg);
            }
            else if (String(metricsys) == "rad"){
                let cosValueFirstRad = Math.cos(Math.PI / firstValue);
                let cosValueSecondRad = Math.cos(Math.PI / secondValue);
                showResult(cosValueFirstRad + " и " + cosValueSecondRad);
            }
            break;
        case "tg":
            if (String(metricsys) == "deg"){
                let tgValueFirstDeg = Math.tan(firstValue * Math.PI / 180);
                let tgValueSecondDeg = Math.tan(secondValue * Math.PI / 180);
                showResult(tgValueFirstDeg + " и " + tgValueSecondDeg);
            }
            else if (String(metricsys) == "rad"){
                let tgValueFirstRad = Math.tan(Math.PI / firstValue);
                let tgValueSecondRad = Math.tan(Math.PI / secondValue);
                showResult(tgValueFirstRad + " и " + tgValueSecondRad);
            }
            break;
        default:
            return;
    }
}

button.addEventListener('click', calc);

document.addEventListener('keyup', function(event) {
    if (event.key === "Enter" && statusXz == "main") { calc(); };
});

logo.addEventListener('click', function() {
    statusXz = "desc";
    firstInput.style.display = "none";
    secondInput.style.display = "none";
    select.style.display = "none";
    ms.style.display = "none";
    button.style.display = "none";
    footer.style.display = "none";
    resultDisp.style.display = "none";
    copy.style.display = "none";

    backButton.style.display = "flex";
    desc.style.display = "flex";
})

backButton.addEventListener('click', function() {
    statusXz = "main";
    location.reload();
    
})