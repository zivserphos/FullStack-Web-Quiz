/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from "express";
import passport from "passport";
import { genQuiz, genCustom, sendQuiz } from "../controllers/api";
import User from "../db/models/User";

const router = Router();

router.get("/aaaa", (_req, res) => {
  passport.deserializeUser(async (id: string, done) => {
    const user = await User.findById(id);

    done(null, user || null);
  });
  res.send("jesus");
});

router.get("/subject/:difficulty");

router.get("/:subject", genQuiz);

router.post("/send-quiz", sendQuiz);

router.get("/:subject/:limit", genCustom);

export default router;
