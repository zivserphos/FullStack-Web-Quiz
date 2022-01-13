import { Router } from "express";
import GoogleRouter from "./auth/googleRouter";

const router = Router();

router.get("/google", GoogleRouter);
