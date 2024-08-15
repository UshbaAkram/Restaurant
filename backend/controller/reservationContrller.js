const Reservation = require("../models/reservationSchema");
async function reservationContrller(req, res) {
//   const { firstName, lastName, email, time, date, phone } = req.body;
//   if (!firstName || !lastName || !email || !time || !date || !phone) {
//     // res.json({ message: "Must fill All Fields!" });
//     console.log(firstName, lastName, email, time, date, phone);
//   }
//   const reserv = await Reservation.create({
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     time: time,
//     date:date,
//     phone: phone,
//   });
//   res.status(200).json({ message: "Reservation Completed Successfully", user });

try {
    const { firstName, lastName, date, time, phone } = req.body;
    

    // Check if all fields are provided
    // if (!firstName || !lastName || !date || !time || !phone) {
    //     // res.json({req})
    //   return res.status(400).json({ error: 'All fields are required' });
    // }

    const newReservation = new Reservation({
      firstName,
      lastName,
      date,
      time,
      phone
    });

    await newReservation.save();
    res.status(201).json({ message: 'Reservation created successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Server error, please try again later' });
  }

}
module.exports = { reservationContrller };
