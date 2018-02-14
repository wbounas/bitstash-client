'use strict'

const store = require('../store')

const createFileSuccess = function () {
  $('#uiFeedback').text('Uploaded file!')
  $('#uiFeedback').css('color', 'green')
}

const createFileFailure = function () {
  $('#uiFeedback').text('File upload failed!')
  $('#uiFeedback').css('color', 'red')
}

module.exports = {
  createFileSuccess,
  createFileFailure
}
