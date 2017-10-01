$(document).ready(function() {
  $(".task").click(function() {
    //$(this).fadeOut( "slow", function() {
    $("#finished ul").append($(this));

    });
  // $(".task").click(function() {
  //   if($this).find("input").is(":checked")){
  //     $("#todo ul").append($(this));
  //   })
  // });
//});

// $( document ).ready(function() {
//   $(".task").click(function() {
//       $(this).fadeOut( "slow", function() {
//         if($(this).find("input").is(":checked")){
//           $(this).appendTo(".finished").addClass("finished-task");
//         }else{
//           $(this).appendTo(".todo").removeClass("finished-task");
//         }
//         $(this).fadeIn("slow");
//       });
//   });
//   $(".finished-task input").prop( "disabled", true ); //Disable
// });
