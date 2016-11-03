Template.register.events ({
	'submit #registrationForm': function (event) {
		event.preventDefault();

		var name = event.target.uName.value;
		var email = event.target.email.value;
		var password = event.target.password.value;
		var conPassword = event.target.conPassword.value;

		if (errorCheck(email, password, conPassword)) {
			Accounts.createUser({
				email: email,
				password: password,
				profile: {
					name: name,
					confirmed: false
				}
			});

			toastr.success("Account Created!");
		}

	}
});

function errorCheck (email, password, conPassword) {
	if (!validateEmail(email)) {
		toastr.error("Invalid email address!", "Registration Error");
		toastr.options = toastrError();
		return false;
	}

	if (password != conPassword) {
		toastr.error("Passwords don't match!", "Registration Error");
		toastr.options = toastrError();
		return false;
	}

	return true;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}