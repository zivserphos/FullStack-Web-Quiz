/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import passport, { Profile } from "passport";
import {
  Strategy as GoogleStrategy,
  VerifyCallback,
} from "passport-google-oauth20";
import config from "../index";
import User from "../../../db/models/User";
import signUp from "../../../services/auth";

passport.serializeUser((user: Express.User, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  const user = await User.findById(id);
  done(null, user || null);
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
      const user = await User.findOne({ googleId: profile.id });
      if (!user) {
        const newUser = await signUp({
          googleId: profile.id,
          firstName: profile.name?.givenName || "",
          lastName: profile.name?.familyName || "",
          email: "zivfromisraelGmail.com",
          password: "ggggg",
        });
        return done(null, newUser);
      }
      console.log("ffffffffffff", user);
      return done(null, user);
    }
  )
);
