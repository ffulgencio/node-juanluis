import {Router, Request, Response} from "express";
import { getHello } from "../controllers/hero.controller";
const router =  Router();

router.get("/hero", getHello)

export default router;