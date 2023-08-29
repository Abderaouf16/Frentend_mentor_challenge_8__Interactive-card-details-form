const cardOwner = document.getElementById("owner-name");
const cardNumber = document.getElementById("card-num");
const expMonth = document.getElementById("month");
const expYear = document.getElementById("year");
const cvc = document.getElementById("cvc-num");
const printedCardNumber = document.getElementById("printed-CardNumber");
const printedOwnerName = document.getElementById("printed-owner");
const printedExpMount = document.getElementById("printed-month");
const printedExpYear = document.getElementById("printed-year");
const printedCvc = document.getElementById("printed-cvc");

const from = document.getElementById("form");

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
      const expMessage = document.getElementById("3");
      expMessage.innerText = message;
      break;
    case 4:
      const cvcMessage = document.getElementById("4");
      cvcMessage.innerText = message;
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
      const expMessage = document.getElementById("3");
      expMessage.innerText = "";
      break;
    case 4:
      const cvcMessage = document.getElementById("4");
      cvcMessage.innerText = "";
  }
}

//FOR THE INPUT RED BORDER COLOR INDICATING ERROR

function redBorder(input) {
  switch (true) {
    case input == cardOwner:
      cardOwner.style.borderColor = "red";
      break;
    case input == cardNumber:
      cardNumber.style.borderColor = "red";
      break;
    case input == expMonth:
      expMonth.style.borderColor = "red";
      break;
    case input == expYear:
      expYear.style.borderColor = "red";
      break;
    case input == cvc:
      cvc.style.borderColor = "red";
  }
}

//FOR THE INPUT GREEN BORDER COLOR INDICATING SUCCESS

function greenBorder(input) {
  switch (true) {
    case input == cardOwner:
      cardOwner.style.borderColor = "green";
      break;
    case input == cardNumber:
      cardNumber.style.borderColor = "green";
      break;
    case input == expMonth:
      expMonth.style.borderColor = "green";
      break;
    case input == expYear:
      expYear.style.borderColor = "green";
      break;
    case input == cvc:
      cvc.style.borderColor = "green";
  }
}

// FOR NAME INPUT

cardOwner.addEventListener("input", function cardNameValidation() {
  inputFieldVlue = cardOwner.value;
  const onlyLettersRegex = /^[A-Za-z]+$/;

  switch (true) {
    case cardOwner.value == "":
      redBorder(cardOwner);
      printedOwnerName.textContent = "";
      setErrorMessage(1, "Can't be blank.");
      break;
    case !onlyLettersRegex.test(inputFieldVlue):
      redBorder(cardOwner);
      setErrorMessage(1, "Wrong format");
      break;
    case cardOwner.value.length > 16:
      cardOwner.value = cardOwner.value.slice(0, 16);
      break;
    default:
      greenBorder(cardOwner);
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
      redBorder(cardNumber);
      printedCardNumber.textContent = "0000 0000 0000 0000";
      setErrorMessage(2, "Can't be blank.");
      break;

    case !onlyNumbersRegex.test(inputFieldValue):
      redBorder(cardNumber);
      setErrorMessage(2, "Wrong format, numbers only.");
      break;

    case onlyNumbersRegex.test(inputFieldValue):
      if (inputFieldValue.length > 15) {
        cardNumber.value = inputFieldValue.slice(0, 16);
        greenBorder(cardNumber);

        setSuccess(2);
      } else if (inputFieldValue.length < 16) {
        redBorder(cardNumber);
        setErrorMessage(2, "Must enter 16 numbers.");
      } else {
        greenBorder(cardNumber);
        setSuccess(2);
      }
      printedCardNumber.innerText = formatNumber(inputFieldValue, 16);
      break;

    default:
      greenBorder(cardNumber);
      setSuccess(2);
      break;
  }
});

// FOR MONTH INPUT

expMonth.addEventListener("input", function expMonthValidation() {
  const onlyNumbersRegex = /^\d+$/;

  switch (true) {
    case expMonth.value == "":
      redBorder(expMonth);
      setErrorMessage(3, "Can't be blank.");
      printedExpMount.textContent = "00";
      break;

    case !onlyNumbersRegex.test(expMonth.value):
      redBorder(expMonth);
      setErrorMessage(3, "Wrong format, numbers only.");
      break;

    case onlyNumbersRegex.test(expMonth.value):
      if (expMonth.value.length > 2) {
        expMonth.value = expMonth.value.slice(0, 2);
      } else if (expMonth.value.length < 2) {
        setErrorMessage(3, "must entre two numbers");
        redBorder(expMonth);
      } else if (expMonth.value > 12) {
        setErrorMessage(3, "Only 12 months in a year");
        redBorder(expMonth);
      } else {
        greenBorder(expMonth);
        printedExpMount.innerText = formatNumber(expMonth.value, 2);
        setSuccess(3);
      }

      break;

    default:
      greenBorder(expMonth);
      setSuccess(3);
  }
});

// FOR YEAR INPUT

expYear.addEventListener("input", function expMonthValidation() {
  const onlyNumbersRegex = /^\d+$/;

  switch (true) {
    case expYear.value == "":
      redBorder(expYear);
      setErrorMessage(3, "Can't be blank.");
      printedExpYear.textContent = "00";
      break;

    case !onlyNumbersRegex.test(expYear.value):
      redBorder(expYear);
      setErrorMessage(3, "Wrong format, numbers only.");
      break;

    case onlyNumbersRegex.test(expYear.value):
      if (expYear.value.length > 2) {
        expYear.value = expYear.value.slice(0, 2);
      } else if (expYear.value.length < 2) {
        setErrorMessage(3, "must entre two numbers");
        redBorder(expYear);
      } else {
        greenBorder(expYear);
        printedExpYear.innerText = formatNumber(expYear.value, 2);
        setSuccess(3);
      }

      break;

    default:
      greenBorder(expYear);
      setSuccess(3);
  }
});

//FOR CVC INPUT

cvc.addEventListener("input", function expMonthValidation() {
  const onlyNumbersRegex = /^\d+$/;

  switch (true) {
    case cvc.value == "":
      redBorder(cvc);
      setErrorMessage(4, "Can't be blank.");
      printedCvc.textContent = '000'
      break;

    case !onlyNumbersRegex.test(cvc.value):
      redBorder(cvc);
      setErrorMessage(4, "Wrong format, numbers only.");
      break;
    case onlyNumbersRegex.test(cvc.value):

    if( cvc.value.length > 3){
      cvc.value = cvc.value.slice(0, 3);

    }else{
      printedCvc.innerText= formatNumber(cvc.value,3)
    }
    

    default:
      greenBorder(cvc);
      setSuccess(4);
  }
});

function formatNumber(str, len) {
  str = str + "0".repeat(len - str.length); // creats a string of chracter with a specified length 'len' and the rest characters not specified in the input are 0 in this string
  let arr = [];
  for (let i = 0; i <= str.length; i += 4) {
    // loop over the string 'str' with 4 position jump at  every loop
    arr.push(str.slice(i, i + 4)); //  cut the string str by a 4 character chuncs from the initial position to a specified one by the loop which is more then the initial by 4
    //  push every 4 character to the array til i > str.length
  }

  return arr.join(" "); // join the strings of the array 'arr' and set a space btw them
}
