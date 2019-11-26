var myname;
		if(!document.cookie.includes("webname")){
             myname=getRndName();
             document.cookie = "webname="+myname;
		}else{
			myname=such("webname");
			if(myname==null||myname==undefined){
                myname=getRndName();
             	document.cookie = "webname="+myname;
			}
		}