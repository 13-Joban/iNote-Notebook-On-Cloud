const ConnectToMongo = require('./db');
const express = require('express')
const app = express()
const port = 3000
ConnectToMongo();
app.get('/', (req, res) => {
  res.send('Hello Joban!')
})

app.use('api/', require('./routes/auth.js'))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})