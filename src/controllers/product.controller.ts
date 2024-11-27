//Controllers

import { Request, Response } from "express";
import {
    createProduct,
    deleteProduct,
    getProducts,        
    getProductById,
    updateProduct,    
} from "../models/product.model";

export const getAllProducts = async (req: Request, res: Response) => {
    const products = await getProducts();
    res.json(products);                     
};

export const getProduct = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const product = await getProductById(id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: "Product not found" });
    }
};  

export const createNewProduct = async (req: Request, res: Response) => {
    const { productName, price } = req.body;
    const product = await createProduct(productName, price);
    res.json(product);
};  

export const updateExistingProduct = async (req: Request, res: Response) => {    
    const id = parseInt(req.params.id);         
    const { productName, price } = req.body;
    const product = await updateProduct(id, productName, price);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: "Product not found" });
    }
};

export const deleteExistingProduct = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const product = await deleteProduct(id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: "Product not found" });
    }
}       

