import { Router } from "express";
import { genQuiz, genCustom, sendQuiz } from "../controllers/api";

const router = Router();

router.get("/subject/:difficulty");

router.get("/:subject", genQuiz);

router.post("/send-quiz", sendQuiz);

router.get("/:subject/:limit", genCustom);

export default router;
