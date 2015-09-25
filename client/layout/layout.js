if(Meteor.isClient)
{

	Template.Layout.helpers
	({
		"templatenohome":function()
		{
			return !(Router.current().route.getName() == "Home");
		}
	});

	Template.Layout.events
	({
		"click #logout-button":function(event,template)
		{
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