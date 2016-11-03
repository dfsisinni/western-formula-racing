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
			this.next();
		} else {
			Router.go('login');
		}
	}
});

Router.route('/login', function () {
	this.render('login');
	this.layout('blankLayout');
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