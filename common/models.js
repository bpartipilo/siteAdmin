if (Meteor.isClient) {
    Template.adminTemplate.helpers({
        // check if user is an admin
        isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        }
    });

    Meteor.subscribe("company");   
}
createUserServer = function (options) {
	Meteor.call('createUserServer',options);
};
createCompany = function (options) {
	Meteor.call('createCompany',options);
};
Meteor.methods({
	createUserServer: function (options) {
		Accounts.createUser(options);
	},
	createCompany: function (options) {
		if (options.companyname.length == 0)
			throw new Meteor.Error(413, "No Company");

		Company.insert({
  			companyname:		options.companyname,
  			admin:				options.admin,
  			address:				options.address,
  			phone:				options.phone, 
		});

		var userId = Meteor.users.findOne({emails:{$elemMatch:{address: options.admin}}})._id;
		Roles.addUsersToRoles(userId, ['admin']);
		Meteor.users.update({_id: userId},{$set: {profile: {company: options.companyname}}});
	},
});