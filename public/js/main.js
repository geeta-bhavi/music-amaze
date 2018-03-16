$(function() {

  var mediaEle = null;

  /**
   * Initialize foundation
   */
  $(document).foundation();

  /**
   * Initialize slider
   */
  $('.screenText').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  /**
   * Initialize audio player
   */
  if (window.location.pathname.indexOf('play')) {
    $('#audioPlayer').mediaelementplayer({
      stretching: 'responsive',
      pluginPath: '../js/lib/build/',
      // When using jQuery's `mediaelementplayer`, an `instance` argument
      // is available in the `success` callback
      success: function(mediaElement, originalNode, instance) {
        mediaEle = mediaElement;
        highLightPrevNext();

        //mediaEle.play();
        $(mediaElement).on('ended', function() {
          if ($('#trackShuffle').hasClass('active')) {
            const liCount = $('li.trackList').length;
            const random = Math.floor((Math.random() * liCount) + 1);
            var liEle = $('li.trackList:nth-child(' + random + ')');


            if (liEle.hasClass('highlight')) {
              liEle = liEle.next();
              if (liEle.length === 0) {
                liEle = $('li.trackList:nth-child(1)');
              }
            }

            liEle.click();
            highLightPrevNext();

          } else {
            var liEle = $('li.trackList.highlight').next();
            if ($('#trackRepeat').hasClass('active')) {
              mediaElement.play();
            } else {
              if (liEle.length === 0) {
                callFocus($('li.trackList').first());
              } else {
                liEle.click();
              }
            }
            highLightPrevNext();
          }
        });
      },
      error: function(mediaElement, originalNode) {
        alert('There is some error at the server playing the track!');
      }
    });
  }

  function shuffleTracks(e) {
    e.preventDefault();
    if (!$(this).hasClass('inactive')) {
      $(this).toggleClass('active');
    }
  }

  function playPrevious(e) {
    e.preventDefault();
    if (!$(this).hasClass('inactive')) {
      var liEle = $('li.trackList.highlight').prev();
      liEle.click();
      highLightPrevNext();
    }
  }

  function playNext(e) {
    e.preventDefault();
    if (!$(this).hasClass('inactive')) {
      var liEle = $('li.trackList.highlight').next();
      liEle.click();
      highLightPrevNext();
    }
  }

  function highLightPrevNext() {
    if ($('li.trackList.highlight').prev().length === 0) {
      $('#trackPrev').addClass('inactive');
    } else {
      $('#trackPrev').removeClass('inactive');
    }
    if ($('li.trackList.highlight').next().length === 0) {
      $('#trackNext').addClass('inactive');
    } else {
      $('#trackNext').removeClass('inactive');
    }

    if ($('li.trackList.highlight').prev().length === 0 && $('li.trackList.highlight').next().length === 0) {
      $('#trackShuffle').addClass('inactive');
    }
  }

  function callFocus(liEle) {
    $('.trackList').removeClass('highlight');
    $('.trackItem').removeClass('fi-sound');
    liEle.addClass('highlight');
    liEle.find('.trackItem').addClass('fi-sound');
    const trackSrc = liEle.data('track-src');
    // const str = window.location.pathname;
    // const path = str.substr(0, str.lastIndexOf("/") + 1);
    // const trackId = liEle.attr('id');
    mediaEle.setSrc(trackSrc);
    mediaEle.load();
    //history.pushState(trackId, '', path + trackId);
  }

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
  $('.trackList').on('click', changeTrack); /* change track on click */
  $('#search-text').on('keyup', callSearch); /* search functionality */
  $('.js-search-icon').on('click', search); /* search functionality */
  $('#trackRepeat').on('click', linkActive);
  $('#trackLike').on('click', linkActive);
  $('#trackPrev').on('click', playPrevious); /* play previous track */
  $('#trackNext').on('click', playNext); /* play next track */
  $('#trackShuffle').on('click', shuffleTracks); /* shuffle tracks*/
  $('.playListCreate').on('click', createPlaylist); /* Create playlist */
  $(document).on('click', '.menuMode', showUserMenu);
  $(document).on('click', '.close-icon', hideUserMenu);
  $(document).on('click', '.seeAllR', seeAllResults); /* see all the tracks of search results */


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
      $('#user-menu').addClass('menuMod');
      $('#user-menu').removeClass('show');
    } else {
      $('#user-menu').removeClass('show');
      $('#user-menu').css('width', '180px');
      $('.close-icon').remove();
      $('.menuDiv').removeClass('menuMode');
      $('#user-menu').removeClass('menuMod');
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

    if (oldPwd.length === 0) {
      showErrorCircle('oldPassword');
      $('#emptyFields').removeClass('hide');
    }

    if (newPwd.length === 0) {
      showErrorCircle('newPassword');
      $('#emptyFields').removeClass('hide');
    }

    if (confirmPwd.length === 0) {
      showErrorCircle('confirmPassword');
      $('#emptyFields').removeClass('hide');
    }

    if (newPwd.length !== 0 && confirmPwd.length !== 0 && confirmPwd !== newPwd) {
      showErrorCircle('confirmPassword');
      $('#emptyFields').addClass('hide');
      showMessage('Confirm password doesn\'t match with the new password', 'error');
      if (oldPwd.length === 0) {
        $('#emptyFields').removeClass('hide');
      }
    }

    if (oldPwd.length !== 0 && newPwd.length !== 0 && confirmPwd.length !== 0 && newPwd === confirmPwd) {
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

    if (!nameVerifies && name.length !== 0) {
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
      showMessage('Confirm password doesn\'t match with password', 'error');
      if (email.length === 0 || name.length === 0) {
        $('#emptyFields').removeClass('hide');
      }
    }

    // const error = 'Usernames can only use letters, numbers, underscores and periods.';
    // const name = 'OLIVE';
    // const pwd = 'OLIVE';
    // const email = 'geeta@gmail.com';
    if (name.length !== 0 && pwd.length !== 0 && confirmpwd.length !== 0 &&
      email.length !== 0 && pwd === confirmpwd && nameVerifies) {
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
    if (e) {
      e.preventDefault();
    }

    $('#headerDiv').removeClass('show').addClass('hide');
    $('#search').addClass('show');

    /* hide rest of data for search view */
    $('.js-nonSearchView').addClass('hide');
    $('.js-searchView').removeClass('hide');
  }

  function hideSearchBar(e) {
    e.preventDefault();
    $('#search-text').val('');
    $('#headerDiv').removeClass('hide').addClass('show');
    $('#search').removeClass('show');

    /* show rest of data and hide search view*/
    $('.js-nonSearchView').removeClass('hide');
    $('.js-searchView').addClass('hide');
    //$('.js-searchView').empty();
    if (window.location.pathname.indexOf('user') === -1) {
      window.location.pathname = '/user/home';
    }
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

  function changeTrack(e) {
    if (!$(this).hasClass('highlight')) {
      $('.trackList').removeClass('highlight');
      $('.trackItem').removeClass('fi-sound');
      $(this).addClass('highlight');
      $(this).find('.trackItem').addClass('fi-sound');
      const trackSrc = $(this).data('track-src');
      //const str = window.location.pathname;
      //const path = str.substr(0, str.lastIndexOf("/") + 1);
      //const trackId = $(this).attr('id');
      mediaEle.setSrc(trackSrc);
      mediaEle.load();
      mediaEle.play();
      //history.pushState(trackId, '', path + trackId);
    }

  }

  /**
   * on popstate highlight the proper track
   */
  // $(window).on('popstate', function(e) {
  //   const trackId = e.originalEvent.state;
  //   if (trackId !== null) {
  //     const trackSrc = $(`#${trackId}`).data('track-src');
  //     $('.trackList').removeClass('highlight');
  //     $('.trackItem').removeClass('fi-sound');
  //     $(`#${trackId}`).addClass('highlight');
  //     $(`#${trackId}`).find('.trackItem').addClass('fi-sound');
  //
  //     mediaEle.setSrc(trackSrc);
  //     mediaEle.load();
  //     mediaEle.play();
  //   } else {
  //     const str = window.location.pathname;
  //     const id = str.substr(str.lastIndexOf("/") + 1, str.length);
  //     const trackSrc = $(`#${id}`).data('track-src');
  //     $('.trackList').removeClass('highlight');
  //     $('.trackItem').removeClass('fi-sound');
  //     $(`#${id}`).addClass('highlight');
  //     $(`#${id}`).find('.trackItem').addClass('fi-sound');
  //
  //     mediaEle.setSrc(trackSrc);
  //     mediaEle.load();
  //     mediaEle.play();
  //   }
  // });

  /**
   * Search
   */
  function callSearch(e) {
    if (e.keyCode === 13) {
      search(e);
    }
  }

  function search(e, str, popstate) {
    if (e !== null) {
      e.preventDefault();
    }

    $('.js-searchView').empty();
    var searchString = (str !== undefined) ? str : $.trim($('#search-text').val()); /* trim beginning and ending spaces */
    searchString = searchString.replace(/\s+/g, ' ');
    if (searchString.length > 0 && searchString !== ' ') {
      $.post(`/search/${searchString}`)
        .fail(function(data) {
          console.log(data);
          $('#searchCont').html(data);
        })
        .done(function(data) {
          $('#searchCont').html(data);
          $('#js-searchResults').removeClass('hide');
          if (popstate === undefined) {
            const str = `/search/${searchString}`;
            history.pushState({
              search: searchString
            }, '', str);
          }
        });
    }
  }

  console.log(window.history.state);
  console.log(window.history);

  if (window.history.state !== null) {
    const state = window.history.state;
    if (state.search !== undefined && state.category === undefined) {
      displaySearchBar();
      $('#search-text').val(state.search);
      search(null, state.search, 'noPopstate');
    } else if (state.search !== undefined && state.category !== undefined) {
      displaySearchBar();
      $('#search-text').val(state.search);
      seeAllResults(null, state.search, state.category, 'noPopstate');
    }
  }

  /**
   * on popstate highlight get the proper view
   */

  $(window).on('popstate', function(e) {
    console.log(e);
    const state = e.originalEvent.state;

    if (state === null) {
      const path = window.location.href;
      window.location.href = path;
    } else if (state.search !== undefined && state.category === undefined) {
      displaySearchBar(e);
      $('#search-text').val(state.search);
      search(e, state.search, 'noPopstate');
    } else if (state.search !== undefined && state.category !== undefined) {
      displaySearchBar(e);
      $('#search-text').val(state.search);
      seeAllResults(e, state.search, state.category, 'noPopstate');
    }
  });

  function seeAllResults(e, srchStr, categry, popstate) {
    if (e !== null) {
      e.preventDefault();
    }

    const searchStr = (srchStr !== undefined) ? srchStr : $('.searchStr').html();
    const category = (categry !== undefined) ? categry : $(this).data('category');

    $.post(`/search/${category}/${searchStr}`)
      .fail(function(data) {
        $('#searchCont').html(data);
      })
      .done(function(data) {
        $('#searchCont').html(data);
        $('#js-searchResults').removeClass('hide');
        if (popstate === undefined) {
          const str = `/search/${category}/${searchStr}`;
          history.pushState({
            search: searchStr,
            category: category
          }, '', str);
        }
      });
  }

  function linkActive(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  }

  function createPlaylist(e) {
    e.preventDefault();
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
