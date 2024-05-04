import { db } from '../lib/database.js';
import Constants from '../lib/constants.js';

export default class TimeLogModel {
  static getCodingLogs = async () => {
    try {
      const timeLogs = await db.getTimeLogsCollection().find({}, { projection: Constants.DEFAULT_PROJECTION }).toArray();
      return timeLogs;
    } catch (error) {
      console.error('Error fetching time logs:', error);
      throw new Error('Failed to fetch time logs');
    }
  };

  static createCodingLog = async (newTimeLog) => {
    try {
      await db.getTimeLogsCollection().insertOne(newTimeLog);
      return newTimeLog;
    } catch (error) {
      console.error('Error creating time log:', error);
      throw new Error('Failed to create time log');
    }
  };

  static getCodingLogById = async (id) => {
    try {
      const timeLog = await db.getTimeLogsCollection().findOne({ id }, { projection: Constants.DEFAULT_PROJECTION });
      return timeLog;
    } catch (error) {
      console.error(`Error fetching time log with ID ${id}:`, error);
      throw new Error('Failed to fetch time log');
    }
  };

  static deleteCodingLog = async (id) => {
    try {
      const result = await db.getTimeLogsCollection().deleteOne({ id });
      if (result.deletedCount === 1) {
        return true;
      }
      return false;
    } catch (error) {
      console.error(`Error deleting time log with ID ${id}:`, error);
      throw new Error('Failed to delete time log');
    }
  };

  static updateCodingLog = async (id, updatedTimeLog) => {
    try {
      const result = await db.getTimeLogsCollection().updateOne({ id }, { $set: updatedTimeLog });
      if (result.matchedCount === 1) {
        return updatedTimeLog;
      }
      return false;
    } catch (error) {
      console.error(`Error updating time log with ID ${id}:`, error);
      throw new Error('Failed to update time log');
    }
  };
}
