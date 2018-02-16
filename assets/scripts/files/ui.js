'use strict'

const store = require('../store')
const indexFiles = require('../templates/index-files.handlebars')
const showFile = require('../templates/show-file.handlebars')

const createFileSuccess = function (data) {
  $('#uiFeedback').text('Uploaded file!')
  $('#uiFeedback').css('color', 'green')
  console.log('JSON from succesful AJAX:', data)
  const singleFileHTML = showFile({ file: data.file })
  $('#files-table tbody').prepend(singleFileHTML)
}

const createFileFailure = function () {
  $('#uiFeedback').text('File upload failed!')
  $('#uiFeedback').css('color', 'red')
}

const getAllFilesSuccess = function (data) {
  // save all files from the request to the local store
  store.files = data.files
  console.log('getAllFilesSuccess data is:', data)
  const indexFilesHTML = indexFiles({ files: data.files })
  $('#files-display-container').html(indexFilesHTML)
}

const getAllFilesFailure = function (error) {
  console.log(error)
}

const getOneFileSuccess = function (data) {
  console.log(data)
}

const getOneFileFailure = function (error) {
  console.log(error)
}

const updateFileSuccess = function (data) {
  console.log('File updated!! Here\'s what we got:', data)
  $('#name-' + data.file.id).html($('#' + data.file.id).val())
  $('#' + data.file.id).val('')
  // console.log('data.file.file_name is:', data.file.file_name)
}

const updateFileFailure = function (error) {
  console.log(error)
}

const deleteFileSuccess = function (data) {
  console.log('File was successfully deleted.')
}

const deleteFileFailure = function (error) {
  console.log(error)
}

module.exports = {
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
