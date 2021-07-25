import { Router } from "express";
import * as searchController from "../controllers/searchController";

const router = Router();

router.get("/movie", searchController.retrieveSearchResults);

export default router;
