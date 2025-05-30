# Mobile Guidelines and Structure

## Overview

This document outlines the comprehensive mobile development guidelines, architecture, and structure for the Samudra ERP system mobile applications. It provides standards, best practices, and architectural patterns that ensure consistency, maintainability, and scalability across all mobile components, with a focus on field operations applications for Checkers, Drivers, and Warehouse Managers.

## 1. Architecture & Design Principles

### 1.1 Architectural Overview

The mobile application architecture follows a layered approach with clear separation of concerns:

- **Presentation Layer**: UI components, screens, and navigation
- **State Management Layer**: Global and local state management
- **Service Layer**: API interactions, data synchronization, and external services
- **Device Integration Layer**: Camera, GPS, biometrics, and other device features
- **Data Persistence Layer**: Local storage and offline data management

### 1.2 Design Methodology

The mobile app implements a component-based design methodology:

- **Atomic Design Principles**: Building complex UI from simple components
- **Screen-Based Organization**: Screen-specific components and logic
- **Feature-Based Modules**: Group related screens and functionality
- **Design System Integration**: Consistent UI components across the app

### 1.3 Design Principles

- **Offline-First**: Design for offline functionality with seamless online synchronization
- **Performance**: Optimize for speed and resource efficiency on lower-end devices
- **Reliability**: Graceful error handling and recovery mechanisms
- **Usability**: Intuitive interface for field operations in various environments
- **Adaptability**: Adjust to different screen sizes and device capabilities
- **Battery Efficiency**: Minimize battery consumption for field usage

## 2. Technology Stack

### 2.1 Core Technologies

- **Framework**: React Native with Expo SDK
- **Language**: TypeScript
- **State Management**: Redux Toolkit and React Query
- **Navigation**: React Navigation
- **UI Components**: React Native Paper

### 2.2 Device Integration

- **Camera**: expo-camera for photo capture and barcode scanning
- **Location**: expo-location for GPS tracking and geofencing
- **Authentication**: expo-local-authentication for biometric authentication
- **Signature**: react-native-signature-canvas for signature capture
- **Network**: expo-network for network status monitoring
- **Background Tasks**: expo-background-fetch for background synchronization

### 2.3 Data Management

- **Local Storage**:
  - AsyncStorage for non-sensitive data
  - SecureStore for sensitive information
- **Synchronization**: Custom Sync Manager with queue system
- **Offline Support**: Local data persistence with sync status tracking
- **Conflict Resolution**: Strategy for handling data conflicts

### 2.4 Additional Libraries

- **Form Management**: React Hook Form
- **Validation**: Zod for schema validation
- **Mapping**: react-native-maps for geographical visualization
- **Charts**: react-native-chart-kit for data visualization
- **File Handling**: expo-file-system for file operations
- **Permissions**: expo-permissions for permission management
- **Notifications**: expo-notifications for push notifications

## 3. Project Structure

### 3.1 High-Level Structure

```
/apps/mobile
├── src/
│   ├── screens/            # Application screens
│   ├── navigation/         # Navigation configuration
│   ├── components/         # Reusable components
│   ├── hooks/              # Custom React hooks
│   ├── store/              # Redux state management
│   ├── services/           # API and device services
│   ├── utils/              # Utility functions
│   ├── theme/              # Styling theme
│   ├── types/              # TypeScript type definitions
│   └── config/             # App configuration
├── assets/                 # Static assets
├── app.json                # Expo configuration
└── App.tsx                 # Application entry point
```

### 3.2 Screen Structure

```
/screens
├── auth/                   # Authentication screens
│   ├── LoginScreen.tsx
│   ├── ForgotPasswordScreen.tsx
│   └── components/         # Auth-specific components
├── pickup/                 # Pickup screens
│   ├── PickupListScreen.tsx
│   ├── PickupDetailScreen.tsx
│   ├── PickupFormScreen.tsx
│   └── components/         # Pickup-specific components
├── delivery/               # Delivery screens
│   ├── DeliveryListScreen.tsx
│   ├── DeliveryDetailScreen.tsx
│   ├── DeliveryConfirmationScreen.tsx
│   └── components/         # Delivery-specific components
├── warehouse/              # Warehouse screens
│   ├── ScanningScreen.tsx
│   ├── InventoryScreen.tsx
│   ├── LoadingScreen.tsx
│   └── components/         # Warehouse-specific components
└── common/                 # Common screens
    ├── DashboardScreen.tsx
    ├── ProfileScreen.tsx
    ├── SettingsScreen.tsx
    └── components/         # Common components
```

