
// Mute the video when clicked.

$("video").click(function () {
    $(this).prop("muted", !$(this).prop("muted"));
});
