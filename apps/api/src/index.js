/**
 * Samudra ERP API Server
 * Express.js backend with hexagonal architecture
 * @module api/server
 */
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');

// Load environment variables
dotenv.config();

// Initialize express app
/** @type {import('express').Application} */
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes (will be imported from api layer)
// Example: app.use('/api/auth', require('./api/auth.routes'));

/**
 * Health check endpoint
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Samudra ERP API is running',
    timestamp: new Date().toISOString(),
  });
});

// Add more API routes here (e.g., app.use('/api/users', ...))

// 404 handler for unknown routes
/**
 * 404 Not Found handler
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'API endpoint not found',
  });
});

/**
 * Error handling middleware
 * @param {Error} err - Error object
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 */
app.use(
  (
    /** @type {Error} */ err,
    /** @type {import('express').Request} */ req,
    /** @type {import('express').Response} */ res
  ) => {
    console.error(err.stack);
    res.status(500).json({
      status: 'error',
      message: err.message || 'Internal Server Error',
    });
  }
);

// Start server
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `\nSamudra ERP API Server running at http://localhost:${PORT} [${process.env.NODE_ENV || 'development'}]`
  );
});

module.exports = app;
