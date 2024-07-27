import express from "express";
import formidable from "express-formidable";

// middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import checkId from "../middlewares/checkId.js";

// controllers
import {
  addProduct,
  addProductReview,
  fetchAllProducts,
  fetchNewProducts,
  fetchProducts,
  fetchProductsById,
  fetchTopProducts,
  removeProduct,
  updateProductDetails,
} from "../controllers/productController.js";

const router = express.Router();

router
  .route("/")
  .get(fetchProducts)
  .post(authenticate, authorizeAdmin, formidable(), addProduct);

router.route("/allProducts").get(fetchAllProducts);

router
  .route("/:id/reviews")
  .post(authenticate, authorizeAdmin, addProductReview);

router.get("/top", fetchTopProducts);

router.get("/new", fetchNewProducts);

router
  .route("/:id")
  .get(fetchProductsById)
  .put(authenticate, authorizeAdmin, formidable(), updateProductDetails)
  .delete(authenticate, authorizeAdmin, removeProduct);

export default router;
