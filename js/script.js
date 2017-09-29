$(document).ready(function($) {
  $(":checkbox").change(function(event) {
    if($(this).prop("checked")){
      let element = $(this).parents("li");
      element.fadeOut("slow", function() {
          $("#completed").append(element);
          element.fadeIn("slow");
          element.removeClass("open");
          element.addClass("closed");
      })
    } else if(!$(this).prop("checked")) {
      let element = $(this).parents("li");
      element.fadeOut("slow", function() {
          $("#todo").append(element);
          element.fadeIn("slow");
          element.removeClass("closed");
          element.addClass("open");
      })
    }
  });
});
