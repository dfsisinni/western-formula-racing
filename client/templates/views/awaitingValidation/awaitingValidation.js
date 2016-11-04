Template.awaitingValidation.onRendered(function () {
	swal({
    	title: "Awaiting Administrator Validation!",
    	text: "Contact your system administrator to validate your account!",
    	type: "error"
	});
});

Template.awaitingValidation.events({
	'click #logout': function (event) {
		Meteor.logout();
	}
});