import passport from "passport";
import { Strategy as GithubStrategy } from "passport-github2";
import config from "../index";

passport.use(
  new GithubStrategy(
    {
      clientID: config.githubClientId,
      clientSecret: config.githubSecret,
      callbackURL: `${config.callbackURL}/auth/github/callback`,
    },
    (_accessToken, _refreshToken, profile, done) => done(null, profile)
  )
);
