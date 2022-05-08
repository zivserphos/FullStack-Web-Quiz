import { Router } from "express";
import fakeUsersStats from "../controllers/fake";

const router = Router();

router.get("/stats/users", fakeUsersStats);

export default router;
