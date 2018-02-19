'use strict'

const store = require('../store')
const indexFiles = require('../templates/index-files.handlebars')
const showFile = require('../templates/show-file.handlebars')

const userMessageBox = function (xField, xText, xColor, xTime) {
  $(xField).text(xText)
  $(xField).css('color', xColor)
  setTimeout(() => {
    $(xField).text('')
  }, xTime)
}

const createFileSuccess = function (data) {
  if (data.special_message) {
    userMessageBox('.uiFeedback', data.special_message, '#ff21d6', 4000)
  } else {
    userMessageBox('.uiFeedback', 'Uploaded File!', '#630099')
    // console.log('JSON from succesful AJAX:', data)
    store.files.push(data.file)
    const singleFileHTML = showFile({ file: data.file })
    $('#files-table tbody').prepend(singleFileHTML)
    // file-name-input
  }
  $('#file-name-input').val('')
  $('#upload-file-path').val('')
}

const createFileFailure = function () {
  userMessageBox('.uiFeedback', 'File upload failed!', '#ff21d6', 6000)
}

const getAllFilesSuccess = function (data) {
  // save all files from the request to the local store
  store.files = data.files
  // console.log('getAllFilesSuccess data is:', data)
  const indexFilesHTML = indexFiles({ files: data.files })
  $('#files-display-container').html(indexFilesHTML)
}

const getAllFilesFailure = function (data) {
  userMessageBox('.uiFeedback', 'Error loading user files', '#ff21d6', 6000)
  // console.log(error)
}

const getOneFileSuccess = function (data) {
  // console.log(data)
}

const getOneFileFailure = function (error) {
  // console.log(error)
}

// const getOneFileSuccess = function (data) {
//   // console.log(data)
// }
//
// const getOneFileFailure = function (error) {
//   // console.log(error)
// }

const updateFileSuccess = function (data) {
  userMessageBox('.uiFeedback', 'File changed!', '#630099', 4000)
  // console.log('File updated!! Here\'s what we got:', data)
  $('#name-' + data.file.id).html($('#' + data.file.id).val())
  $('#' + data.file.id).val('')
  // console.log('data.file.file_name is:', data.file.file_name)
}

const updateFileFailure = function (data) {
  userMessageBox('.uiFeedback', 'Error updating file', '#ff21d6', 6000)
  // console.log(error)
}

const deleteFileSuccess = function (data) {
  userMessageBox('.uiFeedback', 'File was successfully deleted.', '#630099', 4000)
  // console.log('File was successfully deleted.')
}

const deleteFileFailure = function (data) {
  userMessageBox('.uiFeedback', 'Error deleting file', '#ff21d6', 6000)
  // console.log(error)
}

module.exports = {
  userMessageBox,
  createFileSuccess,
  createFileFailure,
  getAllFilesSuccess,
  getAllFilesFailure,
  // getOneFileSuccess,
  // getOneFileFailure,
  updateFileSuccess,
  updateFileFailure,
  deleteFileSuccess,
  deleteFileFailure
}

//
// createFile,
// getAllFiles,
// getOneFile,
// updateFile,
// deleteFile
