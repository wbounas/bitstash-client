'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const createUpload = function (event) {
  event.preventDefault()
  // console.log('this is the event.target', event.target)
  // const data = new FormData(event.target)
  const data = getFormFields(event.target)
  console.log(data)
  // console.log('The data is ', data.get('image[file]'))
  // uploadApi.createMulti(data)
  //   .then(uploadUi.success)
  //   .catch(uploadUi.error)
}

const addHandlers = function () {
  $('#multipart-form-data').on('submit', createUpload)
}

module.exports = {
  addHandlers
}
