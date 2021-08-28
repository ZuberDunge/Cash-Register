const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();

let cashGivenValue = Number(cashGiven.value);
let billAmountValue = Number(billAmount.value);
     
    if (billAmountValue > 0) {

                if (cashGivenValue >= billAmountValue) {
                    const amountToBeReturned = cashGivenValue - billAmountValue;
                    calculateChange(amountToBeReturned);
                } else {
                    showMessage("do you wanna wash the plates?");
                }

    } else {
        showMessage("Entered amount is invalid");
    }
}); 

function calculateChange(amountToBeReturned) {

    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc( amountToBeReturned / availableNotes[i]
        );
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
};


function hideMessage() {
    message.style.display = "none";
};

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
};