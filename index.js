
$(document).ready(function() {
  let myVar = setInterval(myTimer, 1000);
  function myTimer() {
    let time = new Date()
    let hours = time.getHours()
    let min = time.getMinutes()
    if (min < 10) {
      min = "0" + min
    }
    let description
    if (hours > 12) {
      description = "pm"
    } else {
      description = "am"
    }
    $('#clock').empty().append(hours + ":" + min + " " + description)
  }
});
