const $buttons = document.querySelectorAll("button");
const $numbers = document.querySelectorAll(".number");
const $operators = document.querySelectorAll(".operator");
const $clear = document.querySelectorAll(".clear");
const $equal = document.querySelectorAll(".equal-sign");

var calculation = [];
// console.log(calculation.length);
// console.dir($numbers);

$numbers.forEach(number => {
    number.addEventListener("click", function pushNumber(event){
        alert(event.target.value);
        calculation.push(event.target.value);
    });
});


$operators.forEach(operator => {
    operator.addEventListener("click", function pushOperator(event){
        alert(event.target.value);
        calculation.push(event.target.value);
    });
});

$clear.forEach(clear => {
    clear.addEventListener("click", function clear(event){
        alert(event.target.value);
    });
})

$equal.forEach(equal => {
    equal.addEventListener("click", function calculate(event){
        alert(event.target.value);
    });
});

//if a number button is clicked, then the value of that number needs to be added to the array;

