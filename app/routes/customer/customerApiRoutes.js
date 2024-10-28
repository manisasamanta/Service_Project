// routes/customerRoutes.js
const express = require('express');
const bookingCrud = require('../../controller/customer/customerApiController.js/bookingCrud');
const contactCRUD = require('../../controller/customer/customerApiController.js/contactCRUD');
const { CheckAuth } = require('../../middleware/AuthVerification');
const customerViewController = require('../../controller/customer/customerViewController');

const router = express.Router();

//booking
router.post('/createBooking',bookingCrud.createBooking)
router.get('/booking',CheckAuth,customerViewController.Authuser,bookingCrud.booking_form)

//contact
router.post('/createContact',contactCRUD.createContact)
module.exports = router; 
