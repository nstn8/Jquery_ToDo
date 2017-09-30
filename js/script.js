$(document).ready(function($) {
   $(":checkbox").change(function(event) {
     let element = $(this).parents("li");
     if($(this).prop("checked")){
       element.fadeOut("slow", function() {
           $("#completed").append(element);
           element.fadeIn("slow");
           element.removeClass("open");
           element.addClass("closed");
       })
     } else if(!$(this).prop("checked")) {
       element.fadeOut("slow", function() {
           $("#todo").append(element);
           element.fadeIn("slow");
           element.removeClass("closed");
           element.addClass("open");
       })
     }
   });
 });
