svg4everybody();
// @include('detect.js')
// @include('globals.js')

$document.ready(function(){

  $('.datepicker').on('click', function(e){e.preventDefault();}).datepicker({
    dateFormat : "yy-mm-dd",
    prevText: '',
    nextText: '',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
  	dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    changeMonth: true,
    changeYear: true,
    isRTL: false,
  });

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
