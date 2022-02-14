const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router;

router.get('/', (req, res) => {
        let     obj ={
        name: 'joban',
        class: 'csb'
    }
    res.json(obj)
  })

module.exports = Mongoose.