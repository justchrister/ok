
$(document).ready(function(){
  $("a").hover(function(){
    var classes = ["abg01", "abg02", "abg03"];
    var curclass = classes[~~(Math.random()*classes.length)];
    $(this).addClass(curclass);  //Add the active class to the area is hovered
  }, function () {
      $(this).removeClass("abg01");
      $(this).removeClass("abg02");
      $(this).removeClass("abg03");
  });
});
