import { Order } from './order.interface';
import OrderModel from './order.model';

const createOrderDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

const getOrdersByEmailFromDB = async (email: string) => {
  const result = await OrderModel.find({ email });
  return result;
};

export const OrderService = {
  createOrderDB,
  getAllOrdersFromDB,
  getOrdersByEmailFromDB,
};
