/* Submit this function to judge */
$(function () {
  const appId = 'kid_BJXTsSi-e'
  const appDataUrl = `https://baas.kinvey.com/appdata/${appId}/knock`
  const appLoginUrl = `https://baas.kinvey.com/user/${appId}/login`
  const username = 'guest'
  const password = 'guest'
  const base64login = btoa(username + ':' + password)

  let message = 'Knock Knock.'
  let authenticationToken
  $.post({
    url: appLoginUrl,
    headers: {
      Authorization: `Basic ${base64login}`
    },
    data: {
      'username': username,
      'password': password
    }
  })
   .then(function (data) {
     authenticationToken = data._kmd.authtoken
     processRequests()
   })
   .catch(renderError)

  function processRequests() {
    if (message != '') {
      $.get({
        url: `${appDataUrl}?query=${message}`,
        headers: {
          Authorization: `Kinvey ${authenticationToken}`
        }
      })
       .then(function (data) {
         console.log(message)
         renderMessage(message) // just for fun
         message = data.message || ''
         console.log(data.answer)
         renderMessage(data.answer) // just for fun

         processRequests()
       })
       .catch(renderError)
    }
  }

  function renderMessage(message) {
    $('#result')
      .append($('<li>')
        .text(message))
  }

  function renderError(error) {
    console.dir(error)
  }
})