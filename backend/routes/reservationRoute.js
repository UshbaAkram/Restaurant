const express = require("express");
const router = express.Router();
const Reservation = require("../models/reservationSchema");

// const {reservationContrller}= require('../controller/reservationContrller')

// router.post('/send',reservationContrller)
router.post('/send', async(req,res)=>{
    try {
        const { firstName, lastName, date, time, phone,email } = req.body;
        
    
        console.log(firstName, lastName, date, time, phone,"I AM IN " );

    
        const reserv = await Reservation.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                time: time,
                date:date,
                phone: phone,
              }).then(()=>console.log("hi")
              )
              // await console.log(reserv,"reserv");
              
        res.status(201).json({ message: 'Reservation created successfully!' });
      } catch (error) {
        res.status(500).json({messaeg:error.message , error: 'Server error, please try again later' });
      }
})
module.exports= router
