'use strict'

const store = require('../store')

const createFileSuccess = function (data) {
  $('#uiFeedback').text('Uploaded file!')
  $('#uiFeedback').css('color', 'green')
  console.log('JSON from succesful AJAX:', data)
}

const createFileFailure = function () {
  $('#uiFeedback').text('File upload failed!')
  $('#uiFeedback').css('color', 'red')
}

module.exports = {
  createFileSuccess,
  createFileFailure
}
