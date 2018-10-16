
	$(".event").hover(function(){
		if($(this).css("box-shadow")=="none"){ 
			$(this).css({"box-shadow":"0px 3px 20px black","z-index":"1"}) // hovered event does not have shadow place shadow
		}else{
			var id = "#"+$(this).attr("id")+".dropdown"; //select id of clicked event to string
			if($(id).css("display")=="block"){//if this event dropdown is active do not remove shadow
			}else{
				$(".event").css({"box-shadow":"none","z-index":"0"}) // if there is a shadow ,remove it
			}
		}
		
	})
		$(".event").click(function(){
		var id = "#"+$(this).attr("id")+".dropdown"; //select id of clicked event to string
		if ($(id).css("display")=="block"){ // if selected event is already dropped, hide
			$(id).hide(200);
			$(".event").css({"box-shadow":"none","z-index":"0"})

		}else{//show new event drop
			$(".event").css({"box-shadow":"none","z-index":"0"})
			$(".dropdown").css("display","none") //hide all drops
			$(id).show(200) //shows selected drop
			$(this).css({"box-shadow":"0px 3px 20px black","z-index":"2"})
		}
	})