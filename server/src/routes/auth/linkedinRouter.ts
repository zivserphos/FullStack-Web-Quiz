import { Router } from "express";
import passport from "passport";
import Auth from "../../controllers/auth";

const router = Router();

router.get("/", passport.authenticate("linkedin", { state: "SOME STATE" }));

router.get(
  "/callback",
  passport.authenticate("linkedin", { failureRedirect: "auth/failed" }),
  Auth.login
);

export default router;
