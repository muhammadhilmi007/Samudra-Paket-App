/**
 * Database configuration for Samudra ERP
 * MongoDB 6.x with Mongoose 7.x ODM
 * @module config/database
 */
const mongoose = require('mongoose');

/**
 * Connect to MongoDB database
 * @async
 * @throws {Error} If connection fails
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/samudra-erp'
    );
    // eslint-disable-next-line no-console
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn.connection;
  } catch (/** @type {unknown} */ error) {
    console.error(
      `Database connection failed: ${error instanceof Error ? error.message : String(error)}`
    );
    throw new Error(
      `Database connection failed: ${error instanceof Error ? error.message : String(error)}`
    );
  }
};

module.exports = { connectDB };
