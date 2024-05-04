import { MongoClient } from 'mongodb';
import Constants from './constants.js';
import config from '../config/default.json' assert { type: 'json' };

class Database {
  _instance = null;

  init = async () => {
    const mongoConfig = config.mongo;

    const client = new MongoClient(mongoConfig.url, {
      minPoolSize: mongoConfig.minPoolSize,
      maxPoolSize: mongoConfig.maxPoolSize,
    });

    await client.connect();
    this._instance = client.db(mongoConfig.database);
  };

  getDb = () => {
    return this._instance;
  };

  dbWidgets = () => {
    return this._instance.collection(Constants.WIDGETS_COLLECTION);
  };
}

export const db = new Database();
