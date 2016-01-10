Meteor.startup(function() {
	// create an admin role if it doesn't exist
	if (Meteor.roles.find({name: 'admin'}).count() < 1 ) {
		Roles.createRole('admin');
	}
	if (Meteor.roles.find({name: 'Porter'}).count() < 1 ) {
		Roles.createRole('Porter');
	}
	if (Meteor.roles.find({name: 'Advisor'}).count() < 1 ) {
		Roles.createRole('Advisor');
	}
});
