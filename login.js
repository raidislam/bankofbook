let submitButton = document.getElementById("login-btn");
let email = document.getElementById("email");
let password = document.getElementById("pass");

let userEmail = "taka@bank.com";
let userPassword = 12345;

submitButton.addEventListener("click", function () {
  if (email.value === userEmail && Number(password.value) === userPassword) {
    //transfer another page
    window.location.href = "banking.html";
  } else {
    alert("email or id thik moto den sir 😡");
  }
});

//event listiner added
