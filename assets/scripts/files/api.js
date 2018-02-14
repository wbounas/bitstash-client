'use strict'

const config = require('../config')
const store = require('../store')

const createFile = function (data) {
  console.log('data for ajax is: ', data)
  return $.ajax({
    url: 'http://localhost:4741/files',
    method: 'POST',
    data: data,
    contentType: false,
    processData: false
  })
}

module.exports = {
  createFile
}
