import createNewProduct from "../controllers/product.controller.js";
import express from "express";

const Routes = express.Router()

Routes.post("/create-product", createNewProduct)

export default Routes