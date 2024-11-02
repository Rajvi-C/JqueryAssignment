$(document).ready(function () {
  const username = sessionStorage.getItem("username");
  if (username) {
    $("#usernameDisplay").text(username);
  } else {
    $("#usernameDisplay").text("User");
  }

  const validateInput = () => {
    const num1 = $("#number1").val();
    const num2 = $("#number2").val();
    let isValid = true;

    $("#number1Error").text("");
    $("#number2Error").text("");

    if (!num1 || isNaN(num1) || !isFinite(num1)) {
      $("#number1Error").text("Please enter a valid number for Number 1.");
      isValid = false;
    }

    if (!num2 || isNaN(num2) || !isFinite(num2)) {
      $("#number2Error").text("Please enter a valid number for Number 2.");
      isValid = false;
    }

    $("#addBtn, #subtractBtn, #multiplyBtn, #divideBtn").prop(
      "disabled",
      !isValid
    );
    return isValid;
  };

  const calculate = (operation) => {
    const num1 = parseFloat($("#number1").val());
    const num2 = parseFloat($("#number2").val());

    if (validateInput()) {
      let result;
      switch (operation) {
        case "add":
          result = num1 + num2;
          break;
        case "subtract":
          result = num1 - num2;
          break;
        case "multiply":
          result = num1 * num2;
          break;
        case "divide":
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            $("#number2Error").text("Cannot divide by zero.");
            return;
          }
          break;
        default:
          return;
      }
      $("#result").val(result);
    }
  };

  $("#number1, #number2").on("keyup", validateInput);

  $("#addBtn").on("click", () => calculate("add"));
  $("#subtractBtn").on("click", () => calculate("subtract"));
  $("#multiplyBtn").on("click", () => calculate("multiply"));
  $("#divideBtn").on("click", () => calculate("divide"));

  $("#addBtn, #subtractBtn, #multiplyBtn, #divideBtn").prop("disabled", true);
});
