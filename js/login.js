$(document).ready(function () {
  $("#button").attr("disabled", "disabled");

  function checkFormValidity() {
    const isFormValid =
      $("#emailError").text() === "" &&
      $("#usernameError").text() === "" &&
      $("#passwordError").text() === "" &&
      $("#confirmPasswordError").text() === "" &&
      $("#email").val().trim() !== "" &&
      $("#username").val().trim() !== "" &&
      $("#password").val().trim() !== "" &&
      $("#confirmPassword").val().trim() !== "";

    $("#button").prop("disabled", !isFormValid);
  }

  $("#email").on("keyup", function () {
    const email = $(this).val();
    const emailError = $("#emailError");

    if (email === "") {
      emailError.text("Email is required.");
    } else if (!/^[a-zA-Z0-9._%+-]+@northeastern\.edu$/.test(email)) {
      emailError.text(
        "Please enter a valid Northeastern email ending with @northeastern.edu."
      );
    } else {
      emailError.text("");
    }
    checkFormValidity();
  });

  $("#username").on("keyup", function () {
    const username = $(this).val();
    const usernameError = $("#usernameError");

    if (username === "") {
      usernameError.text("Username is required.");
    } else if (username.length < 4) {
      usernameError.text("Username must be at least 4 characters.");
    } else if (username.length > 20) {
      usernameError.text("Username must be less than 20 characters.");
    } else if (/[^a-zA-Z0-9]/.test(username)) {
      usernameError.text("Username can only contain letters and numbers.");
    } else {
      usernameError.text("");
    }
    checkFormValidity();
  });

  $("#password").on("keyup", function () {
    const password = $(this).val();
    const passwordError = $("#passwordError");

    if (password === "") {
      passwordError.text("Password is required.");
    } else if (password.length < 6) {
      passwordError.text("Password must be at least 6 characters.");
    } else {
      passwordError.text("");
    }
    checkFormValidity();
  });

  $("#confirmPassword").on("keyup", function () {
    const password = $("#password").val();
    const confirmPassword = $(this).val();
    const confirmPasswordError = $("#confirmPasswordError");

    if (confirmPassword === "") {
      confirmPasswordError.text("Please confirm your password.");
    } else if (password !== confirmPassword) {
      confirmPasswordError.text("Passwords do not match.");
    } else {
      confirmPasswordError.text("");
    }
    checkFormValidity();
  });

  $("#button").on("click", function (e) {
    e.preventDefault();
    if ($("#button").prop("disabled") === false) {
      window.location.href = "calculator.html";
      const username = $("#username").val();
      sessionStorage.setItem("username", username);
    }
  });
});
