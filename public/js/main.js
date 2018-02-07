$(function() {
  /**
   * Initialize foundation
   */
  $(document).foundation();

  /**
   * Register functions
   */
  $(window).on('load resize', handleLoad);
  $('#login').on('submit', handleLogin); /* on login */
  $('#logout').on('click', handleLogout); /* on logout */


  /* functions */
  function handleLoad() {
    const footer = $('#footer');
    if ($('.title-bar').is(':visible')) {
      $('#index-menu').removeClass('addFloat');
    } else {
      $('#index-menu').addClass('addFloat');
    }
  }

  function handleLogin(e) {
    e.preventDefault();

    clearError();

    const name = $("#userName").val();
    const pwd = $("#userPassword").val();

    if (name.length !== 0 && pwd.length !== 0) {
      $.post('/login', {
          username: name,
          password: pwd
        })
        .fail(function(data) {
          console.log(data);
          if (data.status === 400) {
            const responseText = JSON.parse(data.responseText);
            if (responseText.length >= 1) {
              showError(responseText[0].msg, "error");
            } else {
              showError(responseText.msg, "error");
            }
          }
        })
        .done(function(data) {
          console.log('Data Loaded: ' + JSON.stringify(data));
          window.location.href = '/user/home';
        });

    } else {

      if (name.length === 0) {
        showError("Username field is empty", "error");
      }
      if (pwd.length == 0) {
        showError("Password field is empty", "error");
      }
    }

  }

  function handleLogout(e) {
    e.preventDefault();
    $.get('/logout')
      .done(function(data) {
        if (typeof data.redirect === 'string') {
          window.location = data.redirect
        }
      });
  }

  /**
   * Utility functions
   */

  function clearError() {
    $("#error").empty();
  }

  function showError(errorTxt, errorDiv) {
    var ulEle = $("#errorCont");
    if (ulEle.length === 0) {
      ulEle = $("<ul id='errorCont'></ul>");
    }
    ulEle.append("<li>" + errorTxt + "</li>");
    $("#" + errorDiv).html(ulEle);
  }




}());
