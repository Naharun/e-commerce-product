import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';

const app: Application = express();
// const port = 3000

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', ProductRoutes);
app.use('/api', OrderRoutes); // Use Order Routes

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
