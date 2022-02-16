import { Router } from "express";
import GoogleRouter from "./auth/googleRouter";
import FacebookRouter from "./auth/facebookRouter";
import LinkedinRouter from "./auth/linkedinRouter";
import Auth from "../controllers/auth";

const router = Router();

router.use("/google", GoogleRouter);
router.use("/linkedin", LinkedinRouter);
router.use("/facebook", FacebookRouter);

router.post("/login", Auth.loginJWT);
router.post("/sign-up", Auth.signUp);
router.delete("/logout", Auth.logout);

router.get("/failed", (_req, res) => res.send("authentication failed"));

export default router;
