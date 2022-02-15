import { Router } from "express";
import { genQuiz, genCustom } from "../controllers/api";

const router = Router();

router.get("/subject/:difficulty");

router.get("/:subject", genQuiz);

router.get("/:subject/:limit", genCustom);

export default router;
