/* eslint-disable import/no-named-as-default-member */
import { Router } from "express";
import GoogleRouter from "./auth/googleRouter";
import githubRouter from "./auth/githubRouter";
import LinkedinRouter from "./auth/linkedinRouter";
import Auth from "../controllers/auth";

const router = Router();

router.use("/google", GoogleRouter);
router.use("/linkedin", LinkedinRouter);
router.use("/github", githubRouter);

router.post("/login", Auth.loginJWT);
router.post("/sign-up", Auth.signUp);
router.delete("/logout", Auth.logout);

router.get("/failed", (_req, res) => res.send("authentication failed"));

export default router;
