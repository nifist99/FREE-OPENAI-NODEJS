'use strict';
const express = require('express')
const router = express.Router();
const chat = require("../controllers/chatAI");


router.post('/chat', chat);

module.exports = router;