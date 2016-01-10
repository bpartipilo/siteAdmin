Template.modifyPorterModalInner.helpers({
	company: function () {
      return Company.findOne({companyname: Session.get("selectedCompany")}); 
    }
});
	Template.modifyPorterModalInner.events({
		'click #login-buttons-enroll-account-button': function (event, template) {		
		   var asms = template.find("#ASM-name").value;
         var arrayAsms = asms.split(',');
         var porters = template.find("#porter-name").value;
         var arrayPort = porters.split(',');
         var drivers = template.find("#driver-name").value;
         var arrayDrive = drivers.split(',');
         Meteor.call( 'updatePorter',arrayAsms,arrayPort,arrayDrive, Meteor.user().profile.company);		
			$("#modifyPorters").modal("hide");
			$('#modPorterForm').get(0).reset();
		},
		'keypress #enroll-account-password': function (event) {
			if (event.keyCode === 13)
		   var asms = template.find("#ASM-name").value;
         var arrayAsms = asms.split(',');
         var porters = template.find("#porter-name").value;
         var arrayPort = porters.split(',');
         var drivers = template.find("#driver-name").value;
         var arrayDrive = drivers.split(',');
         Meteor.call( 'updatePorter',arrayAsms,arrayPort,arrayDrive, Meteor.user().profile.company);				
			$("#modifyPorters").modal("hide");
			$('#modPorterForm').get(0).reset();
		},
		'click #login-buttons-cancel-enroll-account-button': function () {
			$("#modifyPorters").modal("hide");
			$('#modPorterForm').get(0).reset();
		}
	});