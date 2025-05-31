/**
 * @file Entity type definitions index
 * @description Exports all entity-related type definitions
 */

// Base types
export * from './base';

// Core logistics entities
export * from './branch';
export * from './customer';

// Export delivery types with explicit naming to avoid conflicts
import * as DeliveryTypes from './delivery';
export { DeliveryTypes };

// Export finance types with explicit naming to avoid conflicts
import * as FinanceTypes from './finance';
export { FinanceTypes };

// Export pickup types
export * from './pickup';

// Export route types
export * from './route';

// Export tracking types with explicit naming to avoid conflicts
import * as TrackingTypes from './tracking';
export { TrackingTypes };

// Export contract types
export * from './contract';

// Export notification types
export * from './notification';

// Other entities
export * from './settings';

// Export shipment types
export * from './shipment';
export * from './user';
export * from './vehicle';
