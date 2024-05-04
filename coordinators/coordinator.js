import { v4 as uuid } from 'uuid';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import CodingLogModel from '../models/model.js';
import codingLogSchema from '../schemas/codelog.json' assert { type: 'json' };

const ajv = new Ajv();
addFormats(ajv);
const validate = ajv.compile(codingLogSchema);

export default class CodingLogCoordinator {
  static getCodingLogs = () => CodingLogModel.getCodingLogs();

  static createCodingLog = (newCodingLog) => {
    const codingLog = {
      ...newCodingLog,
      id: uuid(),
    };

    const valid = validate(codingLog);
    if (!valid) {
      const errors = validate.errors.map(error => error.message).join(', ');
      throw new Error(`Validation failed: ${errors}`);
    }

    return CodingLogModel.createCodingLog(codingLog);
  };

  static getCodingLog = (id) => CodingLogModel.getCodingLog(id);

  static deleteCodingLog = (id) => CodingLogModel.deleteCodingLog(id);

  static replaceCodingLog = (id, codingLog) => {
    const replaceCodingLog = {
      ...codingLog,
      id,
    };

    const valid = validate(codingLog);
    if (!valid) {
      const errors = validate.errors.map(error => error.message).join(', ');
      throw new Error(`Validation failed: ${errors}`);
    }

    return CodingLogModel.replaceCodingLog(id, replaceCodingLog);
  };

  static updateCodingLog = (id, codingLog) => {
    const valid = validate(codingLog);
    if (!valid) {
      const errors = validate.errors.map(error => error.message).join(', ');
      throw new Error(`Validation failed: ${errors}`);
    }
    return CodingLogModel.updateCodingLog(id, codingLog);
  };
}
