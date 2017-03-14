// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
    $("#faq dt").each(function(){
      $(this).click(function() {
	       $(this).addClass("red");
     })
    });


    $("#faq dt").each(function(){
      $(this).dblclick(function() {
         $(this).addClass("white");
     })
    });


    $("#orderedlist li").each(function(){
      $(this).addClass("blue");
    });


    $("#orderedlist li:last").hover(
      function(){
        $(this).addClass("green");
      },
      function(){
        $(this).removeClass("green");
      }
    );


    $("h3").click(function() {
	     $("dt").fadeIn("slow");
    });
});
