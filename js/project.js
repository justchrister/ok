$('thumbnail').click(function() {
  var clicked_thumbnail   = $(this),
      index  = clicked_thumbnail.index(),
      text   = clicked_thumbnail.text();
  $( "#frame" ).html($( this ).html());
  $(".active").removeClass("active");
  $(this).addClass("active");
});


// Get the youtube thumbnail
$( ".video.youtube" ).each(function( index ) {
  var iframe           = $(this).find("iframe");
  var iframe_src       = iframe.attr('src');
  var youtube_video_id = iframe_src.match(/youtube-nocookie\.com.*(\?v=|\/embed\/)(.{11})/).pop();

  if (youtube_video_id.length == 11) {
      var video_thumbnail = 'https://i.ytimg.com/vi/'+youtube_video_id+'/maxresdefault.jpg';
      console.log(video_thumbnail);
  }
  $(this).css('background-image','url("'+video_thumbnail+'")')//set transparent
});
