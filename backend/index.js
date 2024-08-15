const express = require("express");
const mongoose = require("mongoose");
const { connectToMongoDB } = require("./db/connect");
const cookieParser = require("cookie-parser");
const router = require("./routes/reservationRoute");
require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: "POST,GET,UPDATE",
    credentials: true,
  })
);

connectToMongoDB().then(() => console.log(`Mongodb connected at ${process.env.MONGODB_URL}`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',router)

app.listen(process.env.PORT || 7000, () =>
  console.log("Server Started At 7000")
);
