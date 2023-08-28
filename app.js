const cardOwner = document.getElementById("owner-name");
const cardNumber = document.getElementById("card-num");
const expMonth = document.getElementById("month");
const expYear = document.getElementById("year");
const cvc = document.getElementById("cvc-num");

const from = document.getElementById("form");
const printedOwnerName = document.getElementById("printed-owner");

cardOwner.addEventListener("input", function cardNameValidation() {
  inputFieldVlue = cardOwner.value;
  const onlyLettersRegex = /^[A-Za-z]+$/;

  if (cardOwner.value == "") {
    cardOwner.style.borderColor = "red";
    setErrorMessage("Can't be blank.")
  }if (!onlyLettersRegex.test(inputFieldVlue)) {
    cardOwner.style.borderColor = "red";
    setErrorMessage("Wrong format")
  } else {
    cardOwner.style.borderColor = "green";
    printedOwnerName.textContent = inputFieldVlue;
    setSuccess()
  }
});

cardNumber.addEventListener("input", function cardNumberValidation() {
  const onlyNumbersRegex = /^\d+$/;
  if (cardNumber.value == "") {
    cardNumber.style.borderColor = "red";
    setErrorMessage("Can't be blank.")

  }if (!onlyNumbersRegex.test(cardNumber.value)) {
    cardNumber.style.borderColor = "red";
    setErrorMessage("Wrong format")
  } else if (cardNumber.value.length < 16) {
    cardNumber.style.borderColor = "red";
  } else {
    cardNumber.style.borderColor = "green";
    setSuccess()
  }
});

expMonth.addEventListener("input", function expMonthValidation() {
  const onlyNumbersRegex = /^\d+$/;
  if (expMonth.value == "") {
    expMonth.style.borderColor = "red";
    setErrorMessage("Can't be blank.")

  } else if (!onlyNumbersRegex.test(expMonth.value)) {
    expMonth.style.borderColor = "red";
    setErrorMessage("Wrong format")
  } else if (expMonth.value.length > 2) {
    expMonth.style.borderColor = "red";
  } else {
    expMonth.style.borderColor = "green";
    setSuccess()
  }
});

expYear.addEventListener("input", function expMonthValidation() {
  const onlyNumbersRegex = /^\d+$/;
  if (expYear.value == "") {
    expYear.style.borderColor = "red";
    setErrorMessage("Can't be blank.")

  }else if (!onlyNumbersRegex.test(expYear.value)) {
    expYear.style.borderColor = "red";
    setErrorMessage("Wrong format")
  } else {
    expYear.style.borderColor = "green";
    setSuccess()
  }
});

cvc.addEventListener("input", function expMonthValidation() {
  const onlyNumbersRegex = /^\d+$/;
  if (cvc.value == "") {
    cvc.style.borderColor = "red";
    setErrorMessage("Can't be blank.")

  }else if (!onlyNumbersRegex.test(cvc.value)) {
    cvc.style.borderColor = "red";
    setErrorMessage("Wrong format")
  } else {
    cvc.style.borderColor = "green";
    setSuccess()
  }
});

function setErrorMessage (message){
    const errorMessageField = document.getElementById('message')
    errorMessageField.innerText = message;
 
}

 function setSuccess (){
    const errorMessageField = document.getElementById('message')
    errorMessageField.innerText = '';
 }