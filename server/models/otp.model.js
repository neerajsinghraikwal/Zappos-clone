const {Schema, model} = require("mongoose")

const OtpSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  Otp:Number
})

const OtpModel = model("otps", OtpSchema)

module.exports = OtpModel
