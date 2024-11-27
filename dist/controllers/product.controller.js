"use strict";
//Controllers
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExistingProduct = exports.updateExistingProduct = exports.createNewProduct = exports.getProduct = exports.getAllProducts = void 0;
const product_model_1 = require("../models/product.model");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, product_model_1.getProducts)();
    res.json(products);
});
exports.getAllProducts = getAllProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const product = yield (0, product_model_1.getProductById)(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ error: "Product not found" });
    }
});
exports.getProduct = getProduct;
const createNewProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productName, price } = req.body;
    const product = yield (0, product_model_1.createProduct)(productName, price);
    res.json(product);
});
exports.createNewProduct = createNewProduct;
const updateExistingProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { productName, price } = req.body;
    const product = yield (0, product_model_1.updateProduct)(id, productName, price);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ error: "Product not found" });
    }
});
exports.updateExistingProduct = updateExistingProduct;
const deleteExistingProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const product = yield (0, product_model_1.deleteProduct)(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ error: "Product not found" });
    }
});
exports.deleteExistingProduct = deleteExistingProduct;
