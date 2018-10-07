$(function() {

  var mediaEle = null;

  /**
   * Initialize foundation
   */
  $(document).foundation();

  /**
   * Initialize slider
   */
  // $('.screenText').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   fade: true,
  //   cssEase: 'linear'
  // });

  $('.homeSlide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true
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

        mediaEle.play();

        $(mediaEle).on('playing', () => {
          const trackId = $('li.trackList.highlight').attr('id');
          updateNoOfPlays(trackId);
          $(mediaEle).off('playing');

        });
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

            //update play count
            // const trackId = $('li.trackList.highlight').attr('id');
            // updateNoOfPlays(trackId);

          } else {
            var liEle = $('li.trackList.highlight').next();

            if ($('#trackRepeat').hasClass('active')) {
              mediaElement.play();
              //update play count
              const trackId = $('li.trackList.highlight').attr('id');
              updateNoOfPlays(trackId);
            } else {
              if (liEle.length === 0) {
                callFocus($('li.trackList').first());
                highLightPrevNext();
              } else {
                liEle.click();
              }
            }
          }
        });
      },
      error: function(mediaElement, originalNode) {
        alert('There is some error at the server playing the track!');
      }
    });
  }

  function updateNoOfPlays(trackId) {
    $.post(`/update/playCount/${trackId}`)
      .fail(function(data) {
        console.log(data);
      })
      .done(function(data) {
        console.log(data)
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

    $('#trackShuffle').removeClass('inactive');
    $('#trackLike').removeClass('active');
    $('#trackDislike').removeClass('active');

    if ($('li.trackList.highlight').prev().length === 0 && $('li.trackList.highlight').next().length === 0) {
      $('#trackShuffle').addClass('inactive');
    }

    if ($('li.trackList.highlight').length === 0) {
      $('#trackPlaylist').addClass('inactive');
      $('#trackLike').addClass('inactive');
      $('#trackDislike').addClass('inactive');
    } else {
      $('#trackPlaylist').removeClass('inactive');
      $('#trackLike').removeClass('inactive');
      $('#trackDislike').removeClass('inactive');
    }

    const like = $('li.trackList.highlight').attr('data-like');
    const dislike = $('li.trackList.highlight').attr('data-dislike');

    if (like == 'true') {
      $('#trackLike').addClass('active');
    }
    if (dislike == 'true') {
      $('#trackDislike').addClass('active');
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
    $(mediaEle).on('playing', () => {
      //update play count
      const trackId = liEle.attr('id');
      updateNoOfPlays(trackId);
      $(mediaEle).off('playing');
    })
  }

  function handleUserLike(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    const like = $(this).hasClass('active');
    var dislike = '';
    const trackId = $('li.trackList.highlight').attr('id');

    $('li.trackList.highlight').attr('data-like', like);
    if (like) {
      if ($('#trackDislike').hasClass('active')) {
        $('#trackDislike').removeClass('active');
        dislike = 'false';
        $('li.trackList.highlight').attr('data-dislike', dislike);
      }
    }

    $.post('/user/likeUnlike', {
        like: like,
        trackId: trackId,
        dislike: dislike
      }).fail(function(data) {
        console.log(data);
      })
      .done(function(data) {
        console.log(data)
      });
  }

  function handleUserDislike(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    const dislike = $(this).hasClass('active');
    var like = '';
    const trackId = $('li.trackList.highlight').attr('id');

    $('li.trackList.highlight').attr('data-dislike', dislike);
    if (dislike) {
      if ($('#trackLike').hasClass('active')) {
        $('#trackLike').removeClass('active');
        like = 'false';
        $('li.trackList.highlight').attr('data-like', like);
      }
    }

    $.post('/user/dislikeUndislike', {
        like: like,
        trackId: trackId,
        dislike: dislike
      }).fail(function(data) {
        console.log(data);
      })
      .done(function(data) {
        console.log(data)
      });
  }

  /**
   * Register functions
   */
  $(window).on('load resize', handleLoad);
  $(document).on('click', closeMenus); /* close all menus */
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
  $('#trackLike').on('click', handleUserLike); /* send like to server */
  $('#trackDislike').on('click', handleUserDislike); /* send dislike to server */
  $('#trackPrev').on('click', playPrevious); /* play previous track */
  $('#trackNext').on('click', playNext); /* play next track */
  $('#trackShuffle').on('click', shuffleTracks); /* shuffle tracks*/
  $('.delete-track').on('click', openDeleteMenu); /* open delete menu */
  $('.deleteMenu').on('click', deleteTrack); /* delete track */
  $('.editPlaylist').on('click', allowDragDrop); /*rearrange playlist tracks*/
  $('#concert-text').on('keyup', callConcertSearch); /* concert search functionality */
  $('.js-concert-search').on('click', searchConcert) /* concert search functionality */
  $('#stat-text').on('keyup', callStatSearch); /* stat search functionality */
  $('.js-stat-search').on('click', searchStat) /* stat search functionality */
  $('#pay').on('submit', handlePayment); /* Payment */


  $(document).on('click', '.searchHome', search); /* search functionality */

  $(document).on('click', '.stat-albums li a', getStats); /* get stat results */
  $(document).on('click', 'ul.js-artists li a', getConcertsOfArtist); /* Get concerts of artist */

  $(document).on('click', 'ul.js-locations li a', getConcertsOfLocation); /* Get concerts of location */

  $(document).on('click', '.playListCreate', openPlaylist); /* Create playlist popup */
  $(document).on('click', '.closebutton', closeCreatePlaylist); /* close Create playlist popup */
  $(document).on('click', '#cancelBtn', closeCreatePlaylist); /* close Create playlist popup */
  $(document).on('click', '#createBtn', createPlaylist); /* create playlist */
  $(document).on('keyup', '#playlistName', createPlaylistOnEnter); /* create playlist */

  $(document).on('click', '.playlistHome a', playPlaylist);
  $(document).on('click', '#cancelDeleteBtn', closeDeletePlaylist); /* close Delete playlist popup */
  $(document).on('click', '.closeDelete', closeDeletePlaylist); /* close Delete playlist popup */
  $(document).on('click', '.deletePlaylist', openDeletePlaylistPopup); /* open delete playlist popup */
  $(document).on('click', '#deleteBtn', deletePlaylist); /* Delete playlist */
  $(document).on('click', '.playlist-manage', openPlaylistMenu); /* open playlist menu */
  $(document).on('click', '.editPlaylistName', openEditPlaylistPopup); /* open edit playlist popup */
  $(document).on('click', '#cancelEditBtn', closeEditPlaylistPopup); /* close edit playlist popup */
  $(document).on('click', '.closeEdit', closeEditPlaylistPopup); /* close edit playlist popup */
  $(document).on('click', '#editBtn', editPlaylistName); /* edit playlist name */
  $(document).on('keyup', '#editplaylistName', editPlaylistNameOnEnter); /* edit playlist name */

  $(document).on('click', '.seeAllPlaylists', seeAllPlaylists); /* see all playlists */

  $(document).on('click', '#trackPlaylist', openAddToPlaylist); /* open add to playlist */
  $(document).on('click', '.closeAddToPlaylist', closeAddToPlaylist); /* close add to playlist */
  $(document).on('click', '.playlist_add', addToPlaylist); /* add to playlist */
  $(document).on('click', '.addTo_playlist a', doNothing);

  $(document).on('click', '.menuMode', showUserMenu);
  $(document).on('click', '.close-icon', hideUserMenu);
  $(document).on('click', '.seeAllR', seeAllResults); /* see all the categories of search results */

  $(document).on('click', '.homeTabsList li a.js-sup', handleHomeTabsClick); /* tabs on user homepage click */

  $(document).on('click', '.js-chooseartist', toggleArtists); /* toggle artists for concerts */
  $(document).on('click', '.js-chooseLocation', toggleLocations); /* toggle locations for concerts */




  var user = null;


  /* functions */

  function closeMenus(e) {
    if ($(e.target).closest('.userMenu').length === 0) {
      $('#user-menu').removeClass('show');
    }
  }

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

  function doNothing(e) {
    e.preventDefault();
  }

  function handleLogin(e) {
    e.preventDefault();
    clearMessage();
    const name = $.trim($('#userName').val());
    const pwd = $.trim($('#userPassword').val());

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

    const username = $.trim($('#userName').val());
    const email = $.trim($('#email').val());

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

    const newPwd = $.trim($('#newPassword').val());
    const confirmPwd = $.trim($('#confirmPassword').val());

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

    const oldPwd = $.trim($('#oldPassword').val());
    const newPwd = $.trim($('#newPassword').val());
    const confirmPwd = $.trim($('#confirmPassword').val());

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

    const name = $.trim($("#userName").val());
    const email = $.trim($("#userEmail").val());
    const pwd = $.trim($("#userPassword").val());
    const confirmpwd = $.trim($("#confirmPassword").val());
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
    if (!$(this).hasClass('highlight') && !($(e.target).hasClass('delete-track')) && !($(e.target).hasClass('deleteMenu'))) {
      // console.log(1);
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
      highLightPrevNext();
      //history.pushState(trackId, '', path + trackId);
      const trackId = $(this).attr('id');
      updateNoOfPlays(trackId);
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
    searchString = encodeURIComponent(searchString);

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
              search: decodeURIComponent(searchString)
            }, '', str);
          }
        });
    }
  }

  // console.log(window.history.state);
  // console.log(window.history);

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
    } else if (state.category === 'playlist') {
      seeAllPlaylists(null, 'noPopstate');
    } else if (state.category === 'recommendations') {
      callRecommendTab('noPopstate');
    } else if (state.category === 'topTrend') {
      callTopTrendTab('noPopstate');
    } else if (state.category === 'mostPlayed') {
      callMostPlayedTab('noPopstate');
    }
  }

  /**
   * on popstate highlight get the proper view
   */

  $(window).on('popstate', function(e) {
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
    } else if (state.category === 'playlist') {
      seeAllPlaylists(e, 'noPopstate');
    } else if (state.category === 'recommendations') {
      callRecommendTab('noPopstate');
    } else if (state.category === 'topTrend') {
      callTopTrendTab('noPopstate');
    } else if (state.category === 'mostPlayed') {
      callMostPlayedTab('noPopstate');
    }

  });

  function seeAllResults(e, srchStr, categry, popstate) {
    if (e !== null) {
      e.preventDefault();
    }

    var searchStr = (srchStr !== undefined) ? srchStr : $('.searchStr').html();
    const category = (categry !== undefined) ? categry : $(this).data('category');

    searchStr = encodeURIComponent(searchStr);

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
            search: decodeURIComponent(searchStr),
            category: category
          }, '', str);
        }
      });
  }

  function seeAllPlaylists(e, popstate) {
    if (e !== null) {
      e.preventDefault();
    }

    $('.homeTabsList li a').removeClass('active');
    $(".homeTabsList li a[data-tab-category='playlistTab']").addClass('active');
    $.post('/user/playlists/seeAll')
      .fail(function(data) {
        $('#playlistCont').html(data);
      })
      .done(function(data) {
        $('#playlistCont').html(data);
        $('.js-nonPlaylist').addClass('hide');

        if (popstate === undefined) {
          const str = '/user/playlists/seeAll';
          history.pushState({
            category: 'playlist'
          }, '', str);
        }

      });

  }

  function linkActive(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  }

  function openPlaylist(e) {
    e.preventDefault();
    clearMessage();
    $('.playListPopup').slideToggle();
  }

  function closeCreatePlaylist(e) {
    e.preventDefault();
    $('.playListPopup').slideToggle();
  }

  function createPlaylistOnEnter(e) {
    if (e.keyCode === 13) {
      createPlaylist(e);
    }
  }

  function createPlaylist(e) {
    e.preventDefault();
    clearMessage();

    var playlistname = $.trim($("#playlistName").val());

    if (playlistname.length === 0) {
      showErrorCircle('playlistName');
      $('#emptyFields').removeClass('hide');
    }

    playlistname = encodeURIComponent(playlistname);

    var limit = 9;
    var playPage = false;

    if (window.location.pathname.indexOf('/play/') !== -1) {
      limit = 5000;
      playPage = true;
    }
    if (window.location.pathname === '/user/playlists/seeAll') {
      limit = 5000;
    }

    if (playlistname.length !== 0) {
      $.post('/user/createPlaylist', {
          playlistName: playlistname,
          limit: limit,
          playPage: playPage
        })
        .fail(function(data) {
          console.log(data);
          const responseText = data.responseJSON;
          showMessage(responseText.msg, 'error');
        })
        .done(function(data) {
          if (window.location.pathname.indexOf('/play/') !== -1) {
            closeCreatePlaylist(e);
          }
          $('#playlistCont').html(data);
        });
    }
  }

  function closeDeletePlaylist(e) {
    e.preventDefault();
    $('.deletePlaylistPopup').slideToggle();
    $('#deleteBtn').removeAttr('data-playlist-id');
  }

  function openDeletePlaylistPopup(e) {
    e.preventDefault();
    clearMessage();
    var playlistId = $(this).data('playlist-id');
    $('.deletePlaylistPopup').slideToggle();
    $('#deleteBtn').attr('data-playlist-id', playlistId);
  }

  function deletePlaylist(e) {
    e.preventDefault();

    clearMessage();
    var playlistId = $('#deleteBtn').attr('data-playlist-id');
    var limit = 9;

    if (window.location.pathname === '/user/playlists/seeAll') {
      limit = 5000;
    }
    $.post('/user/deletePlaylist', {
        playlistId: playlistId,
        limit: limit
      }).fail(function(data) {
        console.log(data);
        const responseText = data.responseJSON;
        showMessage(responseText.msg, 'playListerror');
      })
      .done(function(data) {
        $('#playlistCont').html(data);
      });
  }

  function openEditPlaylistPopup(e) {
    e.preventDefault();
    clearMessage();
    var playlistId = $(this).attr('data-playlist-id');
    var playlistName = $(this).closest('li').find('span.playlistName').html();
    $('.editPlaylistPopup').slideToggle();
    $('#editplaylistName').val(playlistName);
    $('#editBtn').attr('data-playlist-id', playlistId);
  }

  function closeEditPlaylistPopup(e) {
    e.preventDefault();
    $('.editPlaylistPopup').slideToggle();
    $('#editBtn').removeAttr('data-playlist-id');
  }

  function editPlaylistNameOnEnter(e) {
    if (e.keyCode === 13) {
      editPlaylistName(e);
    }
  }

  function editPlaylistName(e) {
    e.preventDefault();
    clearMessage();

    var playlistId = $('#editBtn').attr('data-playlist-id');
    var playlistname = $.trim($("#editplaylistName").val());

    if (playlistname.length === 0) {
      showErrorCircle('editplaylistName');
      $('#emptyField').removeClass('hide');
    }

    if (playlistname.length !== 0) {
      playlistname = encodeURIComponent(playlistname);

      $.post('/user/editPlaylistname', {
          playlistId: playlistId,
          playlistname: playlistname
        }).fail(function(data) {
          console.log(data);
          const responseText = data.responseJSON;
          showMessage(responseText.msg, 'editPlaylistError');
        })
        .done(function(data) {
          console.log(data);
          var name = decodeURIComponent(data.msg);
          $(`li#${playlistId}`).find('span.playlistName').html(name);
          closeEditPlaylistPopup(e);
        });
    }

  }


  function playPlaylist(e) {
    e.preventDefault();
    if (!$(e.target).hasClass('playlist-manage') &&
      !$(e.target).hasClass('playlistManage') &&
      !$(e.target).hasClass('editPlaylistName') &&
      !$(e.target).hasClass('deletePlaylist')) {
      const playlistId = $(this).closest('li').attr('id');

      $.post(`/play/playlist/${playlistId}`)
        .fail(function(data) {
          console.log(data);
          const responseText = data.responseJSON;
          showMessage(responseText.msg, 'playlistTrackError');
        })
        .done(function(data) {
          if (data.msg > 0) {
            window.location.href = `/play/playlist/${playlistId}`;
          }
        });
    }
  }

  function openPlaylistMenu(e) {
    e.preventDefault();
    const playlistEle = $(this).next('.playlist-actions');
    const displayVal = $(this).next('.playlist-actions').css('display');
    $('.playlist-actions').css('display', 'none');
    if (displayVal === 'block') {
      playlistEle.css('display', 'none');
    } else {
      playlistEle.css('display', 'block');
    }
  }

  function openAddToPlaylist(e) {
    e.preventDefault();
    if (!$(this).hasClass('inactive')) {
      clearMessage();
      var trackId = $('li.trackList.highlight').attr('id');

      $.post('/user/playlists')
        .fail(function(data) {
          console.log(data);
          const responseText = data.responseJSON;
          showMessage(responseText.msg, 'playListerror');
        })
        .done(function(data) {
          $('#playlistCont').html(data);
        });

      $('.addToPlaylistPopup').slideToggle();
      $('.addToPlaylistPopup').attr('data-track-id', trackId);
    }
  }

  function closeAddToPlaylist(e) {
    e.preventDefault();
    $('.addToPlaylistPopup').removeAttr('data-track-id');
    $('.addToPlaylistPopup').slideToggle();
  }

  function addToPlaylist(e) {
    e.preventDefault();

    var trackId = $('.addToPlaylistPopup').attr('data-track-id');
    var playlistId = $(this).attr('id');

    $.post('/user/playlist/addtracktoplaylist', {
        trackId: trackId,
        playlistId: playlistId
      })
      .fail(function(data) {
        const responseText = data.responseJSON;
        showMessage(responseText.msg, 'playListerror');
      })
      .done(function(data) {
        $('#playlistCont').html(data);
        closeAddToPlaylist(e);
      });
  }

  function openDeleteMenu(e) {
    e.preventDefault();
    const deleteEle = $(this).next('.deleteMenu');
    const displayVal = $(this).next('.deleteMenu').css('display');
    $('.deleteMenu').css('display', 'none');
    if (displayVal === 'block') {
      deleteEle.css('display', 'none');
    } else {
      deleteEle.css('display', 'block');
    }
  }

  function deleteTrack(e) {
    e.preventDefault();
    const liEle = $(this).closest('li.trackList');
    const trackId = liEle.attr('id');
    const playlistId = $('.playlist-name').attr('data-playlist-id');

    $.post('/user/playlist/deleteTrack', {
        trackId: trackId,
        playlistId: playlistId
      })
      .fail(function(data) {
        console.log(data);
        const responseText = data.responseJSON;
        showMessage(responseText.msg, 'trackerror');
      })
      .done(function(data) {
        console.log(data);
        liEle.remove();
        highLightPrevNext();
      });
  }

  function handleHomeTabsClick(e, popstate) {
    e.preventDefault();
    const category = $(this).attr('data-tab-category');

    $('.homeTabsList li a').removeClass('active');
    $(this).addClass('active');

    if (category === 'playlistTab') {
      //if (window.location.pathname !== '/user/playlists/seeAll') {
      $.post('/user/playlists/seeAll')
        .fail(function(data) {
          $('#playlistCont').removeClass('hide');
          $('.js-nonPlaylist').addClass('hide');
          $('#playlistCont').html(data);
        })
        .done(function(data) {
          $('#playlistCont').removeClass('hide');
          $('.js-nonPlaylist').addClass('hide');
          $('#playlistCont').html(data);

          if (popstate === undefined) {
            const str = '/user/playlists/seeAll';
            history.pushState({
              category: 'playlist'
            }, '', str);
          }
        });
      //}
    } else if (category === 'recommendTab') {
      //if (window.location.pathname !== '/user/recommendations/seeAll') {
      callRecommendTab(popstate);
      //}
    } else if (category === 'topTrendTab') {
      //if (window.location.pathname !== '/user/topTrending/seeAll') {
      callTopTrendTab(popstate);
      //}
    } else if (category === 'playedTab') {
      //if (window.location.pathname !== '/user/mostPlayed/seeAll') {
      callMostPlayedTab(popstate);
      //}
    }
  }

  function callRecommendTab(popstate) {
    $.post('/user/recommendations/seeAll')
      .fail(function(data) {
        $('section').addClass('hide');
        $('#recommendationsCont').removeClass('hide');
        $('#homeTabsCont').removeClass('hide');
        $('#recommendationsCont').html(data);
      })
      .done(function(data) {
        $('section').addClass('hide');
        $('#recommendationsCont').removeClass('hide');
        $('#homeTabsCont').removeClass('hide');
        $('#recommendationsCont').html(data);

        if (popstate === undefined) {
          const str = '/user/recommendations/seeAll';
          history.pushState({
            category: 'recommendations'
          }, '', str);
        }
      });
  }

  function callTopTrendTab(popstate) {
    $.post('/user/topTrending/seeAll')
      .fail(function(data) {
        $('section').addClass('hide');
        $('#topTrendCont').removeClass('hide');
        $('#homeTabsCont').removeClass('hide');
        $('#topTrendCont').html(data);
      })
      .done(function(data) {
        $('section').addClass('hide');
        $('#topTrendCont').removeClass('hide');
        $('#homeTabsCont').removeClass('hide');
        $('#topTrendCont').html(data);

        if (popstate === undefined) {
          const str = '/user/topTrending/seeAll';
          history.pushState({
            category: 'topTrend'
          }, '', str);
        }
      });

  }

  function callMostPlayedTab(popstate) {
    $.post('/user/mostPlayed/seeAll')
      .fail(function(data) {
        var result = data;
        if (data.responseJSON !== undefined) {
          result = data.responseJSON.msg
        }
        $('section').addClass('hide');
        $('#mostPlayedCont').removeClass('hide');
        $('#homeTabsCont').removeClass('hide');
        $('#mostPlayedCont').html(result);
      })
      .done(function(data) {
        $('section').addClass('hide');
        $('#mostPlayedCont').removeClass('hide');
        $('#homeTabsCont').removeClass('hide');
        $('#mostPlayedCont').html(data);

        if (popstate === undefined) {
          const str = '/user/mostPlayed/seeAll';
          history.pushState({
            category: 'mostPlayed'
          }, '', str);
        }
      });
  }

  var sortIds = [];

  function allowDragDrop(e) {
    e.preventDefault();
    $('li .trackTime').toggleClass('hide');
    $('li .dragHandle').toggleClass('active');
    $('li .deleteMenu').toggleClass('active');

    if ($(this).text() === 'Edit') {

      if ($('li .dragHandle').hasClass('active')) {
        $(this).html('Done');
        $('#tracks').sortable({
          handle: 'div.dragHandle',
          cursor: 'grab',
          update: function(event, ui) {
            var sortedIds = $('#tracks').sortable('toArray');
            sortIds = sortedIds;

            /* update db with new re-organization*/
            var obj = sortIds.reduce(function(o, val, idx) {
              o[val] = idx + 1;
              return o;
            }, {});
            const playlistId = $('div.playlist-name').attr('data-playlist-id');
            $.post('/play/playlistChange/rearrangeData', {
                playlistId: playlistId,
                sortedIds: obj
              })
              .fail(function(data) {
                console.log(data);
              })
              .done(function(data) {
                console.log(data);
                highLightPrevNext();
              })

          }
        });

        $('#tracks div.dragHandle').disableSelection();

      }
    } else {
      $(this).html('Edit');
    }
  }

  function callConcertSearch(e) {
    if (e.keyCode === 13) {
      searchConcert(e);
    }
  }

  function searchConcert(e) {
    e.preventDefault();

    $('.apiloadingScreen').toggle('active');

    var concertText = $.trim($('#concert-text').val());

    concertText = concertText.replace(/\s+/g, ' ');
    concertText = encodeURIComponent(concertText);

    if (concertText.length > 0 && concertText !== ' ') {
      $.post('/searchconcert', {
          concertText: concertText
        })
        .fail(function(data) {
          $('.apiloadingScreen').toggle('active');
          console.log(data);
          $('#concert-results').html(data);
        })
        .done(function(data) {
          $('.apiloadingScreen').toggle('active');
          console.log(data);
          $('#concert-results').html(data);

        });
    }
  }

  function getConcertsOfArtist(e) {
    e.preventDefault();
    $('.apiloadingScreen').toggle('active');
    const artistId = $(this).attr('id');
    const artistName = $(this).find('.artistName').text();

    $.post('/searchconcert/findConcertsOfArtist', {
        artistId: artistId,
        artistName: artistName
      })
      .fail(function(data) {
        $('.apiloadingScreen').toggle('active');
        console.log(data);
        $('#concert-results').html(data);
      })
      .done(function(data) {
        $('.apiloadingScreen').toggle('active');
        console.log(data);
        $('#concert-results').html(data);
      });
  }

  function getConcertsOfLocation(e) {

    e.preventDefault();
    $('.apiloadingScreen').toggle('active');
    const locationId = $(this).attr('id');
    const locationName = $(this).find('.artistName').text();

    $.post('/searchconcert/findConcertsOfLocation', {
        locationId: locationId,
        locationName: locationName
      })
      .fail(function(data) {
        $('.apiloadingScreen').toggle('active');
        console.log(data);
        $('#concert-results').html(data);
      })
      .done(function(data) {
        $('.apiloadingScreen').toggle('active');
        console.log(data);
        $('#concert-results').html(data);
      });

  }

  function callStatSearch(e) {
    if (e.keyCode === 13) {
      searchStat(e);
    }
  }

  function searchStat(e) {
    e.preventDefault();

    $('section.stat-results').addClass('hide');
    var statText = $.trim($('#stat-text').val());

    statText = statText.replace(/\s+/g, ' ');
    statText = encodeURIComponent(statText);

    if (statText.length > 0 && statText !== ' ') {
      $.post('/searchstat', {
          statText: statText
        })
        .fail(function(data) {
          console.log(data);
          $('#stat-results').html(data);
        })
        .done(function(data) {
          console.log(data);
          $('#stat-results').html(data);
          if (data.indexOf('albumDetails') > -1) {
            $('section.stat-results').removeClass('hide');
            callGoogleMpas();
          }
        });
    } else {
      $('#stat-results').html('');
    }
  }

  function getStats(e) {
    e.preventDefault();

    $('section.stat-results').addClass('hide');
    const albumId = $(this).attr('id');
    const albumName = $(this).find('.artistName').text();

    $.post('/statresults', {
        albumId: albumId,
        albumName: albumName
      })
      .fail(function(data) {
        console.log(data);
        $('#stat-results').html(data);
      })
      .done(function(data) {
        console.log(data);
        $('#stat-results').html(data);
        if (data.indexOf('albumDetails') > -1) {
          $('section.stat-results').removeClass('hide');
          callGoogleMpas();
        }
      });
  }

  var markers = [];
  var image = '';

  function callGoogleMpas() {
    deleteMarkers();
    const imageSrc = '/dist/assets/';
    setTimeout(function() {
      console.log($('#latlng').html())
      var obj = JSON.parse($('#latlng').html());
      // [{
      //   "LATITUDE": 37.6624312,
      //   "LONGITUDE": -121.8746789
      // }, {
      //   "LATITUDE": 50.6624312,
      //   "LONGITUDE": -31.8746789
      // }];
      for (var i = 0; i < obj.length; i++) {
        var count = obj[i].LOCATION_COUNT;
        if (count >= 200) {
          image = imageSrc + 'highMarker.png';
        } else if (count >= 100 && count <= 199) {
          image = imageSrc + 'marker.png';
        } else {
          image = imageSrc + 'lowMarker.png';
        }
        // console.log(obj[i].LATITUDE, obj[i].LONGITUDE)
        // console.log(count)
        // console.log(image)
        var latLng = new google.maps.LatLng(obj[i].LATITUDE, obj[i].LONGITUDE);
        var marker = new google.maps.Marker({
          position: latLng,
          icon: image,
          map: map
        });
        markers.push(marker);
      }
    }, 500);
  }

  // Sets the map on all markers in the array.
  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  // Removes the markers from the map, but keeps them in the array.
  function clearMarkers() {
    setMapOnAll(null);
  }

  // Shows any markers currently in the array.
  function showMarkers() {
    setMapOnAll(map);
  }

  // Deletes all markers in the array by removing references to them.
  function deleteMarkers() {
    clearMarkers();
    markers = [];
  }

  function handlePayment(e) {
    e.preventDefault();
    console.log('here')
    $.post('/payment')
      .fail(function(data) {
        const responseText = data.responseJSON;
        showMessage(responseText.msg, 'error');
      })
      .done(function(data) {
        console.log(data)
        window.location.href = '/stats';
      });
  }

  function toggleArtists(e) {
    e.preventDefault();
    $('.artistList').slideToggle();
  }

  function toggleLocations(e) {
    e.preventDefault();
    $('.locationList').slideToggle();
  }

  /**
   * Utility functions
   */

  function clearMessage() {
    $('#error').empty();
    $('#trackerror').empty();
    $('#playListerror').empty();
    $('#playlistTrackError').empty();
    $('#editPlaylistError').empty();
    $('#emptyField').addClass('hide');
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
