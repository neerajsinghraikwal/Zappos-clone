const argon2  = require("argon2");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const Redis = require("ioredis");
const nodemailer = require("nodemailer");




const transport = nodemailer.createTransport({
    host: "smtp.gmail.com.",
    port: 465,
    auth: {
      user: "nsrneerajsingh2721@gmail.com",
      pass: "jyxqfpmszbvmihfe",
      // "crmnsspvobyqsgjm",
    },
  });
  
  
  const redis = new Redis({
    port: 17582, // Redis port
    host: "redis-17582.c212.ap-south-1-1.ec2.cloud.redislabs.com", // Redis host
    username: "default", // needs Redis >= 6
    password: "D9n56mdVPczcQBbcQvpOvNOk6I2yVACY",
    db: 0, // Defaults to 0
  });




const register = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await argon2.hash(password);
  console.log(hash)
  const token = req.headers["authorization"];
  try {
    if (token) {
      const decoded = jwt.decode(token);
      console.log(decoded);
      if (decoded && decoded.role === "admin") {
        const user = new UserModel({
          name,
          email,
          password: hash,
          role: "seller",
        });
        await user.save();
        return res.status(201).send("Seller created successfully");
      } else {
        return res.status(403).send("You are not allowed to create seller");
      }
    } else {
      const alreadyEmail = await UserModel.findOne({ email });
      if (alreadyEmail) {
        return res.status(401).send("Email already exist");
      } else {
        const user = new UserModel({ name, email, password:hash });
        await user.save();
        transport
          .sendMail({
            to: email,
            subject: "Signup",
            text: "Your Signup is successful",
          })
          .then(() => {
            console.log("Email sent successfully");
          });
        return res.status(201).send("User created successfully");
      }
    }
  } catch (err) {
    console.log(err);
  }
};







const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  try {
    if (await argon2.verify(user.password, password)) {
      const token = jwt.sign(
        { id: user._id, name: user.name, age: user.age },
        "SECRET1234",
        { expiresIn: "7 days" }
        );
        const refreshToken = jwt.sign({ id: user._id }, "REFRESHSECRET", {
          expiresIn: "28 days",
        });
        console.log(user._id)
        const verification = jwt.verify(token, "SECRET1234");
        console.log("verify",verification,verification.exp - verification.iat)
        redis.hmset("user._id", "token", token, "exp", verification.exp,"user", JSON.stringify(user))
        redis.hgetall("user._id", (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(JSON.parse(result.user))
          }
        });
      return res.send({ message: "Login Success", token, refreshToken, "name":user.name, "email": user.email });
    } else {
      return res.send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
} 



module.exports = {register,login}