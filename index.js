const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll("#no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click",  function validateBillAmount(){
    if(billAmount.value > 0){
        if(billAmount.value < cashGiven.value ){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateAmountToBeReturned(amountToBeReturned)
        }else{
            message.innerText ="we have job in the kitchen"
        }


    }else{
        message.innerText = "The bill amount should be greater than 0";
    }

});

function calculateAmountToBeReturned{


}



 