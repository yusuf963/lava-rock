import app from './app.js';

const PORT = Number(process.env.PORT || 8000);

(async () => {
  app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
  });
})();
