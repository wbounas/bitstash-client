'use strict'

const config = require('../config')
const store = require('../store')

const createFile = function (data) {
  console.log('data for ajax is: ', data)
  return $.ajax({
    url: config.apiOrigin + '/files',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data,
    contentType: false,
    processData: false
  })
}

const getAllFiles = function (data) {
  console.log('data inside of getAllFiles is:', data)
  return $.ajax({
    url: config.apiOrigin + '/files',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getOneFile = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/files/' + data.file.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateFile = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/files/' + data.file.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteFile = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/files/' + data.file.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createFile,
  getAllFiles,
  getOneFile,
  updateFile,
  deleteFile
}
