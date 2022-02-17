/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import passport, { Profile } from "passport";
import {
  Strategy as GoogleStrategy,
  VerifyCallback,
} from "passport-google-oauth20";
import { nanoid } from "nanoid";
import config from "../index";
import User from "../../../db/models/User";
import Auth from "../../../services/auth";

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientId,
      clientSecret: config.googleSecret,
      callbackURL:
        "https://linkedin-quizzes.herokuapp.com/auth/google/callback",
    },
    async (
      _accessToken: string,
      _refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      if (!profile.emails) return done();
      const email = profile.emails[0].value;
      const user = await User.findOne({ email });
      if (!user) {
        const newUser = await Auth.signUpWithPassport({
          first_name: profile.name?.givenName || "",
          last_name: profile.name?.familyName || "",
          email,
          password: nanoid().slice(8),
        });
        return done(null, newUser);
      }
      return done(null, user);
    }
  )
);
