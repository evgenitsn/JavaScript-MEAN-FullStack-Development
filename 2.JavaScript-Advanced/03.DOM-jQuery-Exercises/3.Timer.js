function timer () {
  $('#start-timer').on('click', start)
  $('#stop-timer').on('click', stop)
  let started = false
  let seconds = 0
  let minutes = 0
  let hours = 0
  let timer
  function start () {
    if (!started) {
      timer = setInterval(step, 1000)
      started = true
    }
  }

  function stop () {
    clearInterval(timer)
    started = false
  }
  function step () {
    seconds++
    seconds %= 60
    $('#seconds').text(seconds < 10 ? '0' + seconds : seconds)
    if (seconds === 0) {
      minutes++
      minutes %= 60
      $('#minutes').text(minutes < 10 ? '0' + minutes : minutes)
      if (minutes === 0) {
        hours++
        $('#hours').text(hours < 10 ? '0' + hours : hours)
      }
    }
  }
}