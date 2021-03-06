import passport from "passport";
import { Strategy as LinkedinStrategy } from "passport-linkedin-oauth2";
import { nanoid } from "nanoid";
import config from "../index";
import User from "../../../db/models/User";
import Auth from "../../../services/auth";

passport.use(
  new LinkedinStrategy(
    {
      clientID: config.linkedinClientId,
      clientSecret: config.linkedinSecret,
      callbackURL: `${config.callbackURL}/auth/linkedin/callback`,
      scope: ["r_emailaddress", "r_liteprofile"],
    },
    (_accessToken, _refreshToken, profile, done) =>
      process.nextTick(async () => {
        if (!profile.emails) return done("linkedin authentication failed");
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
      })
  )
);
