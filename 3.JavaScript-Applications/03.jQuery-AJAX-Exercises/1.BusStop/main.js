
/* Submit this function to judge */
function getInfo() {
  const apiUrl = 'https://judgetests.firebaseio.com/businfo/'
  let stopId = $('#stopId').val()
  let stopName = $('#stopName')
  let busses = $('#buses')

  $.ajax({
    method: 'GET',
    dataType: 'json',
    url: apiUrl + stopId + '.json',
    success: renderBusSchedule,
    error: renderErrorMessage
  })

  function renderBusSchedule(data) {
    stopName.text(data.name)
    busses.empty()
    for (let bus of Object.keys(data.buses)) {
      let busInfo = `Bus ${bus} arrives in ${data.buses[bus]} minutes`
      $('<li>').text(busInfo).appendTo(busses)
    }
  }

  function renderErrorMessage() {
    stopName.text('Error')
    busses.empty()
  }
}