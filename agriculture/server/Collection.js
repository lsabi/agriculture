// DECLARATION OF THE DIFFERENT TABLES

products = new Mongo.Collection("products");

categories = new Mongo.Collection("categories");

production = new Mongo.Collection("production");
//The name import was not allowded
importtable = new Mongo.Collection("importtable");
//The name export was not allowded
exporttable = new Mongo.Collection("exporttable");

// Publishes the Accounts table

Meteor.publish("Accounts",function()
{
	if(this.userId)
		return Meteor.users.find({_id:this.userId});
	else
		return null;
});

// Publishes the products table

Meteor.publish("products",function()
{
	if(this.userId)
		return products.find({$or:[{id:this.userId},{production:1,year:1,quantity:1}]});
	else
		return products.find({production:1,year:1,quantity:1});
});

// Publishes the categories table

Meteor.publish("categories",function()
{
	if(this.userId)
		return categories.find({$or:[{id:this.userId},{production:1,year:1,quantity:1}]});
	else
		return categories.find({production:1,year:1,quantity:1});
});

// Publishes the production table

Meteor.publish("production",function()
{
	if(this.userId)
		return production.find({$or:[{id:this.userId},{production:1,year:1,quantity:1}]});
	else
		return production.find({production:1,year:1,quantity:1});
});

// Publishes the importtable table

Meteor.publish("importtable",function()
{
	if(this.userId)
		return importtable.find({$or:[{id:this.userId},{production:1,year:1,quantity:1}]});
	else
		return importtable.find({production:1,year:1,quantity:1});
});

// Publishes the exporttable table

Meteor.publish("exporttable",function()
{
	if(this.userId)
		return exporttable.find({$or:[{id:this.userId},{production:1,year:1,quantity:1}]});
	else
		return exporttable.find({production:1,year:1,quantity:1});
});