import express from 'express';
import bodyParser from 'body-parser';
import errorMiddleware from './middlewares/errorHandler.js';
import CodingLogsRouter from './routers/routers.js';
import { db } from './lib/database.js';

const { json } = bodyParser;
const app = express();
const port = 3000;

app.use(json());

// Routes for time logs
app.post('/api/v1/logs');
app.patch('/api/v1/logs/:id');
app.put('/api/v1/logs/: id');
app.use('/api/v1/logs', CodingLogsRouter);

// Catch-all route for handling undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found, check url' });
});

// Error middleware MUST be last
app.use(errorMiddleware);

// Initialize database connection
db.init();

app.listen(port, () => {
  console.log(`Starting express application on port ${port} @ ${new Date().toISOString()}`);
});
