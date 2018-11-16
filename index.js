
$(document).ready(function() {
  let time = new Date()
  let hours = time.getHours()
  let min = time.getMinutes()
  let description
  if (hours > 12) {
    description = "pm"
  } else {
    description = "am"
  }
  $('#clock').append(hours + ":" + min + " " + description)
});
