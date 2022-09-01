const path = require('path');

const express = require('express');

const appointmentController = require('../Controller/appointment');

const router = express.Router();

router.get('/',appointmentController.getAddUser);

router.post('/addUser',appointmentController.postAddUser);

router.get('/editUser',);

module.exports = router;