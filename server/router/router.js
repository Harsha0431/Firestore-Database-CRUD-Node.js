const express = require('express');

const router = express.Router();

const controller = require('../controller/controller');

router.post('/', controller.addUser);

router.get('/', controller.getAllUsers);

router.get('/:id', controller.getUserById);

router.put('/:id', controller.updateUserById);

router.delete('/:id', controller.deleteUserById);

module.exports = router;