### 3.3 Component Structure

```
/components
├── ui/                     # Basic UI components
│   ├── Button.tsx
│   ├── TextField.tsx
│   ├── Card.tsx
│   └── ...
├── forms/                  # Form components
│   ├── FormField.tsx
│   ├── FormContainer.tsx
│   ├── SignaturePad.tsx
│   └── ...
├── feedback/               # Feedback components
│   ├── LoadingIndicator.tsx
│   ├── ErrorDisplay.tsx
│   ├── SuccessMessage.tsx
│   └── ...
├── data/                   # Data display components
│   ├── ShipmentCard.tsx
│   ├── StatusBadge.tsx
│   ├── TimelineView.tsx
│   └── ...
└── device/                 # Device integration components
    ├── CameraScanner.tsx
    ├── LocationPicker.tsx
    ├── BiometricAuth.tsx
    └── ...
```

### 3.4 Navigation Structure

```
/navigation
├── AppNavigator.tsx        # Main navigation container
├── AuthNavigator.tsx       # Authentication stack
├── MainNavigator.tsx       # Main app drawer/tab navigation
├── PickupNavigator.tsx     # Pickup flow stack
├── DeliveryNavigator.tsx   # Delivery flow stack
├── WarehouseNavigator.tsx  # Warehouse flow stack
└── navigationUtils.ts      # Navigation utilities
```

### 3.5 State Management Structure

```
/store
├── index.ts                # Store configuration
├── middleware.ts           # Redux middleware
├── slices/                 # Redux slices
│   ├── authSlice.ts
│   ├── pickupSlice.ts
│   ├── deliverySlice.ts
│   ├── warehouseSlice.ts
│   └── ...
└── hooks.ts                # Redux hooks
```

## 4. User Interface Guidelines

### 4.1 UI Components

- **Consistency**: Use React Native Paper components consistently
- **Custom Components**: Extend base components for domain-specific needs
- **Component Props**: Well-defined props with TypeScript typing
- **Component States**: Clear visual states (normal, disabled, loading, error)
- **Accessibility**: Support for screen readers and assistive technologies

### 4.2 Screen Layout

- **Responsive Layouts**: Adapt to different screen sizes
- **Safe Areas**: Respect device safe areas and notches
- **Orientation Support**: Support both portrait and landscape where appropriate
- **Content Hierarchy**: Clear visual hierarchy of information
- **Touch Targets**: Minimum size of 44×44 points for touch elements

### 4.3 Typography

- **Font Family**: System fonts for optimal performance
- **Font Sizes**:
  - Heading 1: 24sp
  - Heading 2: 20sp
  - Heading 3: 18sp
  - Body: 16sp
  - Caption: 14sp
  - Small: 12sp
- **Font Weights**: Regular, Medium, Bold
- **Line Heights**: Appropriate for readability

### 4.4 Color Usage

- **Primary**: #2563EB (Blue)
- **Secondary**: #10B981 (Green)
- **Accent**: #F59E0B (Amber)
- **Neutral**: #6B7280 (Gray)
- **Error**: #EF4444 (Red)
- **Success**: #22C55E (Green)
- **Warning**: #F97316 (Orange)
- **Info**: #3B82F6 (Blue)
- **Background**: Light mode and dark mode variants
- **Color Contrast**: WCAG AA compliance (4.5:1 for normal text)

### 4.5 Icons and Images

- **Icon System**: Vector-based icons for scalability
- **Asset Organization**: Clear structure for images and icons
- **Image Optimization**: Appropriate formats and sizes for mobile
- **Image Caching**: Cache images for offline use
- **Placeholder Images**: Show placeholders during loading

## 5. Offline-First Implementation

### 5.1 Data Synchronization Strategy

- **Initial Data Load**: Download essential data on login
- **Incremental Sync**: Sync only changed data
- **Background Sync**: Periodic background synchronization
- **Connectivity Monitoring**: Detect network changes
- **Sync Status Indicators**: Show sync status to users

