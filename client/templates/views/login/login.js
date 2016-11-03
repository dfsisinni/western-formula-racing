Template.login.events({
	'submit #loginForm': function (event) {
		event.preventDefault();

		var email = event.target.email.value;
		var password = event.target.password.value;


		Meteor.loginWithPassword(email, password, function (error) {
			if (error) {
				event.target.email.value='';
				event.target.password.value='';

				toastr.error("Invalid credentials!", "Login Error");
				toastr.options = toastrError();


			} else {
				Router.go('main');
			}
		});


	}
});

