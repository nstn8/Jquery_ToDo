$(document).ready(function() {
  $(".task").click(function() {
    $(this).fadeOut("slow", function() {
      if($(this).children("input").is(":checked")) {
        $(this).appendTo("#finished ul").addClass("closed");
        console.log($(this));
      } else {
        $(this).appendTo("#todo ul").removeClass("closed");
        console.log($(this));
      }
    });
    $(this).fadeIn("slow");
  });
});
