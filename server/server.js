Accounts.config
({
  sendVerificationEmail: true  
});

if(Meteor.users.find({}).count() == 0)
{
	Accounts.createUser({username:"admin",password:"admin",emails:"agriculture_admin@gmail.com"});
}