const $buttons = document.querySelectorAll("button");
const $numbers = document.querySelectorAll(".number");
const $operators = document.querySelectorAll(".operator");
const $clear = document.querySelectorAll(".clear");
const $equalSign = document.querySelectorAll(".equal-sign");
const $display = document.querySelector(".calculator-screen");

const calculation = [];

$numbers.forEach(number => {
    number.addEventListener("click", function pushNumber(event){
        $display.value = event.target.value; //displays number clicked
        calculation.push(event.target.value);
    });
});


$operators.forEach(operator => {
    operator.addEventListener("click", function pushOperator(event){
        $display.value = event.target.value; //displays operator 
        calculation.push(event.target.value);
        
    });
});

$equalSign.forEach (equal => {
    equal.addEventListener("click", function calculate(event){
        // alert(event.target.value);
        let num1 = '', num2 = '', operator = null, result;
        const operators = ['*', '/', '+', '-','=']
        for(let i = 0; i < calculation.length; i++) {
            const char = calculation[i];
            if(operators.includes(char)){
                operator = char;
            } else if(!operator) {
                num1 += char;
            } else {
                num2 += char;
            }
        };
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    if(operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    };
   const totalResult = result;

   document.querySelector(".calculator-screen").value = totalResult;
    });
});

    
// $clear.forEach(clear => {
//     clear.addEventListener("click", function clear(event){
//         alert(event.target.value);
//     });
// })

//if button click is a number, then change from string to number and join if necessary
//if button click is operator, then register it as its mathematical function
//if button click is equals, then complete the mathematical solution and alert