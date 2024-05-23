import { Order } from './order.interface';
import OrderModel from './order.model';

//post
const createOrderDB = async (orderData: Order) => {
  const result = await OrderModel.create(orderData);
  console.log('Order data received in service:', orderData); // Debugging statement
  return result;
};

//get
const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

//get order by email
const getOrdersByEmailFromDB = async (email: string) => {
  const result = await OrderModel.find({ email });
  return result;
};

export const OrderService = {
  createOrderDB,
  getAllOrdersFromDB,
  getOrdersByEmailFromDB,
};
