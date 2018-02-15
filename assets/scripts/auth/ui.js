'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  // console.log(data)
  $('#uiFeedback').text('Successfully signed up!')
  $('#uiFeedback').css('color', 'green')
}

const signUpFailure = function (data) {
  // console.error(error)
  $('#uiFeedback').text('Sign up failed!')
  $('#uiFeedback').css('color', 'red')
}

const signInSuccess = function (data) {
  // console.log(data)
  $('#uiFeedback').text('Successfully signed in!')
  $('#uiFeedback').css('color', 'green')
  // $('.logged-in').removeClass('hide')
  // $('.game-functionality').removeClass('hide')
  // $('.logged-out').addClass('hide')
  store.user = data.user
  $('#hidden-user-id').attr('value', store.user._id)
  console.log('the stored user.id', store.user._id)
  $('.landing-content').hide()
  $('.signed-in-content').show()
}

const signInFailure = function (data) {
  // console.error(error)
  $('#uiFeedback').text('Sign in failed!')
  $('#uiFeedback').css('color', 'red')
}

const changePasswordSuccess = function (data) {
  // console.log('Changed password!')
  $('#uiFeedback').text('Changed password!')
  $('#uiFeedback').css('color', 'green')
}

const changePasswordFailure = function (data) {
  // console.error(error)
  $('#uiFeedback').text('Error changing password!')
  $('#uiFeedback').css('color', 'red')
}

const signOutSuccess = function () {
  // console.log('Signed out!')
  $('#uiFeedback').text('Signed out!')
  $('#uiFeedback').css('color', 'green')
  // $('.logged-in').addClass('hide')
  // $('.game-functionality').addClass('hide')
  // $('.game-board').addClass('hide')
  // $('.logged-out').removeClass('hide')
  // $('.game-search').addClass('hide')
  // $('.games-search').addClass('hide')
  store.user = null
  $('.signed-in-content').hide()
  $('.landing-content').show()
}

const signOutFailure = function () {
  $('#uiFeedback').text('Failed signing out!')
  $('#uiFeedback').css('color', 'red')
}

// on document ready, hide `.signed-in-content` <div>
$(() => {
  $('.signed-in-content').hide()
})

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
