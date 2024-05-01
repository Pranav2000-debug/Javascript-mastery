const form = document.getElementById("user-input");
const userNameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function validateInput(enteredPassword, enteredUsername) {
  if (!enteredPassword || !enteredUsername) {
    if (!enteredPassword && !enteredUsername) {
      alert("INVALID INPUT- no username or passwowrd");
      userNameInput.focus();
      userNameInput.style.outline = "red solid 1px";
      userNameInput.style.boxShadow = "none";
      return false;
    }
    if (!enteredPassword && enteredUsername) {
      alert("please provide a password");
      passwordInput.focus();
      passwordInput.style.outline = "red solid 1px";
      passwordInput.style.boxShadow = "none";
      return false;
    }
    if (enteredPassword && !enteredUsername) {
      alert("no username entered");
      userNameInput.focus();
      userNameInput.style.outline = "red solid 1px";
      userNameInput.style.boxShadow = "none";
      return false;
    }
  }
  if (enteredPassword && enteredPassword.length <= 5 && enteredUsername) {
    alert("password should be longer than 6 chars");
    passwordInput.focus();
    passwordInput.style.outline = "red solid 1px";
    passwordInput.style.boxShadow = "none";
    return false;
  }
  return true;
}

function signUpHandler(event) {
  event.preventDefault();
  console.log(event);

  const enteredUsername = userNameInput.value.trim();
  const enteredPassword = passwordInput.value.trim();

  if (!validateInput(enteredPassword, enteredUsername)) {
    return;
  }

  const user = {
    username: enteredUsername,
    passowrd: enteredPassword,
  };

  console.log(user);
  console.log(
    `Hi ${user.username}, I can see yur passwordd niggszz: ${user.passowrd}`
  );
}

form.addEventListener("submit", signUpHandler);
userNameInput.addEventListener("keydown", () => {
  userNameInput.style.outline = "none";
});
passwordInput.addEventListener("keydown", () => {
  passwordInput.style.outline = "none";
});
