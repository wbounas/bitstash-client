'use strict'

const filesUi = require('../files/ui')
const store = require('../store')

const signUpSuccess = function (data) {
  // console.log(data)
  filesUi.userMessageBox('.uiFeedback', 'Successfully signed up!', '#630099')
}

const signUpFailure = function (data) {
  // console.error(error)
  filesUi.userMessageBox('.uiFeedback', 'Sign up failed!', '#ff21d6')
}

const signInSuccess = function (data) {
  // console.log(data)
  filesUi.userMessageBox('.uiFeedback', 'Successfully signed in!', '#630099')
  // $('.logged-in').removeClass('hide')
  // $('.game-functionality').removeClass('hide')
  // $('.logged-out').addClass('hide')
  store.user = data.user

  // set hidden user._id attribute to send with form data to API
  $('#hidden-user-id').attr('value', store.user._id)
  // console.log('the stored user.id', store.user._id)
  // console.log('the stored user token is:', store.user.token)
  $('#user-email-id').text(store.user.email)
  $('.landing-content').hide()
  $('.signed-in-content').show()
  return store.user
}

const signInFailure = function (data) {
  // console.error(error)
  $('.uiFeedback').text('Sign in failed!')
  $('.uiFeedback').css('color', '#ff21d6')
}

const changePasswordSuccess = function (data) {
  // console.log('Changed password!')
  $('.uiFeedback').text('Changed password!')
  $('.uiFeedback').css('color', '#630099')
}

const changePasswordFailure = function (data) {
  // console.error(error)
  $('.uiFeedback').text('Error changing password!')
  $('.uiFeedback').css('color', '#ff21d6')
}

const signOutSuccess = function () {
  // console.log('Signed out!')
  filesUi.userMessageBox('.uiFeedback', 'Signed out!', '#630099')
  // $('.uiFeedback').text('Signed out!')
  // $('.uiFeedback').css('color', '#630099')
  // $('.logged-in').addClass('hide')
  // $('.game-functionality').addClass('hide')
  // $('.game-board').addClass('hide')
  // $('.logged-out').removeClass('hide')
  // $('.game-search').addClass('hide')
  // $('.games-search').addClass('hide')
  store.user = null
  store.files = null
  $('#files-display-container').empty()
  $('.signed-in-content').hide()
  $('.landing-content').show()
  // this removes the user-id from the hidden field in upload form.
  $('#hidden-user-id').attr('value', '')
  $('#file-name-input').val('')
  $('#upload-file-path').val('')
}

const signOutFailure = function () {
  $('.uiFeedback').text('Failed signing out!')
  $('.uiFeedback').css('color', '#ff21d6')
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
