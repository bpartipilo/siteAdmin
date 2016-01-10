Router.configure({
	layoutTemplate: 'basicLayout',
	notFoundTemplate: 'notFound',
	yieldTemplates: {
		'header': { to : 'header'},
		'footer': { to: 'footer'}	
	}
	});

Router.route('/', function () {
  this.redirect('siteAdmin');
});
Router.route('/signup');

Router.route('/adminTemplate', {
  name: 'adminTemplate',
  path: '/adminTemplate',
  template: 'adminTemplate',
  onBeforeAction: function () {
    if (!Meteor.userId()) {
		this.redirect('siteAdmin');
  } else {
    this.next();
  }},
  action: function () {
  	this.layout('appLayout');
    // render all templates and regions for this route
    this.render();
  }
});
Router.route('/siteAdmin', {
  name: 'siteAdmin',
  path: '/siteAdmin',
  template: 'siteAdmin',
  action: function () {
  	this.layout('appLayout');
    // render all templates and regions for this route
    this.render();
  }
});