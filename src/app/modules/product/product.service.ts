import { Product } from './product.interface';
import ProductModel from './product.model';

//post
const createProductDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

//get
const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

//get a single product
const getSingleProductFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

//update product
const updateProductInDB = async (
  productId: string,
  updateData: Partial<Product>,
) => {
  const result = await ProductModel.findByIdAndUpdate(productId, updateData, {
    new: true,
  });
  return result;
};

//delete product
const deleteProductFromDB = async (productId: string) => {
  await ProductModel.findByIdAndDelete(productId);
};

const searchProductsInDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i');
  const result = await ProductModel.find({
    $or: [
      { name: regex },
      { description: regex },
      { category: regex },
      { tags: regex },
    ],
  });
  return result;
};

export const ProductService = {
  createProductDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
  searchProductsInDB,
};
