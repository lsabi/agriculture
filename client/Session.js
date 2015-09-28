// Subscription of the tables from the client view

Meteor.subscribe("Accounts");

Meteor.subscribe("products");

Meteor.subscribe("categories");

Meteor.subscribe("production");

Meteor.subscribe("importtable");

Meteor.subscribe("exporttable");


// Declaration of the tables from the client view

products = new Mongo.Collection("products");

categories = new Mongo.Collection("categories");

production = new Mongo.Collection("production");
//The name import was not allowded
importtable = new Mongo.Collection("importtable");
//The name export was not allowded
exporttable = new Mongo.Collection("exporttable");


// Setting some default values

Session.setDefault("Category","All");

Session.setDefault("Year","All");

Session.setDefault("search"," ");

Session.setDefault("Place","All");