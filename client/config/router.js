Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

//
// Dashboard route
//

Router.route('/', function () {
    Router.go('main');
});

Router.route('/main', {
	onBeforeAction: function () {
		if (Meteor.userId()) {
			this.render('main');
			this.layout('layout');
		} else {
			Router.go('login');
			this.next();
		}
	}
});

Router.route('/register', {
	onBeforeAction: function () {
		if (Meteor.userId()) {
			Router.go('main');
			this.next();
		} else {
			this.render('register');
			this.layout('blankLayout');
		}
	}
});

Router.route('/login', {
	onBeforeAction: function () {
		if (Meteor.userId()) {
			Router.go('main');
			this.next();
		} else {
			this.render('login');
			this.layout('blankLayout');
		}
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