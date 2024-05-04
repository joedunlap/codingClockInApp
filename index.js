import express from 'express';
import bodyParser from 'body-parser';
import { startTimeMiddleware } from './middlewares/startTimemiddleware.js';
import { endTimeAndDurationMiddleware } from './middlewares/endDurationmiddleware.js';
import errorMiddleware from './middlewares/errorHandler.js';
import CodingLogsRouter from './routers/routers.js';
import { db } from './lib/database.js';

const { json } = bodyParser;
const app = express();
const port = 3001;

app.use(json());

// Apply startTimeMiddleware for all time log routes
app.use('/api/v1/logs', startTimeMiddleware);

// Individual route handlers for specific HTTP methods
app.post('/api/v1/logs', CodingLogsRouter); // POST request to create a new log

app.use('/api/v1/logs', CodingLogsRouter); // Use the router for all routes under '/api/v1/logs'

// Middleware for PATCH and PUT requests with endTimeAndDurationMiddleware
app.patch('/api/v1/logs/:id', endTimeAndDurationMiddleware); 
app.put('/api/v1/logs/:id', endTimeAndDurationMiddleware);

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
