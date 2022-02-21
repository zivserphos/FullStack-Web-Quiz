import { Router } from "express";
import getJobs from "../controllers/jobs";

const router = Router();

router.get("/", getJobs);

export default router;
