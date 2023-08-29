const cardOwner = document.getElementById("owner-name");
const cardNumber = document.getElementById("card-num");
const expMonth = document.getElementById("month");
const expYear = document.getElementById("year");
const cvc = document.getElementById("cvc-num");
const printedCardNumber = document.getElementById("printed-CardNumber");
const printedOwnerName = document.getElementById("printed-owner");



const from = document.getElementById("form");

cardOwner.addEventListener("input", function cardNameValidation() {
  inputFieldVlue = cardOwner.value;
  const onlyLettersRegex = /^[A-Za-z]+$/;

  if (cardOwner.value == "") {
    cardOwner.style.borderColor = "red";
    printedOwnerName.textContent = ''
    setErrorMessage(1,"Can't be blank.")
  }else if (!onlyLettersRegex.test(inputFieldVlue)) {
    cardOwner.style.borderColor = "red";
    setErrorMessage(1,"Wrong format")
  } else {
    cardOwner.style.borderColor = "green";
    printedOwnerName.textContent = inputFieldVlue;
    setSuccess(1)
  }
});

cardNumber.addEventListener("input", function cardNumberValidation() {
  inputFieldVlue = cardNumber.value;
  const onlyNumbersRegex = /^\d+$/;
  if (cardNumber.value === "") {
    cardNumber.style.borderColor = "red";
    printedCardNumber.innerText = "0000 0000 0000 0000";
    setErrorMessage(2,"Can't be blank.")

  }  else if (!onlyNumbersRegex.test(cardNumber.value)) {
    cardNumber.style.borderColor = "red";
    setErrorMessage(2,"Wrong format, numbers only.")
  }else if (cardNumber.value.length > 15) {
    cardNumber.value= cardNumber.value.slice(0,16)
    cardNumber.style.borderColor = "green";
    setSuccess(2)

}  else if (cardNumber.value.length < 16) {
    cardNumber.style.borderColor = "red";
    setErrorMessage(2,"Must enter 16 number")
  } else {
    cardNumber.style.borderColor = "green";
    printedCardNumber.innerText = formatNumber(inputFieldVlue, 16);
    setSuccess(2)
  }
});

expMonth.addEventListener("input", function expMonthValidation() {
  const onlyNumbersRegex = /^\d+$/;
  if (expMonth.value == "") {
    expMonth.style.borderColor = "red";
    setErrorMessage(3,"Can't be blank.")

  } else if (!onlyNumbersRegex.test(expMonth.value)) {
    expMonth.style.borderColor = "red";
    setErrorMessage(3,"Wrong format, numbers only.")
  }else if (expMonth.value.length > 2) {
    expMonth.value= expMonth.value.slice(0,2)
} else if (expMonth.value > 12) {
    expMonth.style.borderColor = "red";
    setErrorMessage(3,"Only 12 months in a year")
  }   else {
    expMonth.style.borderColor = "green";
    setSuccess(3)
  }
});

expYear.addEventListener("input", function expMonthValidation() {
  const onlyNumbersRegex = /^\d+$/;
  if (expYear.value == "") {
    expYear.style.borderColor = "red";
    setErrorMessage(3,"Can't be blank.")

  }else if (!onlyNumbersRegex.test(expYear.value)) {
    expYear.style.borderColor = "red";
    setErrorMessage(3,"Wrong format, numbers only.")
  }else if (expYear.value.length > 2) {
    expYear.value= expYear.value.slice(0,2)
}  else {
    expYear.style.borderColor = "green";
    setSuccess(3)
  }
});

cvc.addEventListener("input", function expMonthValidation() {
  const onlyNumbersRegex = /^\d+$/;
  if (cvc.value == "") {
    cvc.style.borderColor = "red";
    setErrorMessage(4,"Can't be blank.")

  }else if (!onlyNumbersRegex.test(cvc.value)) {
    cvc.style.borderColor = "red";
    setErrorMessage(4,"Wrong format, numbers only.")
  }
  else if (cvc.value.length > 3) {
        cvc.value= cvc.value.slice(0,3)
  } else {
    cvc.style.borderColor = "green";
    setSuccess(4)
  }
});

function setErrorMessage (num,message){
 
    if(num==1){
      const cardOwnerMessage = document.getElementById("1");
      cardOwnerMessage.innerText = message;
    }if(num==2){
      const cardNumberMessage = document.getElementById("2");
      cardNumberMessage.innerText = message;
    }if(num==3){
      const expMonthMessage = document.getElementById("3");
      expMonthMessage.innerText = message;

    }if(num==4){
      const expYearMessage = document.getElementById("4");
      expYearMessage.innerText = message;

    }
}

 function setSuccess (num){
 

  if(num==1){
    const cardOwnerMessage = document.getElementById("1");
    cardOwnerMessage.innerText = '';
  }if(num==2){
    const cardNumberMessage = document.getElementById("2");
    cardNumberMessage.innerText = '';
  }if(num==3){
    const experationMessage = document.getElementById("3");
    experationMessage.innerText = '';

  }if(num==4){
    const cvcMesssage = document.getElementById("4");
    cvcMesssage.innerText = '';

  }
 }