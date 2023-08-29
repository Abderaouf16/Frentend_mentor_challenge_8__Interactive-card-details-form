const cardOwner = document.getElementById("owner-name");
const cardNumber = document.getElementById("card-num");
const expMonth = document.getElementById("month");
const expYear = document.getElementById("year");
const cvc = document.getElementById("cvc-num");
const printedCardNumber = document.getElementById("printed-CardNumber");
const printedOwnerName = document.getElementById("printed-owner");
const printedExpMount = document.getElementById("printed-month");
const printedExpYear = document.getElementById("printed-year");
const from = document.getElementById("form");

// FOR NAME INPUT

cardOwner.addEventListener("input", function cardNameValidation() {
  inputFieldVlue = cardOwner.value;
  const onlyLettersRegex = /^[A-Za-z]+$/;

  switch (true) {
    case cardOwner.value == "":
      cardOwner.style.borderColor = "red";
      printedOwnerName.textContent = "";
      setErrorMessage(1, "Can't be blank.");
      break;
    case !onlyLettersRegex.test(inputFieldVlue):
      cardOwner.style.borderColor = "red";
      setErrorMessage(1, "Wrong format");
      break;
    case cardOwner.value.length > 16:
      cardOwner.value = cardOwner.value.slice(0, 16);
      break;
    default:
      cardOwner.style.borderColor = "green";
      printedOwnerName.textContent = inputFieldVlue;
      setSuccess(1);
  }
});

// FOR CARD NUMBER INPUT

cardNumber.addEventListener("input", function cardNumberValidation() {
  const inputFieldValue = cardNumber.value;
  const onlyNumbersRegex = /^\d+$/;

  switch (true) {
    case inputFieldValue === "":
      cardNumber.style.borderColor = "red";
      printedCardNumber.textContent = "0000 0000 0000 0000";
      setErrorMessage(2, "Can't be blank.");
      break;

    case !onlyNumbersRegex.test(inputFieldValue):
      cardNumber.style.borderColor = "red";
      setErrorMessage(2, "Wrong format, numbers only.");
      break;

    case onlyNumbersRegex.test(inputFieldValue):
      if (inputFieldValue.length > 15) {
        cardNumber.value = inputFieldValue.slice(0, 16);
        cardNumber.style.borderColor = "green";
        setSuccess(2);
      } else if (inputFieldValue.length < 16) {
        cardNumber.style.borderColor = "red";
        setErrorMessage(2, "Must enter 16 numbers.");
      } else {
        cardNumber.style.borderColor = "green";
        setSuccess(2);
      }
      printedCardNumber.innerText = formatNumber(inputFieldValue, 16);
      break;

    default:
      cardNumber.style.borderColor = "green";
      setSuccess(2);
      break;
  }
});

// FOR MONTH INPUT

expMonth.addEventListener("input", function expMonthValidation() {
  const onlyNumbersRegex = /^\d+$/;

  switch (true) {
    case expMonth.value == "":
      expMonth.style.borderColor = "red";
      setErrorMessage(3, "Can't be blank.");
      printedExpMount.textContent = "00";
      break;
    case !onlyNumbersRegex.test(expMonth.value):
      expMonth.style.borderColor = "red";
      setErrorMessage(3, "Wrong format, numbers only.");
      break;
    case onlyNumbersRegex.test(expMonth.value):
      if (expMonth.value.length > 2) {
        expMonth.value = expMonth.value.slice(0, 2);
      } else if (expMonth.value > 12) {
        expMonth.style.borderColor = "red";
        setErrorMessage(3, "Only 12 months in a year");
      }
      printedExpMount.innerText = formatNumber(expMonth.value, 2);

      break;
    default:
      expMonth.style.borderColor = "green";
      setSuccess(3);
  }
});

// FOR YEAR INPUT

expYear.addEventListener("input", function expMonthValidation() {
  const onlyNumbersRegex = /^\d+$/;

  switch (true) {
    case expYear.value == "":
      expYear.style.borderColor = "red";
      setErrorMessage(3, "Can't be blank.");
      printedExpYear.textContent = "00";
      break;
    case !onlyNumbersRegex.test(expYear.value):
      expYear.style.borderColor = "red";
      setErrorMessage(3, "Wrong format, numbers only.");
      break;
    case onlyNumbersRegex.test(expYear.value):
      if (expYear.value.length > 2) {
        expYear.value = expYear.value.slice(0, 2);
      }
      printedExpYear.innerText = formatNumber(expYear.value, 2);
      break;
    default:
      expYear.style.borderColor = "green";
      setSuccess(3);
  }
});

//FOR CVC INPUT

cvc.addEventListener("input", function expMonthValidation() {
  const onlyNumbersRegex = /^\d+$/;

  switch (true) {
    case cvc.value == "":
      cvc.style.borderColor = "red";
      setErrorMessage(4, "Can't be blank.");
      break;
    case !onlyNumbersRegex.test(cvc.value):
      cvc.style.borderColor = "red";
      setErrorMessage(4, "Wrong format, numbers only.");
      break;
    case cvc.value.length > 3:
      cvc.value = cvc.value.slice(0, 3);
      break;
    default:
      cvc.style.borderColor = "green";
      setSuccess(4);
  }
});

// FOR DISPLAYING THE ERROR MESSAGE

function setErrorMessage(num, message) {
  switch (num) {
    case 1:
      const cardOwnerMessage = document.getElementById("1");
      cardOwnerMessage.innerText = message;
      break;
    case 2:
      const cardNumberMessage = document.getElementById("2");
      cardNumberMessage.innerText = message;
      break;
    case 3:
      const expMonthMessage = document.getElementById("3");
      expMonthMessage.innerText = message;
      break;
    case 4:
      const expYearMessage = document.getElementById("4");
      expYearMessage.innerText = message;
  }
}

// FOR THE VALIDATION SECCESS 

function setSuccess(num) {
  switch (num) {
    case 1:
      const cardOwnerMessage = document.getElementById("1");
      cardOwnerMessage.innerText = "";
      break;
    case 2:
      const cardNumberMessage = document.getElementById("2");
      cardNumberMessage.innerText = "";
      break;
    case 3:
      const expMonthMessage = document.getElementById("3");
      experationMessage.innerText = "";
      break;
    case 4:
      const expYearMessage = document.getElementById("4");
      expYearMessage.innerText = "";
  }
}

function formatNumber(str, len) {
  str = str + "0".repeat(len - str.length);
  let arr = [];
  for (let i = 0; i <= str.length; i += 4) {
    arr.push(str.slice(i, i + 4));
  }
  return arr.join(" ");
}
