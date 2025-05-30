/**
 * MongoDB initialization script for Samudra ERP
 * Creates initial database, users, and collections
 */

// Create application user with appropriate permissions
db.createUser({
  user: process.env.MONGO_APP_USER || 'samudra_app',
  pwd: process.env.MONGO_APP_PASSWORD || 'app_password',
  roles: [
    {
      role: 'readWrite',
      db: process.env.MONGO_DATABASE || 'samudra_erp'
    }
  ]
});

// Switch to the application database
db = db.getSiblingDB(process.env.MONGO_DATABASE || 'samudra_erp');

// Create collections with validation schemas
db.createCollection('branches', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'code', 'address', 'isActive'],
      properties: {
        name: {
          bsonType: 'string',
          description: 'Branch name'
        },
        code: {
          bsonType: 'string',
          description: 'Branch code'
        },
        address: {
          bsonType: 'object',
          required: ['street', 'city', 'province', 'postalCode'],
          properties: {
            street: { bsonType: 'string' },
            city: { bsonType: 'string' },
            province: { bsonType: 'string' },
            postalCode: { bsonType: 'string' }
          }
        },
        phone: { bsonType: 'string' },
        email: { bsonType: 'string' },
        manager: { bsonType: 'objectId' },
        isActive: { bsonType: 'bool' },
        createdAt: { bsonType: 'date' },
        updatedAt: { bsonType: 'date' }
      }
    }
  }
});

db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['username', 'email', 'passwordHash', 'role', 'isActive'],
      properties: {
        username: { bsonType: 'string' },
        email: { bsonType: 'string' },
        passwordHash: { bsonType: 'string' },
        firstName: { bsonType: 'string' },
        lastName: { bsonType: 'string' },
        role: { enum: ['admin', 'manager', 'staff', 'driver', 'customer'] },
        branch: { bsonType: 'objectId' },
        isActive: { bsonType: 'bool' },
        lastLogin: { bsonType: 'date' },
        createdAt: { bsonType: 'date' },
        updatedAt: { bsonType: 'date' }
      }
    }
  }
});

// Create indexes for better query performance
db.branches.createIndex({ code: 1 }, { unique: true });
db.branches.createIndex({ name: 1 });
db.users.createIndex({ username: 1 }, { unique: true });
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ role: 1 });
db.users.createIndex({ branch: 1 });

// Insert a default admin user if not exists
db.users.insertOne({
  username: 'admin',
  email: 'admin@samudra.com',
  passwordHash: '$2b$10$X/RYJPrfS9BM3w6u5vTH8.1QFEFxHSZHDVaJmyQhQ5QxxM/UQDtOi', // hashed 'admin123'
  firstName: 'Admin',
  lastName: 'User',
  role: 'admin',
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date()
});
