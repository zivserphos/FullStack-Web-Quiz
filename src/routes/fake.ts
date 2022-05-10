import { Router } from "express";
import { fakeUsersStats, fakeQuizzesDetails } from "../controllers/fake";

const router = Router();

router.get("/stats/users", fakeUsersStats);
router.get("/stats/quizzes", fakeQuizzesDetails);

export default router;
