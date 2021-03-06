/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import "./google-setup";
import "./github-setup";
import "./linkedin-setup";
import passport from "passport";
import User from "../../../db/models/User";

passport.serializeUser((user: Express.User, done) => {
  console.log(user, "Zzz");
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  const user: UserInt = await User.findOne({ email: id });

  done(null, user || null);
});
