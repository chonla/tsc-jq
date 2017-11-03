declare var $: any;

var tick = 0;
var timerHandler: any;

function ticktock() {
  tick++;
  $('#time').html(tick)
  timerHandler = setTimeout(ticktock, 1000)
}

$(window).on('unload', () => {
  clearTimeout(timerHandler)
});

$(() => {
  ticktock()
});