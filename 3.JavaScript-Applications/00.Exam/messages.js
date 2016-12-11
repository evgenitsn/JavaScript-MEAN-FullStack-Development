function startApp() {
  sessionStorage.clear();
  initialUser()
  showHideMenuLinks()

  const kinveyBaseUrl = "https://baas.kinvey.com/";
  const kinveyAppKey = "kid_SkJ7ddqXl";
  const kinveyAppSecret = "c965dd1d266f4cf7abe05fc11035ab7a";
  const kinveyAppAuthHeaders = {
    'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
  };

  function showHideMenuLinks() {
    $("#linkMenuAppHome").show();
    if (sessionStorage.getItem('authToken') === null) {
      // No logged in user
      showHomeView();
      $(".useronly").hide()
      $(".anonymous").show()
    } else {
      // We have logged in user
      showView('viewUserHome')
      $(".anonymous").hide()
      $(".useronly").show()
    }
  }

  $("#linkMenuAppHome").click(showHomeView)
  $("#linkMenuLogin").click(showLoginView)
  $("#linkMenuRegister").click(showRegisterView)
  $("#linkMenuRegister").click(showRegisterView)
  $('#linkMenuUserHome').click(showUserHomeView)

  $("#linkMenuMyMessages").click(showMyMessagesView);
  $("#linkUserHomeMyMessages").click(showMyMessagesView);

  $("#linkMenuArchiveSent").click(showMyArchivesView);
  $("#linkUserHomeArchiveSent").click(showMyArchivesView);

  $("#linkUserHomeSendMessage").click(showAddMsgView);
  $("#linkMenuSendMessage").click(showAddMsgView);

  $("#linkMenuLogout").click(logoutUser);

  //bind forms
  $("#formLogin").submit(loginUser);
  $("#formRegister").submit(registerUser);
  $("#formSendMessage").submit(createMsg);
  $("form").submit(function (event) { event.preventDefault() });

  $("#infoBox, #errorBox").click(function () {
    $(this).fadeOut();
  });

  $(document).on({
    ajaxStart: function () { $("#loadingBox").show() },
    ajaxStop: function () { $("#loadingBox").hide() }
  });

  function showView(viewName) {
    // Hide all views and show the selected view only
    $('main > section').hide();
    $('#' + viewName).show();
  }

  function showHomeView() {
    showView('viewAppHome');
  }

  function showUserHomeView() {
    showView('viewUserHome');
  }

  function showLoginView() {
    showView('viewLogin');
    $('#formLogin').trigger('reset');
  }

  function showRegisterView() {
    $('#formRegister').trigger('reset');
    showView('viewRegister');
  }

  function showMyArchivesView() {
    $('#sentMessages').empty();
    showView('viewArchiveSent');
    let messagesTable = $('<table>')
      .append($('<tr>').append(
        '<th>To</th>',
        '<th>Message</th>',
        '<th>Date Received</th>')
      );
    const kinveyMessagesUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages?query={\"sender_username\":\"" + sessionStorage.getItem('username') + "\"}";
    $.ajax({
      method: "GET",
      url: kinveyMessagesUrl,
      headers: getKinveyUserAuthHeaders(),
      success: loadMessagesSuccess,
      error: handleAjaxError
    });

    function formatDate(dateISO8601) {
      let date = new Date(dateISO8601);
      if (Number.isNaN(date.getDate()))
        return '';
      return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
        "." + date.getFullYear() + ' ' + date.getHours() + ':' +
        padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

      function padZeros(num) {
        return ('0' + num).slice(-2);
      }
    }

    function loadMessagesSuccess(myMessages) {
      showInfo('Messages loaded.');
      let messagesTable = $('<table>')
        .append($('<tr>').append(
          '<th>To</th>',
          '<th>Message</th>',
          '<th>Date Received</th>',
          '<th>Actions</th>')
        );
      for (let message of myMessages) {
        let links = [];
        let deleteLink = $('<button>Delete</button>')
          .click(deleteMsg.bind(this, message));
        links = [deleteLink];
        messagesTable.append($('<tr>').append(
          $('<td>').text(message.recipient_username),
          $('<td>').text(message.text),
          $('<td>').text(formatDate(message._kmd.lmt)),
          $('<td>').append(links)
        ));
      }
      $('#sentMessages').append(messagesTable);
    }
  }

  function showMyMessagesView() {
    $('#myMessages').empty();
    showView('viewMyMessages');
    let messagesTable = $('<table>')
      .append($('<tr>').append(
        '<th>From</th>',
        '<th>Message</th>',
        '<th>Date Received</th>')
      );
    const kinveyMessagesUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages?query={\"recipient_username\":\"" + sessionStorage.getItem('username') + "\"}";
    $.ajax({
      method: "GET",
      url: kinveyMessagesUrl,
      headers: getKinveyUserAuthHeaders(),
      success: loadMessagesSuccess,
      error: handleAjaxError
    });

    function formatDate(dateISO8601) {
      let date = new Date(dateISO8601);
      if (Number.isNaN(date.getDate()))
        return '';
      return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
        "." + date.getFullYear() + ' ' + date.getHours() + ':' +
        padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

      function padZeros(num) {
        return ('0' + num).slice(-2);
      }
    }

    function formatSender(name, username) {
      if (name==='undefined' || name === '')
        return username;
      else
        return username + ' (' + name + ')';
    }

    function loadMessagesSuccess(myMessages) {
      showInfo('Messages loaded.');
      let messagesTable = $('<table>')
        .append($('<tr>').append(
          '<th>From</th>',
          '<th>Message</th>',
          '<th>Date Received</th>')
        );
      for (let message of myMessages) {
        messagesTable.append($('<tr>').append(
          $('<td>').text(formatSender(message.sender_name, message.sender_username)),
          $('<td>').text(message.text),
          $('<td>').text(formatDate(message._kmd.lmt))
        ));
      }
      $('#myMessages').append(messagesTable);
    }
  }

  function showAddMsgView() {
    $('select').empty()
    showView('viewSendMessage');

    $('#formSendMessage').trigger('reset');
    let users = []
    $.ajax({
      method: 'GET',
      url: kinveyBaseUrl + 'user/' + kinveyAppKey,
      headers: getKinveyUserAuthHeaders(),
      success: function (data) {
        for (let obj of data) {
          users.push(obj)
        }
        $.each(users, function(key, value) {
          $('select')
            .append($("<option></option>")
              .attr("value",value.username)
              .text(formatSender(value.name, value.username)));
        });
      },
      error: handleAjaxError
    })

    function formatSender(name, username) {
      if (!name)
        return username;
      else
        return username + ' (' + name + ')';
    }
  }

  function loginUser() {
    const kinveyLoginUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/login";
    let userData = {
      username: $('#formLogin input[name=username]').val(),
      password: $('#formLogin input[name=password]').val()
    };
    $.ajax({
      method: "POST",
      url: kinveyLoginUrl,
      headers: kinveyAppAuthHeaders,
      data: userData,
      success: loginSuccess,
      error: handleAjaxError
    });

    function loginSuccess(userInfo) {
      saveAuthInSession(userInfo);
      showHideMenuLinks();
      showView('viewUserHome')
      showInfo('Login successful.');
      initialUser()
    }
  }

  function registerUser() {
    const kinveyRegisterUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/";
    let userData = {
      username: $('#formRegister input[name=username]').val(),
      password: $('#formRegister input[name=password]').val(),
      name: $('#formRegister input[name=name]').val()
    };
    $.ajax({
      method: "POST",
      url: kinveyRegisterUrl,
      headers: kinveyAppAuthHeaders,
      data: userData,
      success: registerSuccess,
      error: handleAjaxError
    });

    function registerSuccess(userInfo) {
      saveAuthInSession(userInfo);
      showHideMenuLinks();
      showView('viewUserHome')
      showInfo('User registration successful.');
      initialUser()
    }
  }

  function logoutUser() {
    sessionStorage.clear();
    $('#spanMenuLoggedInUser').text("");
    showHideMenuLinks();
    showHomeView()
    showInfo('Logout successful.');
  }

  function deleteMsg(message) {
    const kinveyMessageUrl = kinveyBaseUrl + "appdata/" +
      kinveyAppKey + "/messages/" + message._id;
    $.ajax({
      method: "DELETE",
      url: kinveyMessageUrl,
      headers: getKinveyUserAuthHeaders(),
      success: deleteMsgSuccess,
      error: handleAjaxError
    });

    function deleteMsgSuccess(response) {
      showMyArchivesView();
      showInfo('Message deleted.');
    }
  }

  function createMsg() {
    const kinveyMsgUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages";
    let name = ''
    if (sessionStorage.getItem('name') === undefined){
      name = null
    } else {
      name = sessionStorage.getItem('name')
    }
    let msgData = {
      sender_username: sessionStorage.getItem('username'),
      sender_name: name,
      recipient_username: $('#formSendMessage option:selected').val(),
      text: $('#formSendMessage input[name=text]').val()
    };

    $.ajax({
      method: "POST",
      url: kinveyMsgUrl,
      headers: getKinveyUserAuthHeaders(),
      data: msgData,
      success: createMsgSuccess,
      error: handleAjaxError
    });

    function createMsgSuccess(response) {
      $('#formSendMessage')[0].reset()
      showInfo('Message Sent.');
    }
  }

  function saveAuthInSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username)
    let name = userInfo.name;
    sessionStorage.setItem('name', name)
  }

  function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
      errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
      errorMsg = response.responseJSON.description;
    showError(errorMsg);
  }

  function showInfo(message) {
    $('#infoBox').text(message);
    $('#infoBox').show();
    setTimeout(function () {
      $('#infoBox').fadeOut();
    }, 3000);
  }

  function showError(errorMsg) {
    $('#errorBox').text("Error: " + errorMsg);
    $('#errorBox').show();
  }

  function getKinveyUserAuthHeaders() {
    return {
      'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
    };
  }

  function initialUser() {
    let username = sessionStorage.getItem('username')
    $('#spanMenuLoggedInUser').text("Welcome, " + username + "!");
    $('#viewUserHomeHeading').text("Welcome, " + username + "!");
  }
}