### 5.2 Sync Manager Implementation

```typescript
// Simplified example of Sync Manager
class SyncManager {
  private syncQueue: SyncOperation[] = [];
  private isSyncing: boolean = false;
  private networkStatus: NetworkStatus = 'unknown';
  
  constructor() {
    // Monitor network status
    this.setupNetworkMonitoring();
    // Attempt sync periodically
    this.setupPeriodicSync();
  }
  
  // Add operation to sync queue
  public addToQueue(operation: SyncOperation): string {
    const syncId = uuidv4();
    this.syncQueue.push({
      id: syncId,
      ...operation,
      status: 'pending',
      createdAt: new Date(),
      retries: 0
    });
    
    this.persistQueue();
    this.attemptSync();
    
    return syncId;
  }
  
  // Attempt to sync all pending operations
  private async attemptSync(): Promise<void> {
    if (this.isSyncing || this.networkStatus !== 'connected') {
      return;
    }
    
    this.isSyncing = true;
    
    try {
      const pendingOperations = this.syncQueue.filter(
        op => op.status === 'pending'
      );
      
      for (const operation of pendingOperations) {
        try {
          await this.processOperation(operation);
        } catch (error) {
          this.handleSyncError(operation, error);
        }
      }
    } finally {
      this.isSyncing = false;
      this.persistQueue();
    }
  }
  
  private async processOperation(operation: SyncOperation): Promise<void> {
    // Process based on operation type
    switch (operation.type) {
      case 'create':
        await this.processCreateOperation(operation);
        break;
      case 'update':
        await this.processUpdateOperation(operation);
        break;
      case 'delete':
        await this.processDeleteOperation(operation);
        break;
      // Other operation types
    }
    
    // Mark as completed
    operation.status = 'completed';
    operation.syncedAt = new Date();
  }
  
  private handleSyncError(operation: SyncOperation, error: any): void {
    operation.retries += 1;
    
    if (operation.retries >= MAX_RETRIES) {
      operation.status = 'failed';
      operation.error = error.message;
    }
  }
  
  // Other methods for queue management, conflict resolution, etc.
}
```

### 5.3 Local Storage Strategy

- **AsyncStorage**: For non-sensitive app data
- **SecureStore**: For authentication tokens and sensitive data
- **File System**: For images and documents
- **SQLite**: For complex data structures and queries
- **Data Encryption**: Encrypt sensitive local data

### 5.4 Conflict Resolution

- **Last Write Wins**: Simple strategy for most data
- **Merge Strategy**: For complex data structures
- **User Resolution**: Prompt user for resolution when necessary
- **Version Tracking**: Track data versions for conflict detection
- **Conflict Logging**: Log conflicts for analysis

## 6. Device Integration

### 6.1 Camera Integration

- **Barcode Scanning**: Scan shipment barcodes
- **Photo Capture**: Document package condition
- **Image Processing**: Process images for optimal storage
- **Flash Control**: Adjust for different lighting conditions
- **Permission Handling**: Request camera permissions appropriately

### 6.2 Location Services

- **GPS Tracking**: Track driver location during delivery
- **Geofencing**: Verify arrival at pickup/delivery location
- **Address Validation**: Validate addresses with coordinates
- **Location History**: Record location history for routes
- **Battery Optimization**: Balance accuracy with battery usage

### 6.3 Biometric Authentication

- **Fingerprint**: Support for fingerprint authentication
- **Face Recognition**: Support for facial recognition
- **Fallback Authentication**: Alternative authentication methods
- **Secure Storage**: Store credentials securely
- **Session Management**: Manage authentication sessions

### 6.4 Signature Capture

- **Digital Signatures**: Capture proof of delivery signatures
- **Signature Validation**: Ensure signature quality
- **Compression**: Optimize signature storage
- **Rendering**: Display signatures in documents
- **Legal Compliance**: Ensure legal validity of signatures

## 7. API Integration

### 7.1 API Client Implementation

- **Base Client**: Axios-based client with interceptors
- **Request/Response Handling**: Standardized format
- **Error Handling**: Graceful error management
- **Authentication**: Automatic token handling
- **Retry Logic**: Automatic retry for failed requests

