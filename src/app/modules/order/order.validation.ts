import { z } from 'zod';

export const createOrderSchema = z.object({
  email: z.string().email(),
  productId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid productId format'),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});
