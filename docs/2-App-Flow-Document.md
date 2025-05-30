# App Flow Document

## Overview

This App Flow Document outlines the key workflows, user journeys, and process flows within the Samudra ERP system for PT. Sarana Mudah Raya (Samudra Paket). It maps out how users interact with the system across different modules and provides a comprehensive understanding of the application's functional flow.

## 1. User Authentication Flows

### 1.1 Login Flow
1. User navigates to the login page
2. User enters username/email and password
3. System validates credentials
4. If valid, system checks for MFA requirement
   - If MFA enabled, user is prompted for verification code
   - User enters verification code
   - System validates the code
5. If authentication successful, user is redirected to their role-specific dashboard
6. If authentication fails, appropriate error message is displayed

### 1.2 Password Reset Flow
1. User clicks "Forgot Password" on login page
2. User enters registered email
3. System sends password reset link to email
4. User clicks the link and is directed to password reset page
5. User enters new password and confirms
6. System validates password against security policy
7. System updates password and redirects to login page

### 1.3 Session Management
1. System maintains user session with JWT
2. Session timeout occurs after 30 minutes of inactivity
3. User receives warning before timeout
4. User can choose to extend session or log out
5. On browser close or tab close, session persists but requires re-authentication after timeout

## 2. Core Operational Flows

### 2.1 Pickup Request Flow
1. **Request Initiation**
   - Customer service creates pickup request with customer details, address, and estimated package info
   - System validates the service area availability
   - System generates pickup request number

2. **Pickup Assignment**
   - Operations manager views pending pickup requests
   - System suggests optimal route and pickup team assignment
   - Manager confirms or modifies assignment
   - System notifies pickup team via mobile app

3. **Pickup Execution**
   - Pickup team receives notification with details and navigation
   - Upon arrival, team confirms location with GPS verification
   - Team records package details (quantity, weight, dimensions)
   - Team captures photos of packages
   - Customer signs digital proof of pickup
   - System updates pickup status to "Completed"

4. **Warehouse Processing**
   - Team returns to branch and transfers packages to checker
   - Checker verifies package details against pickup form
   - System updates package status to "In Processing"

### 2.2 Waybill Creation Flow
1. Admin staff selects "Create Waybill" function
2. Staff enters or selects sender information
3. Staff enters receiver information
4. System validates service availability for destination
5. Staff enters package details (description, quantity, weight, dimensions)
6. System calculates shipping cost based on:
   - Origin and destination
   - Service type
   - Weight and dimensions
   - Additional services
7. Staff selects payment method (CASH, COD, CAD)
8. System generates waybill number and barcode
9. Waybill is printed and attached to package
10. System updates inventory and financial records

### 2.3 Inter-Branch Shipping Flow
1. **Loading Process**
   - Warehouse staff initiates loading process
   - System displays packages ready for shipping to specific destination
   - Staff scans packages for inclusion in loading form
   - System validates package status and destination
   - System generates loading form number
   - Staff completes loading and seals vehicle
   - Driver confirms loading completion via mobile app

2. **Transit Process**
   - Driver starts journey and updates status via mobile app
   - System tracks journey with periodic location updates
   - Driver records any stops or incidents during transit
   - System calculates and updates ETA

3. **Destination Receipt**
   - Upon arrival at destination branch, driver updates status
   - Receiving warehouse staff initiates unloading process
   - Staff scans packages to verify against loading form
   - System reconciles received packages with loading form
   - Any discrepancies are recorded and escalated
   - System updates package status to "Arrived at Destination Branch"

### 2.4 Delivery to Recipient Flow
1. **Delivery Planning**
   - Destination branch manager views packages ready for delivery
   - System suggests optimal delivery routes and assignments
   - Manager confirms or modifies assignments
   - System generates delivery forms for each driver

2. **Delivery Execution**
   - Driver receives delivery assignment via mobile app
   - System provides optimized route with navigation
   - Upon arrival, driver confirms recipient identity
   - Recipient signs digital proof of delivery
   - Driver captures delivery photo if required
   - For COD/CAD, driver collects payment and records in system
   - System updates package status to "Delivered"

3. **Delivery Exception Handling**
   - If recipient not available, driver records attempt
   - Driver schedules redelivery or returns to branch based on policy
   - For rejected packages, driver records reason and returns to branch
   - System updates package status accordingly

### 2.5 Return Management Flow
1. **Return Initiation**
   - Return is initiated after failed delivery attempts or customer request
   - System generates return number
   - Staff records return reason and condition

2. **Return Processing**
   - Package is routed back to origin branch
   - Origin branch notifies sender
   - Sender decides disposition (redeliver, abandon, or collect)
   - System updates financial records for refunds if applicable

3. **Return Closure**
   - Package is redelivered, destroyed, or returned to sender
   - System updates final status
   - Financial reconciliation is completed

## 3. Financial Flows

### 3.1 Invoice Generation Flow
1. System automatically generates invoices based on completed deliveries
2. For corporate customers with credit terms:
   - Invoices are grouped by agreed period (weekly/bi-weekly/monthly)
   - System applies customer-specific rates and terms
