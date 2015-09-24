apple = new Mongo.Collection("apple");

wine = new Mongo.Collection("wine");

milk = new Mongo.Collection("milk");

Meteor.publish("apple",function()
{
	if(this.userId)
		return apple.find({$or:[{id:this.userId},{production:1,year:1,quantity:1}]});
	else
		return apple.find({production:1,year:1,quantity:1});
});

Meteor.publish("wine",function()
{
	if(this.userId)
		return wine.find({$or:[{id:this.userId},{production:1,year:1,quantity:1}]});
	else
		return wine.find({production:1,year:1,quantity:1});
});

Meteor.publish("milk", function()
{
	if(this.userId)
		return milk.find({$or:[{id:this.userId},{production:1,year:1,quantity:1}]});
	else
		return milk.find({production:1,year:1,quantity:1});
});

Meteor.publish("Accounts",function()
{
	if(this.userId)
		return Meteor.users.find({_id:this.userId});
	else
		return null;
});