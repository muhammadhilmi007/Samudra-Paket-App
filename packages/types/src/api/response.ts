/**
 * @file API response type definitions
 * @description Defines standard response types for the API
 */

/**
 * Base response interface for all API responses
 */
export interface BaseResponse {
  success: boolean;
  requestId?: string;
  timestamp: string;
}

/**
 * Success response with data
 */
export interface SuccessResponse<T> extends BaseResponse {
  success: true;
  data: T;
}

/**
 * Paginated response for list endpoints
 */
export interface PaginatedResponse<T> extends BaseResponse {
  success: true;
  data: {
    items: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasMore: boolean;
  };
}

/**
 * Bulk operation response
 */
export interface BulkResponse extends BaseResponse {
  success: true;
  data: {
    processed: number;
    successful: number;
    failed: number;
    failures?: Array<{
      id: string;
      reason: string;
    }>;
  };
}

/**
 * Empty success response for operations that don't return data
 */
export interface EmptyResponse extends BaseResponse {
  success: true;
}
