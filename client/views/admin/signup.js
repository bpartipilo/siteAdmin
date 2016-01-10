  Template.signup.helpers({
      currentUser: function() {
          return Meteor.user().emails[0].address;
      },
  });
  
  Template.signup.events({
  	'click #btnCompanySignUp': function(event, template) {
  		var properties = {
  			companyname:		template.find("#companyname").value,
  			admin:				Meteor.user().emails[0].address,
  			address:				template.find("#address").value,
  			phone:				template.find("#phone").value, 		
  		}
  		if (Validation.valid_name(properties.companyname)) {
  			createCompany(properties);
      } 	
  	}	
  	});
  	
  	Template.signup.error = function () {
  		return Session.get("error");
  		};

Validation = {
  clear: function () {
    return Session.set("error", undefined);
  },
  set_error: function (message) {
    return Session.set("error", message);
  },
  valid_name: function (name) {
    this.clear();
    if (name.length == 0) {
      this.set_error("Name can't be blank");
      return false;
    } else if (this.company_exists(name)) {
      this.set_error("Company already exists");
      return false;
    } else {
      return true;
    }
  },
  company_exists: function(name) {
    return Company.findOne({companyname: name});
  }
};