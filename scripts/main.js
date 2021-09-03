const $buttons = document.querySelectorAll("button");
const $numbers = document.querySelectorAll(".number");
const $operators = document.querySelectorAll(".operator");
const $clear = document.querySelectorAll(".clear");
const $equals = document.querySelectorAll(".equal-sign");



// console.dir($numbers);

//  function pushNumber() {
//     let message = ($numbers);
//     alert(message);
//  };

$numbers.forEach(function(number) {
    number.addEventListener("click", function() {
        alert($numbers);
    });
});


$operators.forEach(function(operator) {
    operator.addEventListener("click", function() {
        alert($operators);
    });
});

$clear.forEach(function(clear){
    clear.addEventListener("click", function(){
        alert("C");
    });
})

$equals.forEach(function(equal){
    equal.addEventListener("click", function(){
        alert("=");
    });
});

