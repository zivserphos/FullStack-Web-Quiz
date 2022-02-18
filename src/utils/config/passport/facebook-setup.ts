import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import config from "../index";

passport.use(
  new FacebookStrategy(
    {
      clientID: config.facebookClientId,
      clientSecret: config.facebookSecret,
      callbackURL:
        "https://linkedin-quizzes.herokuapp.com/auth/facebook/callback",
    },
    (_accessToken, _refreshToken, profile, done) => done(null, profile)
  )
);
