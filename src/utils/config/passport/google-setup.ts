/* eslint-disable import/extensions */
import passport, { Profile } from "passport";
import {
  Strategy as GoogleStrategy,
  VerifyCallback,
} from "passport-google-oauth20";
import config from "../index";
import User from "../../../db/models/User";

// import signUp from "../../../services/auth";

passport.serializeUser((user: Express.User, done) => {
  console.log("hello from serialize");
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  console.log(id, "hello from deserialize");
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientId,
      clientSecret: config.googleSecret,
      callbackURL: "http://localhost:3001/auth/google/callback",
    },
    async (
      _accessToken: string,
      _refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      const user = await User.findOne({ email: profile.emails?.values });
      if (!user) {
        try {
          console.log(profile);

          // await signUp({
          //   first_name:
          // })
        } catch (err) {
          console.log(err);
        }
        console.log("user is:");
        // done(null, profile);
      }
      /*
     use the profile info (mainly profile id) to check if the user is registerd in ur db
     If yes select the user and pass him to the done callback
     If not create the user and then select him and pass to callback
    */
      done(null, profile);
    }
  )
);
