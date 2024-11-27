import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct = async (productName: string, price: number) => {
  return prisma.product.create({
    data: {
      productName,
      price,
    },
  });
};

export const getProducts = async () => {
  return prisma.product.findMany();
};

export const getProductById = async (id: number) => {
  return prisma.product.findUnique({
    where: { id },
  });
};

export const updateProduct = async (id: number, productName: string, price: number) => {
  return prisma.product.update({
    where: { id },
    data: { productName, price },
  });
};

export const deleteProduct = async (id: number) => {
  return prisma.product.delete({
    where: { id },
  });
};
