
             $( "#names" ).html("Your Webname is <div style=\"color: red\">"+myname+"</div>");
             function genn(){
             	myname=getRndName();
                document.cookie = "webname="+myname; 
                $( "#names" ).html("Your Webname is <div style=\"color: red\">"+myname+"</div>");
		}