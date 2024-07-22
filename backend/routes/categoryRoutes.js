import express from "express";
import {
  createCategory,
  listCategory,
  readCategory,
  removeCategory,
  updateCategory,
} from "../controllers/categoryController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(authenticate, authorizeAdmin, createCategory);

router.route("/categories").get(listCategory); // router 1

router // router 2
  .route("/:categoryId")
  .get(readCategory)
  .put(authenticate, authorizeAdmin, updateCategory)
  .delete(authenticate, authorizeAdmin, removeCategory);

// router.route("/:id").get(readCategory);

/**
 * If we have written router 2 first then /categories will be considered as the categoryId i.e.         categoryId = "categories"
 */

export default router;
