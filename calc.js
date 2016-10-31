//calculator
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

//button that starts calculator
button.addEventListener("click", doMath);

//starts working when clicked
function doMath() {
    //signs for different types of calculating it can do
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "^"){
        answer = Math.pow(input1.value, input2.value);
        display.innerHTML = answer;
    }
  if (dropdown.value == "nroot"){
        answer = Math.pow(input1.value, 1 / input2.value);
        display.innerHTML = answer;     
    }
}
