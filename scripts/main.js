const $buttons = document.querySelectorAll("button");
const $numbers = document.querySelectorAll(".number");
const $operator = document.querySelectorAll(".operator");

// console.dir($numbers);

//  function pushNumber() {
//     let message = ($numbers);
//     alert(message);
//  };

$numbers.forEach(function(number) {
    number.addEventListener("click", function() {
        console.log("ticked it.");
    });
    // $numbers.addEventListener = ("click", function(){
    //     alert("ticked it.");
    // })
});

// $numbers.addEventListener = ("click", function(){
//     alert("Ticked It");
// });

// array.values($numbers);
// console.dir($numbers);
