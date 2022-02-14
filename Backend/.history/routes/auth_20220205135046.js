const express = require('express');
const router = express.Router;

router.get('/', (req, res) => {
    res.send(' helloo i am auth !')
  })

  router.send