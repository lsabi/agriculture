apple = new Mongo.Collection("apple");

wine = new Mongo.Collection("wine");

milk = new Mongo.Collection("milk");

products = new Mongo.Collection("products");

honey = new Mongo.Collection("honey");

strawberry = new Mongo.Collection("strawberry");

mushroom = new Mongo.Collection("mushroom");

blueberries = new Mongo.Collection("blueberries");

grapefruit = new Mongo.Collection("grapefruit");

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

Meteor.publish("products",function()
{
	if(this.userId)
		return products.find({$or:[{id:this.userId},{production:1,year:1,quantity:1}]});
	else
		return products.find({production:1,year:1,quantity:1});
});

Meteor.publish("honey",function()
{
	if(this.userId)
		return honey.find({$or:[{id:this.userId},{production:1,year:1,quantity:1}]});
	else
		return honey.find({production:1,year:1,quantity:1});
});

Meteor.publish("strawberry",function()
{
	if(this.userId)
		return strawberry.find({$or:[{id:this.userId},{production:1,year:1,quantity:1}]});
	else
		return strawberry.find({production:1,year:1,quantity:1});
});

Meteor.publish("mushroom",function()
{
	if(this.userId)
		return mushroom.find({$or:[{id:this.userId},{production:1,year:1,quantity:1}]});
	else
		return mushroom.find({production:1,year:1,quantity:1});
});

Meteor.publish("blueberries",function()
{
	if(this.userId)
		return blueberries.find({$or:[{id:this.userId},{production:1,year:1,quantity:1}]});
	else
		return blueberries.find({production:1,year:1,quantity:1});
});

Meteor.publish("grapefruit",function()
{
	if(this.userId)
		return grapefruit.find({$or:[{id:this.userId},{production:1,year:1,quantity:1}]});
	else
		return grapefruit.find({production:1,year:1,quantity:1});
});