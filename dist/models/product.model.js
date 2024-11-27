"use strict";
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
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getProducts = exports.createProduct = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createProduct = (productName, price) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.product.create({
        data: {
            productName,
            price,
        },
    });
});
exports.createProduct = createProduct;
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.product.findMany();
});
exports.getProducts = getProducts;
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.product.findUnique({
        where: { id },
    });
});
exports.getProductById = getProductById;
const updateProduct = (id, productName, price) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.product.update({
        where: { id },
        data: { productName, price },
    });
});
exports.updateProduct = updateProduct;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.product.delete({
        where: { id },
    });
});
exports.deleteProduct = deleteProduct;
