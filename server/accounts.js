/*Accounts.validateNewUser(function (user) {
  var service = user.services.google;

  if (!service){
  	return true;
  }
    
  var email = service.email;
  var existingUser = Meteor.users.findOne({'emails.address': email});

  if (!existingUser)
    return true;

  if (user.services.google) {
    Meteor.users.update({_id: existingUser._id}, {
      $set: {
        'profile.name': user.profile.name,
        'profile.company': existingUser.profile.company,
        'services.google': user.services.google
      }, 
      //$push: {
      //  'services.resume.loginTokens': user.services.resume.loginTokens[0]
      //}
    });
  } ;

  throw new Meteor.Error(205, "Merged with your existing account. Try again, it'll work now.");
});*/

Accounts.onLogin(function () {

});