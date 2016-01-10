  Template.siteAdmin.helpers({
    company: function() {
      return Company.find();
    },
    selectedCompany: function() {
      return Company.findOne({companyname: Session.get("selectedCompany")}); 
    },
    users: function() {
		return Meteor.users.find({'profile.company': Session.get("selectedCompany")});
	}
  });
  
  // search no more than 2 times per second
var setUserFilter = _.throttle(function(template) {
	var search = template.find(".search-input-filter").value;
	Session.set("userFilter", search);
}, 500);

Template.siteAdmin.events({
		'click .btnCompany': function(event, template) {
      		event.preventDefault();

				if ($(event.target).attr("value") === "noCompany") {
					Session.set("selectedCompany", "");
				}else {
					Session.set("selectedCompany", $(event.target).attr("value"));
				}
				
      },
      	'keyup .search-input-filter': function(event, template) {
        setUserFilter(template);
        return false;
    },

    'click .glyphicon-trash': function(event, template) {
		Session.set('userInScope', this);
    },

    'click .glyphicon-info-sign': function(event, template) {
		Session.set('userInScope', this);
    },

    'click .glyphicon-pencil': function(event, template) {
		Session.set('userInScope', this);
    }
});


Template.siteAdmin.rendered = function() {
	var searchElement = document.getElementsByClassName('search-input-filter');
	if(!searchElement)
		return;
	var filterValue = Session.get("userFilter");

	var pos = 0;
	if (filterValue)
		pos = filterValue.length;

	searchElement[0].focus();
	searchElement[0].setSelectionRange(pos, pos);
};

  Template.accountsSiteAdmin.helpers({
    company: function() {
      return Company.find();
    },
    selectedCompany: function() {
      return Company.findOne({companyname: Session.get("selectedCompany")}); 
    },
    users: function() {
    	if (Session.get("selectedCompany") != '') {
			return Meteor.users.find({'profile.company': Session.get("selectedCompany")});
		}else {
			return Meteor.users.find({'profile.company': null });
		}
	},
	email: function () {
		if (this.emails && this.emails.length)
			return this.emails[0].address;

		if (this.services) {
			//Iterate through services
			for (var serviceName in this.services) {
				var serviceObject = this.services[serviceName];
				//If an 'id' isset then assume valid service
				if (serviceObject.id) {
					if (serviceObject.email) {
						return serviceObject.email;
					}
				}
			}
		}
		return "";
	},
  });