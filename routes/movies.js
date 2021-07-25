import { Router } from "express";
import * as movieController from "../controllers/movieController";

const router = Router();

router.get("/", movieController.retrieveMoviesByType);
router.get("/:id", movieController.retrieveMovieDetails);
router.get("/:id/credits", movieController.retrieveMovieCredits);
router.get("/:id/images", movieController.retrieveMovieImages);
router.get("/:id/videos", movieController.retrieveMovieVideos);
router.get("/:id/reviews", movieController.retrieveMovieImages);

export default router;
