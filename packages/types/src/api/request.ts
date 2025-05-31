/**
 * @file API request type definitions
 * @description Defines standard request types for the API
 */

/**
 * Base request interface for all API requests
 */
export interface BaseRequest {
  requestId?: string;
  timestamp?: string;
}

/**
 * Pagination request parameters
 */
export interface PaginationRequest {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

/**
 * Filter request parameters
 */
export interface FilterRequest {
  filters?: Record<string, any>;
  search?: string;
  dateRange?: {
    startDate?: string;
    endDate?: string;
  };
}

/**
 * Combined request parameters for paginated and filtered requests
 */
export interface ListRequest extends BaseRequest, PaginationRequest, FilterRequest {}

/**
 * ID-based request for retrieving, updating, or deleting a single resource
 */
export interface IdRequest extends BaseRequest {
  id: string;
}

/**
 * Bulk operation request
 */
export interface BulkRequest extends BaseRequest {
  ids: string[];
}
