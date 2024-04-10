// routes/users.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
// router.get("/", (req, res) => {
//     res.send("Contact route is displaying data")
// })
router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/name/:name', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
