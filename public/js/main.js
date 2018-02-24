$(function() {
  /**
   * Initialize foundation
   */
  $(document).foundation();

  $('.screenText').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  /**
   * Register functions
   */
  $(window).on('load resize', handleLoad);
  $('#login').on('submit', handleLogin); /* on login */
  $('#editProfile').on('submit', handleUpdateProfile); /* update profile */
  $('#confirmUser').on('submit', handleVerifyUser); /* verify user */
  $('#forgotPassword').on('submit', handleUpdatePassword); /* post update password */
  $('#signup').on('submit', handleSignUp); /* Sign up */
  $('#reset').on('click', clearMessage); /* Clear messages on click of reset */
  $('#changePassword').on('submit', handleChangePassword); /* post change password */
  $('#searchIcon').on('click', displaySearchBar);
  $('.js-search-close').on('click', hideSearchBar);
  $('.menuDiv').on('click', showUserMenuD);
  $(document).on('click', '.menuMode', showUserMenu);
  $(document).on('click', '.close-icon', hideUserMenu);


  var user = null;


  /* functions */
  function handleLoad() {
    const footer = $('#footer');
    if ($('.title-bar').is(':visible')) {
      $('#index-menu').removeClass('addFloat');
    } else {
      $('#index-menu').addClass('addFloat');
    }

    var width = $(window).width();
    if (width < 400) {
      $('.menuDiv').addClass('menuMode');
      $('#user-menu').removeClass('show');
    } else {
      $('#user-menu').removeClass('show');
      $('#user-menu').css('width', '180px');
      $('.close-icon').remove();
      $('.menuDiv').removeClass('menuMode');
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    clearMessage();
    const name = $('#userName').val();
    const pwd = $('#userPassword').val();

    if (name.length !== 0 && pwd.length !== 0) {
      const userNameRegex = /^[a-zA-Z0-9._]{1,30}$/;
      const nameVerifies = userNameRegex.test(name);

      if (nameVerifies) {
        $.post('/login', {
            username: name,
            password: pwd
          })
          .fail(function(data) {
            const responseText = data.responseJSON;
            if (data.status === 400) {
              showMessage(responseText[0].msg, 'error');
            }
            if (data.status === 401) {
              showMessage(responseText.msg, 'error');
            }
          })
          .done(function(data) {
            window.location.href = '/user/home';
          });
      } else {
        showErrorCircle('userName');
        showMessage('Usernames can only use letters, numbers, underscores and periods.', 'error');

      }
    } else {

      if (name.length === 0) {
        showErrorCircle('userName');
        $('#emptyFields').removeClass('hide');
      }
      if (pwd.length == 0) {
        showErrorCircle('userPassword');
        $('#emptyFields').removeClass('hide');
      }
    }
  }

  function handleUpdateProfile(e) {
    e.preventDefault();

    clearMessage();

    const username = $('#userName').val();
    const email = $('#email').val();

    if (username.length !== 0 && email.length !== 0) {

      const pattern = /^[a-zA-Z0-9._]{1,30}$/;
      const nameVerifies = pattern.test(username);
      if (nameVerifies) {
        $.post('/user/editProfile', {
            username: username,
            email: email
          })
          .fail(function(data) {
            if (data.status === 400) {
              const responseText = data.responseJSON;
              if (responseText.length >= 1) {
                showMessage(responseText[0].msg, 'error');
              } else {
                showMessage(responseText.msg, 'error');
              }
            }
          })
          .done(function(data) {
            showMessage(data.msg, 'msg');
            $('#loginLink').removeClass('hide');
            $('.btns').addClass('hide');
          });
      } else {
        showErrorCircle('userName');
        showMessage('Usernames can only use letters, numbers, underscores and periods.', 'error');

      }
    } else {
      if (username.length === 0) {
        showErrorCircle('userName');
        $('#emptyFields').removeClass('hide');
      }
      if (email.length == 0) {
        showErrorCircle('email');
        $('#emptyFields').removeClass('hide');
      }
    }
  }

  function handleVerifyUser(e) {
    e.preventDefault();

    clearMessage();

    const username = $('#username').val();

    if (username.length !== 0) {

      $.post('/verifyUser', {
          username: username
        })
        .fail(function(data) {
          if (data.status === 401) {
            const responseText = data.responseJSON;
            showMessage(responseText.msg, 'error');
          }
        })
        .done(function(data) {
          $('#username').val('');
          $('#forgotPassword').removeClass('hide');
          $('#confirmUser').addClass('hide');
          user = data;
        });

    } else {
      if (username.length === 0) {
        showErrorCircle('username');
        $('#emptyFields').removeClass('hide');
      }
    }
  }

  function handleUpdatePassword(e) {
    e.preventDefault();
    clearMessage();

    const newPwd = $('#newPassword').val();
    const confirmPwd = $('#confirmPassword').val();

    if (newPwd.length === 0) {
      showErrorCircle('newPassword');
      $('#emptyFields').removeClass('hide');
    }

    if (confirmPwd.length === 0) {
      showErrorCircle('confirmPassword');
      $('#emptyFields').removeClass('hide');
    }

    if (newPwd.length !== 0 && confirmPwd !== newPwd) {
      showErrorCircle('confirmPassword');
      $('#emptyFields').addClass('hide');
      showMessage('Confirm password doesn\'t match with the new password', 'error');
    }

    if (newPwd.length !== 0 && confirmPwd.length !== 0 && newPwd === confirmPwd) {
      $.post('/forgotPassword', {
          newPassword: newPwd,
          user: user
        })
        .fail(function(data) {
          if (data.status === 400) {
            const responseText = data.responseJSON;
            showMessage(responseText.msg, 'error');
          }
        })
        .done(function(data) {
          showMessage(data.msg, 'msg');
          $('.btns').addClass('hide');
          $('#loginLink').removeClass('hide');
        });
    }
  }

  function handleChangePassword(e) {
    e.preventDefault();
    clearMessage();

    const oldPwd = $('#oldPassword').val();
    const newPwd = $('#newPassword').val();
    const confirmPwd = $('#confirmPassword').val();

    if (newPwd.length === 0) {
      showErrorCircle('newPassword');
      $('#emptyFields').removeClass('hide');
    }

    if (confirmPwd.length === 0) {
      showErrorCircle('confirmPassword');
      $('#emptyFields').removeClass('hide');
    }

    if (newPwd.length !== 0 && confirmPwd !== newPwd) {
      showErrorCircle('confirmPassword');
      $('#emptyFields').addClass('hide');
      showMessage('Confirm password doesn\'t match with the new password', 'error');
    }

    if (newPwd.length !== 0 && confirmPwd.length !== 0 && newPwd === confirmPwd) {
      $.post('/user/changePassword', {
          oldPassword: oldPwd,
          newPassword: newPwd
        })
        .fail(function(data) {
          if (data.status === 400) {
            const responseText = data.responseJSON;
            showMessage(responseText.msg, 'error');
          }
        })
        .done(function(data) {
          showMessage(data.msg, 'msg');
          $('.btns').addClass('hide');
          $('#loginLink').removeClass('hide');
        });
    }



  }

  function handleSignUp(e) {
    e.preventDefault();
    clearMessage();

    const name = $("#userName").val();
    const email = $("#userEmail").val();
    const pwd = $("#userPassword").val();
    const confirmpwd = $("#confirmPassword").val();
    const userNameRegex = /^[a-zA-Z0-9._]{1,30}$/;
    const nameVerifies = userNameRegex.test(name);


    if (name.length === 0) {
      showErrorCircle('userName');
      $('#emptyFields').removeClass('hide');
    }

    if (!nameVerifies) {
      showErrorCircle('userName');
      showMessage('Usernames can only use letters, numbers, underscores and periods.', 'error');
    }

    if (email.length === 0) {
      showErrorCircle('userEmail');
      $('#emptyFields').removeClass('hide');
    }

    if (pwd.length === 0) {
      showErrorCircle('userPassword');
      $('#emptyFields').removeClass('hide');
    }

    if (confirmpwd.length === 0) {
      showErrorCircle('confirmPassword');
      $('#emptyFields').removeClass('hide');
    }

    if (pwd.length !== 0 && confirmpwd.length !== 0 && confirmpwd !== pwd) {
      showErrorCircle('confirmPassword');
      $('#emptyFields').addClass('hide');
      showError('Confirm password doesn\'t match with password', 'error');
    }

    // const error = 'Usernames can only use letters, numbers, underscores and periods.';
    // const name = 'OLIVE';
    // const pwd = 'OLIVE';
    // const email = 'geeta@gmail.com';
    if (name.length !== 0 && pwd.length !== 0 && confirmpwd.length !== 0 && email.length !== 0) {
      $.post('/signup', {
          username: name,
          password: pwd,
          email: email
        })
        .fail(function(data) {
          if (data.status === 400) {
            const responseText = data.responseJSON;
            if (responseText.length >= 1) {
              showMessage(responseText[0].msg, 'error');
            } else {
              showMessage(responseText.msg, 'error');
            }
          }
        })
        .done(function(data) {
          showMessage(data.msg, 'msg');
          $('.btns').addClass('hide');
          $('#loginLink').removeClass('hide');
        });
    }
  }

  function displaySearchBar(e) {
    e.preventDefault();

    $('#headerDiv').removeClass('show').addClass('hide');
    $('#search').addClass('show');
  }

  function hideSearchBar(e) {
    e.preventDefault();

    $('#headerDiv').removeClass('hide').addClass('show');
    $('#search').removeClass('show');
  }

  function showUserMenuD(e) {
    e.preventDefault();
    const userIcon = $('#user-menu');
    if (!userIcon.hasClass('show')) {
      $('#user-menu').addClass('show');
    } else {
      $('#user-menu').removeClass('show');
    }

  }

  function showUserMenu(e) {
    e.preventDefault();
    const userIcon = $('#user-menu');
    $('#user-menu').addClass('show');
    userIcon.css('width', '250px');
    userIcon.prepend('<div class="close-icon"><i class="fi-x"></i></div>');
  }

  function hideUserMenu(e) {
    e.preventDefault();
    const userIcon = $('#user-menu');
    $('#user-menu').removeClass('show');
    userIcon.css('width', '180px');
    $('.close-icon').remove();


  }





  /**
   * Utility functions
   */

  function clearMessage() {
    $('#error').empty();
    $('#msg').empty();
    $('#emptyFields').addClass('hide');
    $('.icon-error').remove();
  }

  function showMessage(msgTxt, msgDiv) {
    var ulEle = $('#msgcont');
    if (ulEle.length === 0) {
      ulEle = $('<ul id=\'msgcont\'></ul>');
    }
    ulEle.append('<li>' + msgTxt + '</li>');
    $('#' + msgDiv).html(ulEle);
  }

  function showErrorCircle(circleInp) {
    const inpEle = $('#' + circleInp);
    const spanEle = $('<span class=\'icon-error\'><i class=\'fi-x-circle\'></i></span>');
    inpEle.after(spanEle);
  }




}());
