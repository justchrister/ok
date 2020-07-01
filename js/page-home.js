var timeoutid = 0;
$(document).on("mousemove", function (e) {
  var xPos = e.pageX;
  var yPos = e.pageY;
  // console.log(xPos, yPos);
  $("span").css({
    top: yPos,
    left: xPos - 50
  });

  $("span").toggleClass("go");
});

$('#projects nav').randomize('article');
$('article').randomize('figure');
$('article').randomize('figure');
