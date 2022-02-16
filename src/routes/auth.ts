import { Router } from "express";
import GoogleRouter from "./auth/googleRouter";
import FacebookRouter from "./auth/facebookRouter";
import LinkedinRouter from "./auth/linkedinRouter";
import cookieAuth from "../controllers/auth/passport";
// import jwtAuth from "../controllers/auth/jwt";

const router = Router();

router.use("/google", GoogleRouter);
router.use("/linkedin", LinkedinRouter);
router.use("/facebook", FacebookRouter);

router.delete("/logout", cookieAuth.logout);

router.get("/failed", (_req, res) => res.send("authentication failed"));

export default router;
