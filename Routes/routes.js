const path = require('path');

const express = require('express');

const appointmentController = require('../Controller/appointment');

const router = express.Router();

router.get('/addUser',appointmentController.getAddUser);

router.post('/addUser',appointmentController.postAddUser);

router.get('/editUser/:userId', appointmentController.getEditUser);

router.delete('/deleteUser/:userId', appointmentController.deleteUser);

//router.post('/deleteUser/:userId', appointmentController.deleteUser);

router.get('/', appointmentController.getUser);

router.post('/', appointmentController.getUser);

module.exports = router;