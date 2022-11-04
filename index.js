const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll("#no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click",  function validateBillAmount(){
    hideMessage()
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value ){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateAmountToBeReturned(amountToBeReturned)
        }else{
            showMessage("we have job in the kitchen")
        }


    }else{
        showMessage("Invalid bill amount") 
    }

});

function calculateAmountToBeReturned(amountToBeReturned){
    for(let i =0; i < availableNotes.length; i++){

        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[0]);   // no of notes need for the denomination

        amountToBeReturned = amountToBeReturned % availableNotes;  // amount left after calculating the number of notes needed

        noOfNotes[i].innerText = numberOfNotes;   // updating the no of notes in the table for the current amount            
    }
}
function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg
}
function hideMessage(){
    message.style.display = "none";
}




 