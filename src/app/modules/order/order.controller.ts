import { Request, Response } from 'express';
import { OrderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderService.createOrderDB(orderData);

    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getAllOrdersFromDB();

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders',
    });
  }
};

const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const result = await OrderService.getOrdersByEmailFromDB(email as string);

    res.status(200).json({
      success: true,
      message: `Orders fetched successfully for user email!`,
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders by email',
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};
