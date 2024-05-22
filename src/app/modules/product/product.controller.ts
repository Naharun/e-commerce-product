import { Request, Response } from 'express';
import { ProductService } from './product.service';

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

export const ProductControllers = {
  createProduct,
  getAllProduct,
};
