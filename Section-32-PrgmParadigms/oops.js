class Validator {
  static ValidateInput(
    enteredPassword,
    enteredUsername,
    userNameInput,
    passwordInput
  ) {
    if (!enteredPassword || !enteredUsername) {
      if (!enteredPassword && !enteredUsername) {
        alert("INVALID INPUT- no username or passwowrd");
        userNameInput.focus();
        this.setInputError(userNameInput);
        return false;
      }
      if (!enteredPassword && enteredUsername) {
        alert("please provide a password");
        passwordInput.focus();
        this.setInputError(passwordInput);
        return false;
      }
      if (enteredPassword && !enteredUsername) {
        alert("no username entered");
        userNameInput.focus();
        this.setInputError(userNameInput);
        return false;
      }
    }
    if (enteredPassword && enteredPassword.length <= 5 && enteredUsername) {
      alert("password should be longer than 6 chars");
      passwordInput.focus();
      this.setInputError(passwordInput);
      return false;
    }
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if(!regex.test(enteredPassword)) {
        alert("enter strong password");
        return false;
    }
    return true;
  }

  static setInputError(input) {
    input.style.outline = "red solid 1px";
    input.style.boxShadow = "none";
  }
  static clearInputError(input) {
    input.style.outline = "none";
  }
}

class User {
    constructor(userName, userPassword){
        this.username = userName;
        this.password = userPassword;
    }
    greet() {
        console.log('Hi, I Am ' + this.username);
    }
}

class Form {
  constructor() {
    this.form = document.getElementById("user-input");
    this.userNameInput = document.getElementById("username");
    this.passwordInput = document.getElementById("password");
    this.form.addEventListener("submit", this.signupHandler.bind(this));
    this.userNameInput.addEventListener(
      "keydown",
      this.clearInputOutline.bind(this, this.userNameInput)
    );
    this.passwordInput.addEventListener(
      "keydown",
      this.clearInputOutline.bind(this, this.passwordInput)
    );
  }

  clearInputOutline(input) {
    Validator.clearInputError(input);
  }
  signupHandler(event) {
    event.preventDefault();
    console.log(event);

    const enteredUsername = this.userNameInput.value.trim();
    const enteredPassword = this.passwordInput.value.trim();

    if(!Validator.ValidateInput(enteredPassword, enteredUsername, this.userNameInput, this.passwordInput)){
        return;
    }
    const newUser = new User(enteredUsername, enteredPassword);
    console.log(newUser);
    newUser.greet();
  }
}

new Form();