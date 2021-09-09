const $buttons = document.querySelectorAll("button");
const $numbers = document.querySelectorAll(".number");
const $operators = document.querySelectorAll(".operator");
const $clear = document.querySelectorAll(".clear");
const $equal = document.querySelectorAll(".equal-sign");

const calculation = [];
// console.log(calculation.length);
// console.dir($numbers);

$numbers.forEach(number => {
    number.addEventListener("click", function pushNumber(event){
        console.log(event.target.value);
        calculation.push(event.target.value);
    });
});


$operators.forEach(operator => {
    operator.addEventListener("click", function pushOperator(event){
        console.log(event.target.value);
        calculation.push(event.target.value);
    });
});

// $clear.forEach(clear => {
//     clear.addEventListener("click", function clear(event){
//         alert(event.target.value);
//     });
// })

$equal.forEach(equal => {
    equal.addEventListener("click", function calculate(event){
        // alert(event.target.value);
        let num1 = '', num2 = '', operator = null, result;
        const operators = ['*', '/', '+', '-']
        for(let i = 0; i < calculation.length; i++) {
            const char = calculation[i];
            if(operators.includes(char)){
                operator = char;
            } else if(!operator) {
                num1 += char;
            } else {
                num2 += char;
            }
        }
    
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
    
    });
});


    
    // switch (operator) [
    //     case '+':
    //         return (num1 + num2);
    //         break;
    //     case '-':
    //         return (num1 - num2);
    //         break;
    //     case '*' 
    //         return (num1 * num2);
    //         break;
    //     case '/':
    //         return (num1 / num2);
    //         break;
    //     default:
    //         return = 'Error';
    // ]
    // };
    





//currently can get to something like ['90+10='] - have to figure out how to split up the string between numbers and operators then use switch to cycle through the mathematial functions


//if button click is a number, then change from string to number and join if necessary
//if button click is operator, then register it as its mathematical function
//if button click is equals, then complete the mathematical solution and alert