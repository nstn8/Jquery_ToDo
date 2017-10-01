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
var lines = 50;
var count = 100;
var inc = 20;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  stroke(color(0, 50, 200, 90));
  for (i = 0; i < lines; i++) {
    line(0, count, width, count);
    count = count + inc;
  }
  stroke(color(200, 0, 0, 100));
  line(100, 0, 100, height);
    /*line(0, 120, width, 120);
    line(0, 140, width, 140);
    line(0, 160, width, 160);
    line(0, 180, width, 180);
    line(0, 200, width, 200);
    line(0, 220, width, 220);
    line(0, 240, width, 240);
    line(0, 260, width, 260);
    line(0, 280, width, 280);
    line(0, 300, width, 300);*/
}
