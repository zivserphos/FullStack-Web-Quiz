import passport from "passport";
import { Strategy as GithubStrategy } from "passport-github2";
import { nanoid } from "nanoid";
import Auth from "../../../services/auth";
import User from "../../../db/models/User";
import config from "../index";

passport.use(
  new GithubStrategy(
    {
      clientID: config.githubClientId,
      clientSecret: config.githubSecret,
      callbackURL: `${config.callbackURL}/auth/github/callback`,
    },
    async (_accessToken: string, _refreshToken: string, profile, done) => {
      if (!profile.username) return done();
      const email = profile.username;
      const user = await User.findOne({ email });
      if (!user) {
        const newUser = await Auth.signUpWithPassport({
          first_name: profile.username || "",
          last_name: profile.username || "",
          email,
          password: nanoid().slice(8),
        });
        return done(null, newUser);
      }

      return done(null, user);
    }
  )
);
