import { Request, Response } from 'express';
import { OrderService } from './order.service';
import { createOrderSchema } from './order.validation';
import { Types } from 'mongoose';

const createOrder = async (req: Request, res: Response) => {
  try {
    const parsedBody = createOrderSchema.safeParse(req.body);

    if (!parsedBody.success) {
      return res.status(400).json({
        success: false,
        message: 'Invalid request data',
        errors: parsedBody.error.errors,
      });
    }

    const { email, productId, price, quantity } = parsedBody.data;

    // Convert productId from string to ObjectId
    const orderData = {
      email,
      productId: new Types.ObjectId(productId),
      price,
      quantity,
    };

    const result = await OrderService.createOrderDB(orderData);

    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    console.error('Error creating order:', (err as Error).message);
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: (err as Error).message,
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
    console.error('Error fetching orders:', (err as Error).message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders',
      error: (err as Error).message,
    });
  }
};

const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email query parameter is required',
      });
    }
    const result = await OrderService.getOrdersByEmailFromDB(email as string);
    res.status(200).json({
      success: true,
      message: `Orders fetched successfully for email: ${email}`,
      data: result,
    });
  } catch (err) {
    console.error('Error fetching orders by email:', (err as Error).message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders by email',
      error: (err as Error).message,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};

// import { Request, Response } from 'express';
// import { OrderService } from './order.service';

// const createOrder = async (req: Request, res: Response) => {
//   try {
//     const { email, productId, price, quantity } = req.body;

//     if (!email || !productId || !price || !quantity) {
//       return res.status(400).json({
//         success: false,
//         message: 'All fields are required',
//       });
//     }

//     const orderData = { email, productId, price, quantity };
//     const result = await OrderService.createOrderDB(orderData);

//     res.status(201).json({
//       success: true,
//       message: 'Order created successfully!',
//       data: result,
//     });
//   } catch (err) {
//     console.error('Error creating order:', err.message);
//     res.status(500).json({
//       success: false,
//       message: 'Failed to create order',
//       error: err.message,
//     });
//   }
// };

// export const OrderControllers = {
//   createOrder,
//   getAllOrders: async (req: Request, res: Response) => {
//     try {
//       const result = await OrderService.getAllOrdersFromDB();
//       res.status(200).json({
//         success: true,
//         message: 'Orders fetched successfully!',
//         data: result,
//       });
//     } catch (err) {
//       console.error('Error fetching orders:', err.message);
//       res.status(500).json({
//         success: false,
//         message: 'Failed to fetch orders',
//         error: err.message,
//       });
//     }
//   },
//   getOrdersByEmail: async (req: Request, res: Response) => {
//     try {
//       const { email } = req.query;
//       if (!email) {
//         return res.status(400).json({
//           success: false,
//           message: 'Email query parameter is required',
//         });
//       }
//       const result = await OrderService.getOrdersByEmailFromDB(email as string);
//       res.status(200).json({
//         success: true,
//         message: `Orders fetched successfully for email: ${email}`,
//         data: result,
//       });
//     } catch (err) {
//       console.error('Error fetching orders by email:', err.message);
//       res.status(500).json({
//         success: false,
//         message: 'Failed to fetch orders by email',
//         error: err.message,
//       });
//     }
//   },
// };
