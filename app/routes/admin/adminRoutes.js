// routes/adminRoutes.js
const express = require('express');
const adminController = require('../../controller/admin/adminController');
const router = express.Router();


//login
router.post('/login',adminController.adminLogin)
router.get('/logout',adminController.adminlogout)

module.exports = router;
