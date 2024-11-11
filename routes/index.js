// index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

// Access io from req.app in a route handler
router.get('/socket', (req, res) => {
  const io = req.app.get('io'); // Access io instance
  if (io) {
    io.on('connection', (socket) => {
      console.log('User connected from index.js');
      socket.on('disconnect', () => {
        console.log('User disconnected from index.js');
      });
    });
  }
  res.send('Socket.IO setup done');
});

module.exports = router;
