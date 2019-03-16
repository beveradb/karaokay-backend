const express = require('express');
const router = express.Router();
const db = require('./queries')

/* GET default response. */
router.get('/', function(req, res, next) {
  res.json({ info: 'Karaokay API' })
});

router.get('/users', db.getUsers)
router.get('/users/:id', db.getUserById)
router.post('/users', db.createUser)
router.put('/users/:id', db.updateUser)
router.delete('/users/:id', db.deleteUser)

module.exports = router;
