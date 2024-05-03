import CodingLogCoordinator from '../coordinators/coordinator.js';

export const getCodingLogs = async (req, res, next) => {
  try {
    const codingLogs = await CodingLogCoordinator.getCodingLogs();
    res.status(200).json(codingLogs);
  } catch (error) {
    next(error);
  }
};

export const createCodingLog = async (req, res, next) => {
  try {
    const newCodingLog = req.body;
    const createdCodingLog = await CodingLogCoordinator.createCodingLog(newCodingLog);
    res.status(201).json(createdCodingLog);
  } catch (error) {
    next(error);
  }
};

export const getCodingLog = async (req, res, next) => {
  try {
    const codingLogId = req.params.id;
    const codingLog = await CodingLogCoordinator.getCodingLog(codingLogId);
    if (codingLog) {
      res.status(200).json(codingLog);
    } else {
      res.status(404).json({ message: 'Coding log not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteCodingLog = async (req, res, next) => {
  try {
    const codingLogId = req.params.id;
    await CodingLogCoordinator.deleteCodingLog(codingLogId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export const replaceCodingLog = async (req, res, next) => {
  try {
    const codingLogId = req.params.id;
    const updatedCodingLog = req.body;
    const result = await CodingLogCoordinator.replaceCodingLog(codingLogId, updatedCodingLog);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Coding log not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const updateCodingLog = async (req, res, next) => {
  try {
    const codingLogId = req.params.id;
    const updatedCodingLog = req.body;
    const result = await CodingLogCoordinator.updateCodingLog(codingLogId, updatedCodingLog);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Coding log not found' });
    }
  } catch (error) {
    next(error);
  }
};
