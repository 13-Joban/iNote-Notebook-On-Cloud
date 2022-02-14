const ConnectToMongo = require('./db');
const express = require('express');
const app = express()
const port = 2000;
ConnectToMongo();
// we need to use middleware to get body of json
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello Joban!')
})
// Available Routes
app.use('/api/', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
