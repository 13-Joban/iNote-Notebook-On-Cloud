const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
        let     obj ={
        name: 'joban notes',
        class: 'csb'
    }
    res.json(obj)
  })

module.exports = router