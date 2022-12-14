const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  age: Number,
  role:{
    type: String,
    enum: ["user", "admin","seller"],
    default: "user",
  }
})

const UserModel = model("users", UserSchema)

module.exports = UserModel
