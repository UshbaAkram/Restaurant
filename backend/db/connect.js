const mongoose= require("mongoose")
require('dotenv').config();
async function connectToMongoDB(){
  return await mongoose.connect( process.env.MONGODB_URL)
}
 module.exports = {
    connectToMongoDB,
  };