$(".text").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
    $(this).removeClass("rubber")  
})
$(".text").hover(function(){
$(this).addClass("rubber");        
})



