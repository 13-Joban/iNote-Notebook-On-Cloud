const express = require('express');

const router = express.Router;

router.get('/', (req, res) => {
        let     obj ={
        name: 'joban',
        class: 'csb'
    }
    res.json(obj)
  })

module.exports = router