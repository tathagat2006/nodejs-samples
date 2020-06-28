//Steps to setup a express project
// 1. npm init
// 2. npm install express --save

const express = require('express')
const app = express()

app.get('/', function(req,res) {
  res.send('Hello world!')
})

app.listen(3000, function() {
  console.log('listening on http://localhost:3000')
})