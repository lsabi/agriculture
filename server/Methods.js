Meteor.methods
({
	"check-username":function(name)
	{
		if(!Meteor.users.findOne({username:name}))
			return true;
		else
			return false;
	},

	"check-farm":function(name,number)
	{
		if(!Meteor.users.findOne({profile:{$or:[{farmname:name},{farmnumber:number}]}}))
			return true;
		else
			return false;
	},

	register:function(name,surname,username,password,email,farmname,farmnumber,farmplace,production)
	{
		var date = new Date();
		date = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDay();  
		return Accounts.createUser({username:username,password:password,email:email,createdAt:date,profile:{owner:surname+" "+name,farmname:farmname,farmnumber:farmnumber,farmplace:farmplace,production:production}}),function(err)
		{
			if(err)
				return false;
			else
				return true;
		};   
	}
});
