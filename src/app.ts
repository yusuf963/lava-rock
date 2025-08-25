import express from 'express';
import healthRouter from './routes/health.js';
import { someUtilityFunction } from './utility.js';

const app = express();
app.use(express.json());

app.use('/health', healthRouter);

app.get('/', (_req, res) => {
  res.json({ ok: true });
});

app.get('/utility', (_req, res) => {
  const result: number = someUtilityFunction();
  res.json({ result });
});

export default app;
