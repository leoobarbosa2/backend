import { Router } from 'express';

import TransactionsRoutes from './Transactions.routes';

const routes = Router();

routes.use('/transactions', TransactionsRoutes);

export default routes;
