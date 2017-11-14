svg4everybody();
// @include('detect.js')
// @include('globals.js')

$document.ready(function(){
  $('#jsslider').roundSlider({
    sliderType: 'min-range',
    editableTooltip: false,
    radius: 150,
    width: 60,
    min: 0,
    max: 1000,
    value: 444,
    handleSize: 0,
    handleShape: 'square',
    circleShape: 'half-top',
    tooltipFormat: 'changeTooltip',
  });

  function changeTooltip(e) {
    let val = e.value,
    speed;

    return val;
  }
})