3. Finance staff reviews and approves invoices
4. Approved invoices are sent to customers
5. System records receivables

### 3.2 Payment Collection Flow
1. **CASH Payments**
   - Payment collected at origin
   - Staff records payment in system
   - System updates invoice status to "Paid"

2. **COD Payments**
   - Driver collects payment upon delivery
   - Payment is recorded in mobile app
   - Driver submits collections at end of shift
   - Finance staff reconciles physical cash with system records
   - System updates invoice status to "Paid"

3. **CAD Payments**
   - System tracks payment due dates
   - Debt collectors are assigned to overdue payments
   - Collectors visit customers and record collection attempts
   - Successful collections are recorded in mobile app
   - Finance staff reconciles collections
   - System updates invoice status based on payment status

### 3.3 Expense Management Flow
1. Staff initiates expense request with details and supporting documents
2. System routes for appropriate approval based on amount and type
3. Approved expenses proceed to payment processing
4. System records expense in accounting records
5. For recurring expenses, system can create scheduled payments

### 3.4 Financial Reporting Flow
1. Authorized users access reporting module
2. Users select report type, parameters, and date range
3. System generates reports with visualizations
4. Users can drill down for detailed information
5. Reports can be exported to various formats
6. System schedules regular reports for key stakeholders

## 4. Mobile Application Flows

### 4.1 Mobile Authentication Flow
1. User downloads and installs mobile app
2. First-time users register device with employee ID
3. System validates employee and sends OTP
4. User completes authentication
5. App stores authentication token for future sessions
6. Background sync of essential data for offline operation

### 4.2 Pickup Team Mobile Flow
1. Team receives pickup assignments
2. App provides navigation to pickup location
3. At location, app verifies GPS coordinates
4. Team records package details and photos
5. Customer signs on mobile device
6. Data syncs when connected or stored for later sync
7. Team receives next assignment or returns to branch

### 4.3 Driver Mobile Flow
1. Driver receives loading/delivery assignments
2. For loading, driver confirms package receipt
3. During transit, driver updates status at key points
4. For delivery, app provides navigation and recipient details
5. Driver records delivery completion or exceptions
6. For COD/CAD, driver records payment collection
7. End of shift, driver submits summary report

### 4.4 Warehouse Staff Mobile Flow
1. Staff receives incoming shipments
2. App allows scanning packages for quick processing
3. Staff records package condition and exceptions
4. Staff assigns storage locations
5. For outgoing shipments, staff scans for loading verification
6. App provides real-time inventory updates

## 5. Administrative Flows

### 5.1 User Management Flow
1. Admin accesses user management module
2. For new users:
   - Admin enters user details and assigns role
   - System generates credentials and sends to user
   - User completes profile on first login
3. For existing users:
   - Admin can modify details, permissions, or status
   - System maintains audit trail of changes

### 5.2 Branch Management Flow
1. Admin accesses branch management module
2. For new branches:
   - Admin enters branch details (name, location, contact)
   - Admin assigns branch manager
   - Admin defines service area
3. System activates branch and integrates into operations
4. For existing branches:
   - Admin can modify details or status
   - System updates all related records

### 5.3 Rate Management Flow
1. Admin accesses rate management module
2. Admin can define rate structures by:
   - Origin-destination pairs
   - Service types
   - Weight/dimension ranges
   - Customer categories
3. Admin sets effective dates for rates
4. System applies rates to new waybills
5. Historical rates are preserved for existing waybills

## 6. Reporting and Analytics Flows

### 6.1 Dashboard Access Flow
1. User logs in and is directed to role-specific dashboard
2. Dashboard loads with real-time KPIs relevant to user role
3. User can customize dashboard components
4. System saves preferences for future sessions

### 6.2 Report Generation Flow
1. User accesses reporting module
2. User selects report category and specific report
3. User defines parameters (date range, branches, etc.)
4. System generates report with visualizations
5. User can interact with report for deeper analysis
6. User can export report in multiple formats

### 6.3 Analytics Exploration Flow
1. Authorized users access analytics module
2. Users select data dimensions for analysis
3. System presents interactive visualizations
4. Users can apply filters and drill down
5. Users can save analysis configurations
6. System allows sharing insights with other users

## 7. Integration Flows

### 7.1 Maps Integration Flow
1. System initiates maps API call for:
   - Address validation
   - Route optimization
   - Distance calculation
   - Location tracking
2. Maps service returns data
3. System processes and integrates data into relevant modules

### 7.2 Payment Gateway Flow
1. Customer initiates online payment
2. System redirects to payment gateway
3. Customer completes payment on gateway
4. Gateway sends confirmation to system
5. System updates payment status
6. Customer receives confirmation

### 7.3 SMS/Email Notification Flow
1. System events trigger notification requirement
2. System composes message with relevant data
3. System sends to notification service
4. Service delivers to recipient
5. Delivery status is recorded
