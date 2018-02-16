'use strict'

const store = require('../store')
const indexFiles = require('../templates/index-files.handlebars')
const showFile = require('../templates/show-file.handlebars')

const userMessageBox = function (xField, xText, xColor) {
  $(xField).text(xText)
  $(xField).css('color', xColor)
  setTimeout(() => {
    $(xField).text('')
  }, 4000)
}

const createFileSuccess = function (data) {
  if (data.special_message) {
    userMessageBox('.uiFeedback', data.special_message, 'red')
  } else {
    userMessageBox('.uiFeedback', 'Uploaded File!', 'green')
    console.log('JSON from succesful AJAX:', data)
    store.files.push(data.file)
    const singleFileHTML = showFile({ file: data.file })
    $('#files-table tbody').prepend(singleFileHTML)
    // file-name-input
  }
  $('#file-name-input').val('')
  $('#upload-file-path').val('')
}

const createFileFailure = function () {
  userMessageBox('.uiFeedback', 'File upload failed!', 'red')
}

const getAllFilesSuccess = function (data) {
  // save all files from the request to the local store
  store.files = data.files
  console.log('getAllFilesSuccess data is:', data)
  const indexFilesHTML = indexFiles({ files: data.files })
  $('#files-display-container').html(indexFilesHTML)
}

const getAllFilesFailure = function (error) {
  userMessageBox('.uiFeedback', 'Error loading user files', 'red')
  console.log(error)
}

const getOneFileSuccess = function (data) {
  // console.log(data)
}

const getOneFileFailure = function (error) {
  // console.log(error)
}

const updateFileSuccess = function (data) {
  userMessageBox('.uiFeedback', 'File changed!', 'green')
  console.log('File updated!! Here\'s what we got:', data)
  $('#name-' + data.file.id).html($('#' + data.file.id).val())
  $('#' + data.file.id).val('')
  // console.log('data.file.file_name is:', data.file.file_name)
}

const updateFileFailure = function (error) {
  userMessageBox('.uiFeedback', 'Error updating file', 'red')
  console.log(error)
}

const deleteFileSuccess = function (data) {
  userMessageBox('.uiFeedback', 'File was successfully deleted.', 'green')
  console.log('File was successfully deleted.')
}

const deleteFileFailure = function (error) {
  userMessageBox('.uiFeedback', 'Error deleting file', 'red')
  console.log(error)
}

module.exports = {
  userMessageBox,
  createFileSuccess,
  createFileFailure,
  getAllFilesSuccess,
  getAllFilesFailure,
  getOneFileSuccess,
  getOneFileFailure,
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
