const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { v4: uuidv4 } = require("uuid");
const UserModel = require("./models/user.model");
let dotenv = require("dotenv");
dotenv.config()


const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      let email = profile._json.email;
      const person = await UserModel.findOne({ email });
      if (person) {
        return cb(null, profile);
      } else {
        const user = new UserModel({
          email,
          password: uuidv4(),
        });
        // console.log(profile);
        await user.save();
        return cb(null, user);
      }
    }
  )
);

module.exports = passport;
