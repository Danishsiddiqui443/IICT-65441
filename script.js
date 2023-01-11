const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginSuccessMsg = document.getElementById("login-success-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "user" && password === "123456") {
    loginSuccessMsg.style.opacity = 1;
    loginErrorMsg.style.opacity = 0;
  } else {
    loginErrorMsg.style.opacity = 1;
    loginSuccessMsg.style.opacity = 0;
  }
});
