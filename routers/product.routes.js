import express from "express";
import createNewProduct from "../controllers/product.controller.js";
import updateProduct from "../controllers/update.product.controller.js";

const Routes = express.Router()

Routes.post("/create-product", createNewProduct);
Routes.put("/update-product/:id", updateProduct);

export default Routes;
