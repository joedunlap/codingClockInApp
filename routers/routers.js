import express from 'express';
import {
  getCodingLogs,
  createCodingLog,
  getCodingLog,
  replaceCodingLog,
  deleteCodingLog,
  updateCodingLog,
} from '../controllers/controller.js';

const CodingLogsRouter = express.Router();

// GET /api/v1/coding-logs
CodingLogsRouter.get('/', getCodingLogs);

// POST /api/v1/coding-logs
CodingLogsRouter.post('/', createCodingLog);

// GET /api/v1/coding-logs/<id>
CodingLogsRouter.get('/:id', getCodingLog);

// PUT /api/v1/coding-logs/<id>
CodingLogsRouter.put('/:id', replaceCodingLog);

// DELETE /api/v1/coding-logs/<id>
CodingLogsRouter.delete('/:id', deleteCodingLog);

// PATCH /api/v1/coding-logs/<id>
CodingLogsRouter.patch('/:id', updateCodingLog);

export default CodingLogsRouter;
