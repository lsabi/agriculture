if(Meteor.isClient)
{

	Template.Layout.helpers
	({
		"templatenohome":function()
		{
			return !(Router.current().route.getName() == "Home");
		},
		"userName":function()
		{
			return Meteor.user().username;
		}
	});

	Template.Layout.events
	({
		"click #logout-button":function(event,template)
		{
			notify("Bye bye "+Meteor.user().username);
			Meteor.logout();
			Router.go("/");
			return ;
		},

		"click #back-button":function(event,template)
		{
			Router.go("/");
			return ;
		}

		// add event to refresh alert contents
	});

}