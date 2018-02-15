'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onCreateFile = function (event) {
  event.preventDefault()
  // console.log('this is the event.target', event.target)
  const data = new FormData(event.target)
  // data.user = store.user
  // const data = getFormFields(event.target)
  console.log('store.user:', store.user)
  console.log('this is data: ', data)
  console.log('The data is ', data.get('file[path]'))
  console.log('The data.user is ', data.get('user[_id]'))
  api.createFile(data) // data is empty object :(((
  // api.createFile(data.get('file[path]'))
    .then(ui.createFileSuccess)
    .catch(ui.createFileFailure)
}

const onGetAllFiles = function (event) {
  event.preventDefault()
  // console.log('this is the event.target', event.target)
  const data = getFormFields(event.target)
  api.getAllFiles(data)
    .then(ui.getAllFilesSuccess)
    .catch(ui.getAllFilesFailure)
}

const onGetOneFile = function (event) {
  event.preventDefault()
  // console.log('this is the event.target', event.target)
  const data = getFormFields(event.target)
  api.getOneFile(data)
    .then(ui.getOneFileSuccess)
    .catch(ui.getOneFileFailure)
}

const searchForFile = function (fileDataObj) {
  store.files.find(element => {
    if (element.id === fileDataObj.id) {
      console.log('found the file:', element)
    }
  })
}

const onUpdateFile = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  // console.log('event tearget:', event.target)
  // console.log('this:', this)

// THIS WILL FORCE A COMMIT
  const fileData = {}
  fileData.id = $('.update-file-btn').data('file-id')
  // console.log('this is the fileData', fileData)
  console.log('store files:', store.files)
  searchForFile(fileData)
  api.updateFile(data)
    .then(ui.updateFileSuccess)
    .catch(ui.updateFileFailure)
}

const onDeleteFile = function (event) {
  event.preventDefault()
  // console.log('this is the event.target', event.target)
  const data = getFormFields(event.target)
  api.deleteFile(data)
    .then(ui.deleteFileSuccess)
    .catch(ui.deleteFileFailure)
}

const addHandlers = function () {
  $('#multipart-form-data').on('submit', onCreateFile)
  $('#files-display-container').on('click', '.update-file-btn', onUpdateFile)
}

module.exports = {
  addHandlers
}
