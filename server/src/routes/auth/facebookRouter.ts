import { Router } from "express";
import passport from "passport";
import Auth from "../../controllers/auth";

const router = Router();

router.get(
  "/",
  passport.authenticate("facebook", { scope: ["profile", "email"] })
);

router.get(
  "/callback",
  passport.authenticate("facebook", { failureRedirect: "auth/failed" }),
  Auth.login
);

export default router;
