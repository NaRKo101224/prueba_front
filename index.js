#!/usr/bin/env node
 
const express = require('express')
const path = require('path')
const app = express()
const port = 8080
const indexFolder = 'browser'
 
const distPath = path.join(__dirname, indexFolder)
 
app.use('/', express.static(distPath))
 
app.use((req, res, next) => {
  const indexPath = path.join(distPath, 'index.html');
  res.sendFile(indexPath);
});
 
app.listen(port, (err) => {
  console.log(`server is listening on ${port}`)
  console.log(`serving from ${distPath}`)
})
