
$(document).ready(function() {
  setInterval(myTimer, 1000);
  function myTimer() {
    let time = new Date()
    let hours = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    if (sec < 10) {
      sec = "0" + sec
    }
    if (min < 10) {
      min = "0" + min
    }
    let description
    if (hours > 12) {
      description = "pm"
    } else {
      description = "am"
    }
    $('#clock').empty().append(hours + ":" + min + ":" + sec + description)
    $('#button1').click( function() {
      $('#clock').removeClass();
      $('#clock').addClass('clock1');
    });
    $('#button2').click( function() {
      $('#clock').removeClass();
      $('#clock').addClass('clock2');
    });
    $('#button3').click( function() {
      $('#clock').removeClass();
      $('#clock').addClass('clock3');
    });
    $('button').click( function() {
      $('#clock').removeClass();
      $('#clock').addClass('clock1');
    });


  }
});
