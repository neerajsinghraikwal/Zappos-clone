const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/user.model");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
const passport = require("./google_auth");
const argon2 = require("argon2");
const nodemailer = require("nodemailer");
// const dotenv = require("/dotenv");
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const passport = require("passport");
const OtpModel = require("./models/otp.model");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com.",
  port: 465,
  auth: {
    user: "nsrneerajsingh2721@gmail.com",
    pass: "jyxqfpmszbvmihfe",
    // "crmnsspvobyqsgjm",
  },
});

app.get("/", (req, res) => res.send("hello"));

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await argon2.hash(password);
  const token = req.headers["authorization"];
  try {
    if (token) {
      const decoded = jwt.decode(token);
      console.log(decoded);
      if (decoded && decoded.role === "admin") {
        const user = new UserModel({
          name,
          email,
          password,
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
        const user = new UserModel({ name, email, password });
        await user.save();
        // let otp = Math.random().toFixed(6)*1000000
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
});



app.post("/forgotpassword/enteremail",async(req,res)=> {
  const { email } = req.body;
  const emailExist = await UserModel.findOne({ email });
  const otp = Math.random().toFixed(6)*1000000
  if(emailExist){
    const checkEmail = await OtpModel.findOne({email})
    if(checkEmail){
      let otpUser = await OtpModel.updateOne({email},{$set: {Otp: otp}})
      transport
          .sendMail({
              to: email,
              subject: "Signup",
              text: `Your Otp is ${otp}` ,
            })
            .then(() => {
              console.log("Email sent successfully");
            });
            return res.status(201).send("Otp send successfully");
    }else{
      let otpUser = new OtpModel({email,Otp: otp})
      await otpUser.save();
      transport
          .sendMail({
              to: email,
              subject: "Signup",
              text: `Your Otp is ${otp}` ,
            }) 
            .then(() => {
              console.log("Email sent successfully");
            });
            return res.status(201).send("Otp send successfully");
    }
  }else{
    return res.status(401).send("Email not exist");
  }
})


app.post("/verifyotp", async(req,res) => {
  const {email,password,Otp:otp} = req.body;
  console.log(req.body.Otp)
  const identifyUser = await OtpModel.findOne({$and: [{email},{Otp: req.body.Otp}]})
  console.log("identify",identifyUser)
  if(identifyUser){
    let user = await UserModel.updateOne({email},{$set: {password}})
    let deleteOtp = await OtpModel.deleteOne({$and: [{email},{Otp:req.body.Otp}]})
    console.log("delete",deleteOtp)
    return res.status(200).send("Otp is correct")
  }else{
    return res.status(401).send("Otp is incorrect")
  }
})




app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email, password });
  if (await argon2.verify(user.password, password)) {
    const token = jwt.sign(
      { id: user._id, name: user.name, age: user.age },
      "SECRET1234",
      { expiresIn: "7 days" }
    );
    const refreshToken = jwt.sign({ id: user._id }, "REFRESHSECRET", {
      expiresIn: "28 days",
    });
    return res.send({ message: "Login Success", token, refreshToken });
  }
  return res.send("Invalid Credentials");
});

app.post("/refresh", async (req, res) => {
  const refreshToken = req.headers["authorization"];
  if (!refreshToken) {
    return res.status(401).send("Unauthorized");
  }
  try {
    const verification = jwt.verify(refreshToken, "REFRESHSECRET");
    if (verification) {
      const userData = await UserModel.findOne({ id: verification.id });
      const newToken = jwt.sign(
        { id: verification.id, ...userData },
        "SECRET1234",
        { expiresIn: "7 days" }
      );
      return res.send({ token: newToken });
    }
  } catch (e) {
    return res.send(e.message);
  }
});

// google authentication

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/login",
    session: false,
  })
);

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const token = req.headers["authorization"];
  if (!token) {
    return res.send("Unauthorized");
  }
  // if(blacklist.includes(token)){
  //   return res.send("token already expired")
  // }
  try {
    const verification = jwt.verify(token, "SECRET1234");
    if (verification) {
      const user = await UserModel.findOne({ _id: id });
      return res.send(user);
    }
  } catch (e) {
    return res.send("invalid token");
  }
});

// instructor
// app.post("/signup/instructor", async (req, res) => {
//   const { name, email, password } = req.body;
//   const user = new UserModel({
//     name,email,password,age,role:"instructor"
//   })
//   await user.save()
//   return res.status(201).send("Instructor created successfully");
// })

// app.post("/createlecture", async (req, res) => {
//   const token = req.headers.authorization
//   try{
//     const {role} = jwt.decode(token)
//     if(role !== "instructor"){
//       return res.status(401).send("Unauthorized");
//     }else{
//       return res.send(201).send("lecture created successfully")
//     }
//   }catch(err){
//     return res.send(err);
//   }
// })

mongoose.connect("mongodb://127.0.0.1:27017/zippos").then(() => {
  app.listen(8000, () => {
    console.log("server started on port 8080");
  });
});
