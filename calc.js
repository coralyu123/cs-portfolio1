//calculator
var button = document.getElementById("Button");
var num1 = document.getElementById('box1');
var num2 = document.getElementById('box2');
var answer;
var display = document.getElementById('display');
var sign = document.getElementById("sign");

//starts calculator 
button.addEventListener("click", doMath);

//calculates when clicked
function doMath() {
    //signs for types of calculations that can be done on calculator
    
    if  (sign.value == "+"){
        answer = parseInt(num1.value) + parseInt(num2.value);
        display.innerHTML = answer;
    }
    
      if (sign.value == "-"){
        answer = parseInt(num1.value) - parseInt(num2.value);
        display.innerHTML = answer;
    }
    if (sign.value == "x"){
        answer = parseInt(num1.value) * parseInt(num2.value);
        display.innerHTML = answer;
    }
    if (sign.value == "/"){
        answer = parseInt(num1.value) / parseInt(num2.value);
        display.innerHTML = answer;
    }
    // ^ means the power to a number
    if (sign.value == "^"){
        answer = Math.pow(num1.value, num2.value);
        display.innerHTML = answer;
    }
    // nroot is basically square root
     if (sign.value == "nroot"){
        answer = Math.pow(num1.value, 1 / num2.value);
        display.innerHTML = answer;     
     }
     //modulus finds the remainder of two numbers when divided
    if (sign.value == "%"){
        answer = parseInt(num1.value % num2.value);
        display.innerHTML = answer;
    }
    
    
}
