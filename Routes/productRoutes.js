import express from "express";
import getAllProducts from "../Controllers/productController.js";

const router = express.Router();

router.route("/").get(getAllProducts);

export default router;