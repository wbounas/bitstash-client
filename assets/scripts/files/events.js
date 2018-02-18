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
  let foundObject
  store.files.find(element => {
    if (element.id === fileDataObj.id) {
      console.log('found the file:', element)
      foundObject = element
    }
  })
  return foundObject
}

const onUpdateFile = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  // console.log('event tearget:', event.target)
  // console.log('this:', this)

  const searchObject = {}
  searchObject.id = $(this).data('file-id')
  console.log('searchObject.id is:', searchObject.id) // the searchObject.id is the id of the search input
  const fileData = searchForFile(searchObject)
  // console.log('this is the fileData', fileData)
  // console.log('store files:', store.files)

  // This the new name for the file
  if ($('#' + searchObject.id).val()) {
    fileData.file_name = $('#' + searchObject.id).val()
    api.updateFile(fileData)
      .then(ui.updateFileSuccess)
      .catch(ui.updateFileFailure)
  } else {
    event.preventDefault()
    ui.userMessageBox('.uiFeedback', 'Please provide a new name!', 'red')
  }
  console.log('the fileData after assignment is:', fileData)
}

const onDeleteFile = function (event) {
  event.preventDefault()
  const deleteFileId = $(this).data('file-id')
  console.log('This is the id: ', deleteFileId)
  // console.log('this is the event.target', event.target)
  // const data = getFormFields(event.target)
  $(this).closest('tr').remove()
  const itemToDelete = function (fileId) {
    let foundObject
    store.files.find(element => {
      if (element.id === fileId) {
        console.log('found the file:', element)
        foundObject = element
      }
    })
    const indexOfFile = store.files.indexOf(foundObject)
    store.files.splice(indexOfFile, 1)
  }
  console.log(itemToDelete(deleteFileId))
  console.log('This is the entire store: ', store)
  // console.log($(this).closest('tr'))
  api.deleteFile(deleteFileId)
    .then(ui.deleteFileSuccess)
    .catch(ui.deleteFileFailure)
}

const addHandlers = function () {
  $('#multipart-form-data').on('submit', onCreateFile)
  $('#files-display-container').on('click', '.update-file-btn', onUpdateFile)
  $('#files-display-container').on('click', '.remove-file-btn', onDeleteFile)
}

module.exports = {
  addHandlers
}
