if (Meteor.isClient) 
{

	// Notification function
	// Call notify("") with the message to notify to show an alert
	function notify(newAlert){
		// change the alert message
		document.getElementById("alert-content").innerHTML = newAlert;
		// alert animations
		var box = document.getElementById("alert-wrapper");
		box.className = "visible";
		setTimeout(function(){ box.className = "hidden" }, 2500);
	}


  Template.Home.events
  ({
    "click #login":function(event,template)
    {
      Router.go("/Login");
    },

    "click #search":function(event,template)
    {
      Router.go("/Search");
    },

    "click #register":function(event,template)
    {
      Router.go("/Register");
    },

    "click #add-button":function(event,template)
    {
    	Router.go("/Add");
    },

    "click #options-button":function(event,template)
    {
    	Router.go("/Options");
    }
  });

  Template.Login.events
  ({
  	"submit #login-form":function(event,template)
  	{
  		
  		event.preventDefault();

  		var user = template.find("#username-field").value,
  			  pass = template.find("#password-field").value;

  		if(!user)
  		{
  			console.log("invalid user!"); // better -> "User field is empty"
  			notify("User field is empty");
        return ;
  		}
  		
  		if(!pass)
  		{
  			console.log("invalid password!"); // better -> "Password field is empty"
  			notify("Password field is empty");
        return ;
  		}

    //Just a try to see the input and if it works. For security purpose remember to comment it avery time you finished using it!! Thx
	  //  console.log(user+" "+pass);   

  		Meteor.loginWithPassword(user, pass, function(err)
  		{
  			if(err)
  			{
  				console.log("err");
  				template.find("#username-field").value = "";
  				template.find("#password-field").value = "";
  				notify("Oops... it seems you are not registered");
          return ;
  			}
  			else
  			{
          notify("Welcome back "+Meteor.user().username);
  				return ;
  			}
  		});
  		return ;
  	}
  });

  Template.Search.helpers
  ({
   
    "search":function()
    {
      return ;
    },

// Function for returning an array with all the years of activity of the application

    "year":function()
    {

      var returnyear = [];
      var startyear = 2015;
      var currentyear = new Date().getFullYear();
    
      do
      {
        returnyear.push(currentyear);
        currentyear--;
      }
      while( startyear <= currentyear )

      return returnyear;  
    }   
  });

  Template.Search.events
  ({
    "keyup #search":function(event,template)
    {
    //	apple.insert({id:this.userId,production:"500",year:"2015",quantity:"500"});
    //	console.log(this.userId);
      return Session.set("#search",event.target.value);
    }
  });

  Template.Register.events
  ({
    "click #confirm-registration":function(event,template)
    {
      event.preventDefault();

      var name = template.find("#name").value.toLowerCase(),
          surname = template.find("#surname").value.toLowerCase(),
          username = template.find("#username").value,
          password1 = template.find("#password1").value,
          password2 = template.find("#password2").value,
          email = template.find("#mail").value,
          farmname = template.find("#farm-name").value.toLowerCase(),
          farmnumber = template.find("#farm-number").value,
          farmplace = template.find("#farm-place").value,
          productiontype = template.find("#production").value; 

        name = name.charAt(0).toUpperCase() + name.substr(1);
        surname = surname.charAt(0).toUpperCase() + surname.substr(1);
        farmname = farmname.charAt(0).toUpperCase() + farmname.substr(1);

      if(!name.match("/^[A-Za-z]+$/"))
      {
        notify("Not allowed char in Name field");
        return ;
      }
        
      if(!surname.match("/^[A-Za-z]+$/")) 
      {
        notify("Not allowed char in Surname field");
        return ;
      } 

      if(!username.match("/^[A-Za-z]+$/") )
      {
        notify("The username can contain only charachters");
        return ;
      }
        
      if(!Meteor.call("check-username",username) || username.toLowerCase() == "admin")
      {
        notify("The username has been already taken");
        return ;
      }
        
      if(!(password1.length>7 && password1.length<17))
      {
        notify("Password must be min 8 and max 17 length");
        return ;
      }  
        
      if(!password1 == password2)
      {
        notify("Passwords do not match");
        return ;
      }
        
      if(!email.match("/^[A-Z0-9'.1234z_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/"))
      {
        notify("Wrong mail format");
        return ;
      } 

      if(!farmname.match("/^[A-Za-z]+$/"))
      {
        notify("Wrong farm name");
        return ;
      } 

      if(!farmnumber.match("/^[0-9]+$/"))
      {
        notify("Wrong Farm number format");
        return ;
      }

      if(!Meteor.call("check-farm",farmname,farmnumber))
      {
        notify("Farm name and Farm code does not match");
        return ;  
      } 
        
      console.log("Preparing to enter the register method on the server");

      Meteor.call("register",name,surname,username,password1,email,farmname,farmnumber,farmplace,productiontype,function(err)
      {
        if(err)
        {
          	console.log("A problem occurred while creating the account");
          	notify("A problem occurred while creating the account");
          	return ;
        }
        else
        {
          	Router.go("/Login");
          	notify("Registration successfull!\nNow log in");
          	return ;
        }
      });
    }
  });
}

if (Meteor.isServer) 
{
  Meteor.startup(function () 
  {
    // code to run on server at startup
  });
}