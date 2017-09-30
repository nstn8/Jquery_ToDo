$(document).ready(function(){
  $(":checkbox").click(function(){
    var that = $(this).parent();
  if ($(this).is(":checked")){
    that.fadeOut("slow", function(){
      $("#completed").append(that);
      that.fadeIn("slow")
      })
    }
    else {
      that.fadeOut("slow", function(){
        $("#undone").append(that);
        that.fadeIn("slow")
      })
    };
  })
})
