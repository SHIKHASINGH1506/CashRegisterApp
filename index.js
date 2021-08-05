const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const changeTable = document.querySelector(".table-container");
const nextButton = document.querySelector("#next-button");
const cashGivenInput = document.querySelector(".cashGivenInput");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", validateBillAndCashAmount);
nextButton.addEventListener("click", validateBillAmount);

function validateBillAmount(){
    if(billAmount.value<=0){
        showMessage("Enter valid bill amount");
    }
    else{
        nextButton.style.display = "none";
        showFields();
        hideMessage();
    }
}

function validateBillAndCashAmount(){
    hideMessage();
    if(billAmount.value>0){
        if(+cashGiven.value >= +billAmount.value){
            showTable();
            calculateReturnAmount(cashGiven.value - billAmount.value);    
        }
        else{
            showMessage("Cash is less than bill, please enter right amount");
            hideTable();
        }
    }
    else{
        showMessage("You must enter a valid bill amount");
    }
}

function calculateReturnAmount(returnAmount){
    console.log(returnAmount);
    for(var i=0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(returnAmount / availableNotes[i]);
        if(numberOfNotes!=0){
            noOfNotes[i].innerText = numberOfNotes;
        }
        returnAmount %= availableNotes[i];
    }
}

function showTable(){
    changeTable.style.display = "block";
}

function hideTable(){
    changeTable.style.display = "none";
}

function showFields(){
    cashGivenInput.style.display="block";    
}

function hideMessage(){
    errorMessage.style.display = "none";
}

function showMessage(message){
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}

