import passport, { Profile } from "passport";
import {
  Strategy as GoogleStrategy,
  VerifyCallback,
} from "passport-google-oauth20";
import config from "../index";
import User from "../../../db/models/User";

passport.serializeUser((user, done) => {
  console.log("hello from serialize");
  /*
    From the user take just the id (to minimize the cookie size) and just pass the id of the user
    to the done callback
    PS: You dont have to do it like this its just usually done like this
    */
  done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
  console.log(user, "hello from deserialize");
  /*
    Instead of user this function usually recives the id
    then you use the id to select the user from the db and pass the user obj to the done callback
    PS: You can later access this data in any routes in: req.user
    */
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientId,
      clientSecret: config.googleSecret,
      callbackURL: "http://localhost:3001/auth/google/callback",
    },
    (
      _accessToken: string,
      _refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      User.findOne({ email: profile.emails?.values }).then((currentUser) => {
        if (currentUser) {
          console.log("gg");
        }
      });
      /*
     use the profile info (mainly profile id) to check if the user is registerd in ur db
     If yes select the user and pass him to the done callback
     If not create the user and then select him and pass to callback
    */
      done(null, profile);
    }
  )
);
