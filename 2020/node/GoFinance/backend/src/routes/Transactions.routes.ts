import { Router } from 'express';

const transactionRouter = Router();

transactionRouter.post('/', (request, response) => {
  const transaction = {
    id: 'abc123',
    value: 33.6,
    date: new Date(),
  };

  return response.json(transaction);
});

export default transactionRouter;
