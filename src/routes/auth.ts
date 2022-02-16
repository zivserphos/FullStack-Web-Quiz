import { Router } from "express";
import GoogleRouter from "./auth/googleRouter";
import FacebookRouter from "./auth/facebookRouter";
import LinkedinRouter from "./auth/linkedinRouter";
import Auth from "../controllers/auth";
// import jwtAuth from "../controllers/auth/jwt";

const router = Router();

router.use("/google", GoogleRouter);
router.use("/linkedin", LinkedinRouter);
router.use("/facebook", FacebookRouter);

router.post("/login", Auth.login);
router.delete("/logout", Auth.logout);

router.get("/failed", (_req, res) => res.send("authentication failed"));

export default router;
