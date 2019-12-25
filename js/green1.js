
	$(function(){
	   		$(".nav_left").mouseover(function(){
	   			$(".nav_web_active").css("display","block")
                })
	   		$(".nav_left").mouseout(function(){
	   				$(".nav_web_active").css("display","none")
        
	   		})
	    $(".menu_2").hover(function(e){
	    	var bgy = parseInt($(this).children("i").css("background-position-y"))
	    	console.log(bgy)
	         $(this).children("i").css("background-position-y",-51+"px")

	    },function(){
	    	$(this).children("i").css("background-position-y",-16+"px")
	    })
	     $(".menu_3").hover(function(e){
	    	var bgy = parseInt($(this).children("i").css("background-position-y"))
	    	console.log(bgy)
	         $(this).children("i").css("background-position-y",-51+"px")

	    },function(){
	    	$(this).children("i").css("background-position-y",-16+"px")
	    })
	     $(".menu_4").hover(function(e){
	    	var bgy = parseInt($(this).children("i").css("background-position-y"))
	    	console.log(bgy)
	         $(this).children("i").css("background-position-y",-51+"px")

	    },function(){
	    	$(this).children("i").css("background-position-y",-16+"px")
	    })
	   $(".menu_5").hover(function(e){
	    	var bgy = parseInt($(this).children("i").css("background-position-y"))
	    	console.log(bgy)
	         $(this).children("i").css("background-position-y",-51+"px")

	    },function(){
	    	$(this).children("i").css("background-position-y",-16+"px")
	    })
	    $(".foot_yidong").mouseover(function(){
	   			if($(".foot_shou").css("display")=="block"){
	   				$(".foot_shou").css("display","none")
        
	   			}else{
	   				$(".foot_shou").css("display","block")

	   			}
	   		}).trigger("mouseover")
	   	$(".main_bugai").hover(function(){
            $(this).css("background","rgba(245, 245, 245, 0.6)")
            $(this).css("border-left-color","#1E9E69")
          $(this).children().siblings().children("h5").css("color","#1E9E69")
       
           
//        $(this).css("width","683px")
         },function(){
     		$(this).css("background","#fcfcfc")  
     		 $(this).css("border-left-color","#FCFCFC")
   		   $(this).children().siblings().children("h5").css("color","#474545")
         
        
// 		    $(this).css("width","683px")
         })	
	   	
	   	$(document).scroll(function(){
					console.log($(document).scrollTop())
					if ($(document).scrollTop()>350) {
						$(".xiangshang").css("display","block")
					} else{
						$(".xiangshang").css("display","none")
					}
				}).trigger("scroll")
				$(".xiangshang").click(function(){
//					$("html").scrollTop(0)
                    $("html").animate({
                    	scrollTop:0
                    },1000)
				})
	   	
	   	$(document).scroll(function(){
					console.log($(document).scrollTop())
					if ($(document).scrollTop()>350) {
						$(".weixin").css("display","block")
					} else{
						$(".weixin").css("display","none")
					}
				})
	   	 
	   	
	   	$(document).scroll(function(){
					console.log($(document).scrollTop())
					if ($(document).scrollTop()>350) {
						$(".fankui").css("display","block")
					} else{
						$(".fankui").css("display","none")
					}
				}) 
	         
	    
	    
	    	$(".tuandui_teams ul li").hover(function(){
            $(this).css("background","#57B382")
            $(this).children().siblings().siblings("h4").css("color","#FFFFFF")
            $(this).children().siblings().siblings().siblings("p").css("color","#FFFFFF")
          },function(){
     		$(this).css("background","#F4F3F3")  
     	       $(this).children().siblings().siblings("h4").css("color","#8C8C8C")
     	         $(this).children().siblings().siblings().siblings("p").css("color","#858585")
         })	
           $(".tuandui_teams ul li").hover(function(e){
	    	var bgy = parseInt($(this).children("i").css("background-position-y"))
	    	console.log(bgy)
	         $(this).children("i").css("background-position-y",-116+"px")

	    },function(){
	    	$(this).children("i").css("background-position-y",-5+"px")
	    })
         
        
        
        $(function(){
			$(".jiancetu a").click(function(){
				$(".jiancetu").hide()
			})
		})
         
         
	})
	
	
   
    	 