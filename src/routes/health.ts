import { Router } from 'express';
import info from '../data/sample.json' with { type: 'json' }; // JSON import (Node 22+)

const router = Router();

router.get('/', (_req, res) => {
  res.json({ status: 'up', info });
});

export default router;
