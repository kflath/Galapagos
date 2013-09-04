/* YOU ARE IN: sample_project_folder/javascript/script.js */



//$("#photos").hover(function(){
	//$("#day").fadeOut("slow");
	//$("#day").fadeIn("slow");
//});

//hover in/out of image
$("#photos").hover(function () {
	$("#day").fadeOut(1000);
},function(){
	$("#day").fadeIn(1000);

});

//hover effect - show hidden div
 // $("li.staff-box.julie").hover(function(){
     // $("li.description.julie").show("slow");
  // },function(){  
     // $("li.description.julie").hide("slow");     
       
// });
 
 // $("li.staff-box.gracie").hover(function(){
     // $("li.description.gracie").stop(true, true).show("slow");
  // },function(){  
     // $("li.description.gracie").stop(true, false).hide("slow");     
       
// });


 // $("li.staff-box.erik").hover(function(){
     // $("li.description.erik").stop(true, true).show("slow");
  // },function(){  
     // $("li.description.erik").stop(true, false).hide("slow");     
       
// });

//$("li.staff-box.julie").click(function(){
 // $("li.description.julie").toggle();
//});

$("li.staff-box.julie").click(function(){
  $("li.description.julie").show();
});

$("li.description.julie").click(function(){
  $("li.description.julie").hide();
});

$("li.staff-box.gracie").click(function(){
  $("li.description.gracie").show();
});

$("li.description.gracie").click(function(){
  $("li.description.gracie").hide();
});

$("li.staff-box.erik").click(function(){
  $("li.description.erik").show();
});

$("li.description.erik").click(function(){
  $("li.description.erik").hide();
});


//lauren click 
$("li.staff-box.lauren").click(function(){
  $("li.description.lauren").show();
});

$("li.description.lauren").click(function(){
  $("li.description.lauren").hide();
});

//mary click
$("li.staff-box.mary").click(function(){
  $("li.description.mary").show();
});

$("li.description.mary").click(function(){
  $("li.description.mary").hide();
});

//owen click
$("li.staff-box.owen").click(function(){
  $("li.description.owen").show();
});

$("li.description.owen").click(function(){
  $("li.description.owen").hide();
});


