import express from "express";
const router = express.Router();
import getAllPosts from "../controllers/postController.js";

router.route("/").get(getAllPosts);

export default router;
