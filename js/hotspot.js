var hotspotContainerWidth = $('.hotspot-container').width()
var hotspotContentWidth = 300

$('.hotspot').mouseover(function(){
  var hotspotPosition = $(this).position()
  // If there isn't enough space on the right side, show the content on the left side
  if (hotspotContainerWidth - hotspotPosition.left < hotspotContentWidth) {
    $(this).find('.hotspot-content').css("right", "0")
  }
})