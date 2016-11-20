/* Submit this function to judge */
function solve() {
  const apiUrl = 'https://messenger-40767.firebaseio.com/messenger'
  let messagesArea = $('#messages')

  $('#refresh').on('click', function () {
    getMessages()
  })

  $('#submit').on('click', function () {
    addNewMessage()
  })

  function addNewMessage() {
    let author = $('#author').val().trim()
    let content = $('#content').val().trim()
    if (author != '' && content != '') {
      let timestamp = Date.now()
      $.ajax({
        method: 'POST',
        data: JSON.stringify({
          author,
          content,
          timestamp
        }),
        url: apiUrl + '.json',
        success: function () {
          $('#content').val('')
          getMessages()
        }
      })
    }
  }

  function getMessages() {
    $.ajax({
      method: 'GET',
      url: apiUrl + '.json',
      success: renderMessages
    })
  }

  function renderMessages(messages) {
    messagesArea.val('')
    let sortedMessages = [...Object.keys(messages)]
      .sort((mA, mB) => messages[mA].timestamp - messages[mB].timestamp)
      .map(m => messages[m])

    for (let msg of sortedMessages) {
      messagesArea.val(messagesArea.val() + `${msg.author}: ${msg.content}\n`)
      messagesArea.text(messagesArea.text() + `${msg.author}: ${msg.content}\n`) // JUDGE WTF?????
    }
  }
}