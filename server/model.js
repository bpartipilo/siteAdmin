    Meteor.startup(function () {
		process.env.MAIL_URL = 'smtp://austin%40everydayguy.net:R00zzic%40831@smtp.booksbyjos.com:587';
        // bootstrap the admin user if they exist -- You'll be replacing the id later
        if (Meteor.users.findOne("qqhR5d68stCLW92LK"))
            Roles.addUsersToRoles("qqhR5d68stCLW92LK", ['admin']);
            
        if (Meteor.users.findOne("nBvn7p6s9AZYBbLFa"))
            Roles.addUsersToRoles("nBvn7p6s9AZYBbLFa", ['admin']);

    });
Meteor.publish("company", function () {
	return Company.find();
});