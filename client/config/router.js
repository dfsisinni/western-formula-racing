Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

//
// Dashboard route
//

Router.route('/', function () {
    Router.go('sponsors');
});

Router.route('/sponsors', {
	onBeforeAction: function () {
		if (Meteor.userId()) {
			if (Meteor.user().profile.confirmed) {
				this.render('sponsors');
				this.layout('layout');
			} else {
				Router.go('awaitingValidation');
			}
		} else {
			Router.go('login');
		}

		this.next();
	}
});

Router.route('/register', {
	onBeforeAction: function () {
		if (Meteor.userId()) {
			Router.go('sponsors');
		} else {
			this.render('register');
			this.layout('blankLayout');
		}

		this.next();
	}
});

Router.route('/login', {
	onBeforeAction: function () {
		if (Meteor.userId()) {
			if (Meteor.user().profile.confirmed) {
				Router.go('sponsors');
			} else {
				Router.go('awaitingValidation');
			}
		} else {
			this.render('login');
			this.layout('blankLayout');
		}

		this.next();
	}
});

Router.route('/awaitingValidation', {
	onBeforeAction: function () {
		if (Meteor.userId()) {
			if (Meteor.user().profile.confirmed) {
				Router.go('sponsors');
			} else {
				this.render('awaitingValidation');
				this.layout('blankLayout');
			}	
		} else {
			Router.go('login');
		} 

		this.next();
	}
});



//
// Global - Remove splash screen after after rendered layout
//

Router.onAfterAction(function()
{
    setTimeout(function()
    {
        $('.splash').css('display', 'none')
    })
});