const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/user.model");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
const passport = require("./google_auth");
const argon2 = require("argon2");
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const passport = require('passport')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// const GOOGLE_CLIENT_ID = "637888779417-4qjfftmvp10jj7ob6l30gujh5mv3sahl.apps.googleusercontent.com"
// const GOOGLE_CLIENT_SECRET = "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"

// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:8000/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     //   return cb(err, user);
//     // });
//     console.log(profile)
//   }
// ));

app.get("/", (req, res) => res.send("hello"));

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hash = await argon2.hash(password)
  try {
    const user = new UserModel({ name, email, password });
    await user.save();
    return res.status(201).send("User created successfully");
  } catch (e) {
    return res.send("email already exist");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email, password });
  if (await argon2.verify(user.password, password)) {
    const token = jwt.sign(
      { id: user._id, name: user.name, age: user.age },
      "SECRET1234",
      { expiresIn: "2 min" }
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
  passport.authenticate("google", { successRedirect:"http://localhost:3000/", failureRedirect: "/login", session:false }),
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
