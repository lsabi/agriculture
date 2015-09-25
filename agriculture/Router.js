Router.configure
({
		layoutTemplate: "Layout"
});

Router.map(function()
{
	this.route("Home", {path : "/" } );

	this.route("Add", { path : "/Add", onBeforeAction: function()
							{
								if(!Meteor.userId())
									this.redirect("Home");
								else
									this.next();
							},
							onAfterAction : function() 
							{ },
							onRun : function() 
							{
								if(!Meteor.userId())
									this.redirect("Home");
								else
									this.next();
							}  
		 } );

	this.route("Search", { path: "/Search"} );

	this.route("Login", { path: "/Login", onBeforeAction: function()
							{
								if(Meteor.userId())
									this.redirect("Home");
								else
									this.next();
							},
							onAfterAction : function() 
							{ },
							onRun : function() 
							{
								if(Meteor.userId())
									this.redirect("Home");
								else
									this.next();
							}  
			} );

	this.route("Register", { path: "/Register", onBeforeAction: function()
							{
								if(Meteor.userId())
									this.redirect("Home");
								else
									this.next();
							},
							onAfterAction : function() 
							{ },
							onRun : function() 
							{
								if(Meteor.userId())
									this.redirect("Home");
								else
									this.next();
							}  
		} );

	this.route("Options", { path : "/Options", onBeforeAction: function()
							{
								if(!Meteor.userId())
									this.redirect("Home");
								else
									this.next();
							},
							onAfterAction : function() 
							{ },
							onRun : function() 
							{
								if(!Meteor.userId())
									this.redirect("Home");
								else
									this.next();
							}  
		 } );

});
