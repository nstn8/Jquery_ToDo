
$(document).ready(function() {
  $(".task").click(function() {
    $(this).fadeOut("slow", function() {
      if($(this).children("input").is(":checked")) {
        $(this).appendTo("#finished").addClass("done");
      } else {
        $(this).appendTo("#todo").removeClass("done");
      }
    });
    $(this).fadeIn("slow");
  });
});

var lines = 50;
var inc = 20;
function setup() {
  var count = 100;
  createCanvas(window.innerWidth, window.innerHeight);
  stroke(color(0, 50, 200, 90));
  for (i = 0; i < lines; i++) {
    line(0, count, width, count);
    count = count + inc;
  }
  stroke(color(200, 0, 0, 100));
  line(100, 0, 100, height);
  stroke(color(200, 0, 0, 50));
  line(width-100, 0, width-100, height);
  stroke(color(200));
  fill(color(255, 255, 255));
  ellipse(55, 130, 30, 30);
  stroke(color(200));
  fill(color(255, 255, 255));
  ellipse(55, 530, 30, 30);

}
window.onresize = function() {
	setup();
}
