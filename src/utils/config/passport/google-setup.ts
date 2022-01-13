import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

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
      clientID:
        "277274107369-qlfoh67o11rel18mfg5s5sf7rnvnm1rt.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3001/google/callback",
    },
    (_accessToken, _refreshToken, profile, done) =>
      /*
     use the profile info (mainly profile id) to check if the user is registerd in ur db
     If yes select the user and pass him to the done callback
     If not create the user and then select him and pass to callback
    */
      done(null, profile)
  )
);
