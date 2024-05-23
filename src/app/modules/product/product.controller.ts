import { Request, Response } from 'express';
import { ProductService } from './product.service';

//post
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const result = await ProductService.createProductDB(productData);

    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//get
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductFromDB();

    res.status(200).json({
      success: true,
      message: 'Products are retrieve successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//get a single product
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Products is retrieve successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//update
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await ProductService.updateProductInDB(
      productId,
      updateData,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Failed to update product',
    });
  }
};

//delete
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductService.deleteProductFromDB(productId); // Call service layer

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Failed to delete product',
    });
  }
};

//search
const searchProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductService.searchProductsInDB(
      searchTerm as string,
    ); // Call service layer

    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Failed to search products',
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};
