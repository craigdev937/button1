import express from "express";
import { home } from "../controllers/bcontroller";
const router = express.Router();

router.get("/", home);

export default router;

