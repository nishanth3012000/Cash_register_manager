const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

addEventListener.checkButton("click", function validateBillAmount(){
    if(billAmount.value > 0){


    }else{
        message.innerText = "The bill amount should be greater than 0";
    }

});



 