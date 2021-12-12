const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
const nextButton = document.querySelector("#next-btn");
const afterNext = document.querySelector("#after-next");
const tableSection = document.querySelector(".table-section");
const closeButton = document.querySelector("#close-btn");
const App = document.querySelector(".flex")
var rootStyle = document.querySelector(':root');
// const colorPicker = document.querySelector("#color-picker")

billAmount.addEventListener("keydown", () => {
    nextButton.style.display = "block";
});

// colorPicker.addEventListener("input", (e) => {
//     rootStyle.style.setProperty('--secondary-color', `${e.target.value}`);
// })


cashGiven.addEventListener("keydown", () => {
    checkButton.style.display = "block";
});

nextButton.addEventListener("click", () => {
    if (Number(billAmount.value) >= 1) {
        afterNext.style.display = `flex`;
        message.style.display = "none";
        nextButton.style.display = "none";
    } else {
        afterNext.style.display = `none`;
        showMessage("Enter a valid amount ");
    }
});

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();

    let cashGivenValue = Number(cashGiven.value);
    let billAmountValue = Number(billAmount.value);

    if (billAmountValue > 0) {
        if (cashGivenValue > billAmountValue) {
            const amountToBeReturned = cashGivenValue - billAmountValue;
            calculateChange(amountToBeReturned);
            tableSection.style.display = `block`;
            tableSection.style.filter = `none`;
            App.style.filter = "blur(5px)"
        } else if (cashGivenValue <= 0) {
            tableSection.style.display = `none`;
            showMessage("enter valid input");
        } else if (cashGivenValue < billAmountValue) {
            tableSection.style.display = `none`;
            showMessage("do you wanna wash the plates?");
        } else if (billAmountValue === cashGivenValue) {
            showMessage("No Need To Return Anything!");
        }
    } else {
        showMessage("Entered amount is invalid");
    }
});

closeButton.addEventListener("click", () => {
    billAmount.value = "";
    cashGiven.value = "";
    afterNext.style.display = `none`;
    App.style.filter = "none";
    nextButton.style.display = "block";
    tableSection.style.display = `none`;
    nextButton.style.display = "none";
})



function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        tableSection.style.display = `block`;
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