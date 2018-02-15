'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const filesAPI = require('../files/api')
const filesUI = require('../files/ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  // console.log('events', data)
  event.preventDefault()
  if (data.password !== data.password_confirmation) {
    return ui.signUpFailure()
  }
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#sign-up').find('input:text, input:password, select, textarea').val('')
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(filesAPI.getAllFiles)
    .then(filesUI.getAllFilesSuccess)
    .catch(ui.signInFailure)
  $('#sign-in').find('input:text, input:password, select, textarea').val('')
}

const changePassword = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#change-password').find('input:password, select, textarea').val('')
}

const signOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', changePassword)
  $('#sign-out').on('submit', signOut)
}

module.exports = {
  addHandlers
}
