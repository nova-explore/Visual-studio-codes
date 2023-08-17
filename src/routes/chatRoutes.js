const express = require('express');
const router = express.Router();

router.get('/chat', (req, res) => {
    res.render('chat', { user: req.user });
});

module.exports = router;
