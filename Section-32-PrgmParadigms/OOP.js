class Validator {
	static REQUIRED = 'REQUIRED';
	static MIN_LENGTH = 'MIN_LENGTH';

	static validate(value, flag, validatorValue){
		if(flag === this.REQUIRED){
			return value.trim().length > 0;
		}
		if(flag === this.MIN_LENGTH){
			return value.trim().length > validatorValue;
		}
	}
}

class User {
	constructor(userName, userPassword) {
		this.username = userName;
		this.password = userPassword;
	}

	greet() {
		console.log("HI, I am " + this.username);
	}
}

class UserInputForm {
  constructor() {
    this.form = document.getElementById("user-input");
    this.userNameInput = document.getElementById("username");
    this.passwordInput = document.getElementById("password");

		this.form.addEventListener('submit', this.signupHandler.bind(this));
  }

	signupHandler(event) {
		event.preventDefault();
		const enteredUsername = this.userNameInput.value;
		const enteredPassword = this.passwordInput.value;

		if(!Validator.validate(enteredUsername, Validator.REQUIRED) || !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)) {
			alert("INVALID INPUT");
			return;
		}
		const newUser = new User(enteredUsername, enteredPassword);
		console.log(newUser);
		newUser.greet();
	}
}

new UserInputForm();