### 7.2 API Service Structure

```typescript
// Base API service
class ApiService {
  protected client: AxiosInstance;
  
  constructor() {
    this.client = axios.create({
      baseURL: Config.API_URL,
      timeout: 30000
    });
    
    this.setupInterceptors();
  }
  
  private setupInterceptors(): void {
    // Request interceptor
    this.client.interceptors.request.use(
      async (config) => {
        // Add auth token if available
        const token = await SecureStore.getItemAsync('authToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
      },
      (error) => Promise.reject(error)
    );
    
    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response.data,
      async (error) => {
        // Handle token expiration
        if (error.response?.status === 401) {
          // Attempt token refresh
          try {
            await this.refreshToken();
            // Retry the original request
            return this.client(error.config);
          } catch (refreshError) {
            // Redirect to login
            NavigationService.navigate('Login');
            return Promise.reject(refreshError);
          }
        }
        
        // Transform error response
        return Promise.reject({
          code: error.response?.data?.error?.code || 'UNKNOWN_ERROR',
          message: error.response?.data?.error?.message || 'An unknown error occurred',
          details: error.response?.data?.error?.details || null,
          status: error.response?.status
        });
      }
    );
  }
  
  private async refreshToken(): Promise<void> {
    // Implement token refresh logic
  }
}

// Domain-specific API service
class PickupApiService extends ApiService {
  async getPickupList(params: PickupListParams): Promise<PickupListResponse> {
    return this.client.get('/pickups', { params });
  }
  
  async getPickupDetails(id: string): Promise<PickupDetails> {
    return this.client.get(`/pickups/${id}`);
  }
  
  async createPickup(data: CreatePickupData): Promise<PickupDetails> {
    return this.client.post('/pickups', { data });
  }
  
  async updatePickupStatus(id: string, status: PickupStatus): Promise<PickupDetails> {
    return this.client.put(`/pickups/${id}/status`, { status });
  }
  
  // Other pickup-related API methods
}
```

### 7.3 Data Transformation

- **Request Transformation**: Format data for API requests
- **Response Transformation**: Format API responses for app use
- **Data Normalization**: Normalize data for consistent structure
- **Entity Mapping**: Map API entities to app models
- **Type Safety**: Ensure type safety throughout data flow

## 8. State Management

### 8.1 Redux Implementation

- **Store Configuration**: Set up with proper middleware
- **Slices Organization**: Feature-based Redux slices
- **Action Naming**: Consistent action naming convention
- **Selector Pattern**: Use selectors for data access
- **Normalization**: Normalize state for efficient access

### 8.2 React Query Implementation

- **Query Configuration**: Set up with caching and retries
- **Query Keys**: Structured query keys for invalidation
- **Mutations**: Optimistic updates for better UX
- **Error Handling**: Handle query and mutation errors
- **Offline Support**: Configure for offline usage

### 8.3 Local State Management

- **Component State**: Use for component-specific state
- **Context API**: Use for feature-specific shared state
- **Form State**: Use React Hook Form for form state
- **State Persistence**: Persist necessary state across app restarts
- **Memory Management**: Avoid memory leaks in state

## 9. Performance Optimization

### 9.1 Rendering Optimization

- **Memoization**: Use React.memo for pure components
- **List Virtualization**: Use FlatList/SectionList with optimizations
- **Lazy Loading**: Lazy load components and screens
- **Image Optimization**: Optimize images for size and loading
- **Animation Performance**: Use native driver for animations

### 9.2 Memory Management

- **Resource Cleanup**: Clean up resources in useEffect
- **Large Data Handling**: Paginate and virtualize large datasets
- **Image Caching**: Implement proper image caching
- **Memory Monitoring**: Monitor and optimize memory usage
- **Component Lifecycle**: Proper component lifecycle management

### 9.3 Battery Optimization

- **Location Services**: Optimize location update frequency
- **Background Services**: Minimize background operations
- **Network Requests**: Batch and optimize network requests
- **Sensor Usage**: Minimize sensor usage (GPS, camera)
- **Wake Locks**: Use wake locks sparingly

## 10. Error Handling & Logging

### 10.1 Error Handling Strategy

