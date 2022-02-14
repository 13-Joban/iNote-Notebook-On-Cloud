const ConnectToMongo = require('./db');
const express = require('express')
const app = express()
const port = 3000
ConnectToMongo();
app.get('/', (req, res) => {
  res.send('Hello Joban!')
})
// Available 
app.use('api/auth', require('./routes/auth.js'))
app.use('api/notes', require('./routes/notes.js'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})