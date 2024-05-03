import express from 'express';
import bodyParser from 'body-parser';
import errorMiddleware from './middlewares/errorHandler.js';
import TimeLogsRouter from './routers/timeLogsRouter.js';
import { db } from './lib/database.js';

const { json } = bodyParser;
const app = express();
const port = 3000;

app.use(json());

// Routes for time logs
app.post('/api/v1/logs', createLog);
app.patch('/api/v1/logs/:id', updateLog);
app.get('/api/v1/logs', getAllLogs);
app.get('/api/v1/logs/:id', getLogById);
app.delete('/api/v1/logs/:id', deleteLog);

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