- **Global Error Boundary**: Catch unhandled errors
- **Try-Catch Patterns**: Consistent error handling patterns
- **User-Friendly Messages**: Convert technical errors to user messages
- **Graceful Degradation**: Maintain functionality during errors
- **Recovery Actions**: Provide recovery options for errors

### 10.2 Logging Implementation

- **Log Levels**: Debug, Info, Warning, Error
- **Structured Logging**: JSON format for machine parsing
- **Context Enrichment**: Add request ID, user info, device info
- **Remote Logging**: Send logs to centralized service
- **Log Filtering**: Filter sensitive information from logs

### 10.3 Crash Reporting

- **Crash Detection**: Detect and report app crashes
- **Error Boundaries**: Prevent full app crashes
- **Breadcrumbs**: Track user actions before crashes
- **Context Capture**: Capture relevant state during crashes
- **User Feedback**: Allow users to report issues

## 11. Security Implementation

### 11.1 Authentication Security

- **Secure Token Storage**: Store tokens in SecureStore
- **Biometric Integration**: Optional biometric authentication
- **Session Management**: Proper handling of sessions
- **Token Refresh**: Automatic token refresh
- **Logout Handling**: Secure logout process

### 11.2 Data Security

- **Sensitive Data Encryption**: Encrypt sensitive local data
- **Secure Communication**: HTTPS for all API requests
- **Certificate Pinning**: Prevent MITM attacks
- **Input Validation**: Validate all user inputs
- **Output Encoding**: Encode output to prevent injection

### 11.3 Device Security

- **Secure Storage**: Use secure storage for sensitive data
- **Screen Security**: Prevent screenshots of sensitive screens
- **Jailbreak Detection**: Optional detection of jailbroken devices
- **App Permissions**: Request minimum necessary permissions
- **Secure Defaults**: Secure configuration by default

## 12. Testing Strategy

### 12.1 Unit Testing

- **Component Testing**: Test UI components
- **Service Testing**: Test services and utilities
- **State Testing**: Test state management
- **Mocking**: Mock external dependencies
- **Code Coverage**: Maintain high test coverage

### 12.2 Integration Testing

- **Screen Integration**: Test screen interactions
- **API Integration**: Test API service integration
- **Device Feature Integration**: Test device features
- **Navigation Flow**: Test navigation between screens
- **State Integration**: Test state interactions

### 12.3 End-to-End Testing

- **User Flows**: Test complete user journeys
- **Device Testing**: Test on real devices
- **Offline Testing**: Test offline functionality
- **Performance Testing**: Test app performance
- **Regression Testing**: Prevent regressions

## 13. App Deployment

### 13.1 Build Configuration

- **Environment Configuration**: Development, Staging, Production
- **App Versioning**: Semantic versioning
- **Build Variants**: Different builds for different purposes
- **Code Signing**: Secure code signing process
- **Asset Management**: Organize and optimize assets

### 13.2 Testing Distribution

- **Internal Testing**: Distribution to team members
- **Beta Testing**: Distribution to beta testers
- **TestFlight/Firebase App Distribution**: Platform-specific distribution
- **Feedback Collection**: Collect tester feedback
- **Crash Reporting**: Monitor crashes during testing

### 13.3 Release Process

- **Release Preparation**: Pre-release checklist
- **Store Submission**: App store submission process
- **Release Notes**: Comprehensive release notes
- **Phased Rollout**: Gradual rollout to users
- **Post-Release Monitoring**: Monitor app performance

## 14. Development Workflow

### 14.1 Development Environment

- **Expo Setup**: Consistent Expo environment
- **Device Emulators**: Use emulators for quick testing
- **Physical Devices**: Test on actual devices
- **Hot Reloading**: Utilize hot reloading for fast development
- **Debugging Tools**: React Native Debugger, Flipper

### 14.2 Code Standards

- **TypeScript Usage**: Type everything properly
- **Component Structure**: Consistent component structure
- **File Organization**: Clear file organization
- **Naming Conventions**: Consistent naming
- **Code Formatting**: Prettier for formatting

### 14.3 Git Workflow

- **Branching Strategy**: Feature branching with pull requests
- **Commit Standards**: Clear commit messages
- **Code Review**: Required code reviews
- **CI Integration**: Automated checks on pull requests
- **Version Control**: Git for source control
