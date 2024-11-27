import { Router } from "express";

import {
    createNewProduct,
    deleteExistingProduct,
    getAllProducts,
    getProduct,
    updateExistingProduct,
} from "../controllers/product.controller";

    const router = Router();

    router.get("/products", getAllProducts);
    router.get("/products/:id", getProduct);
    router.post("/products", createNewProduct);
    router.put("/products/:id", updateExistingProduct);
    router.delete("/products/:id", deleteExistingProduct);

    export default router;