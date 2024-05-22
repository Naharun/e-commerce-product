import { Product } from './product.interface';
import ProductModel from './product.model';

const createProductDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

const updateProductInDB = async (
  productId: string,
  updateData: Partial<Product>,
) => {
  const result = await ProductModel.findByIdAndUpdate(productId, updateData, {
    new: true,
  });
  return result;
};

export const ProductService = {
  createProductDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductInDB,
};
