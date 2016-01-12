	//
	// addUserModalInner template
	//

	Template.addUserModalInner.events({
		'click #login-buttons-enroll-account-button': function (event, template) {		
          var options = {
          	email: template.find("#enroll-account-email").value,
          	password: template.find("#enroll-account-password").value,
          	profile: {
          		name: template.find("#enroll-account-name").value,
          		company: Session.get("selectedCompany"),
          		}
          	};
          	createUserServer(options);			
			$("#adduser").modal("hide");
			$('#addUserForm').get(0).reset();
		},
/*		'keypress #enroll-account-password': function (event) {
			if (event.keyCode === 13)
          var options = {
          	email: template.find("#enroll-account-email").value,
          	password: template.find("#enroll-account-password").value,
          	profile: {
          		name: template.find("#enroll-account-name").value,
          		company: Meteor.user().profile.company,
          		}
          	};
          	createUserServer(options);			
			$("#adduser").modal("hide");
			$('#addUserForm').get(0).reset();
		},*/
		'click #login-buttons-cancel-enroll-account-button': function () {
			$("#adduser").modal("hide");
			$('#addUserForm').get(0).reset();
		}
	});


