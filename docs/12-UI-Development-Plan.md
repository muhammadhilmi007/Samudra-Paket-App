# UI Development Plan for Samudra ERP

## Overview

This document serves as the comprehensive guide for developing the user interface of the Samudra ERP system using AI Vibe Coding. It provides detailed specifications for all screens, their purpose, elements, interactions, design themes, and screen flow to ensure consistency and alignment with the business requirements and technical architecture.

## 1. Overall Vibe and Design Theme

### 1.1 Visual Style

The Samudra ERP system will adopt a **modern professional** visual style with the following characteristics:
- Clean, uncluttered layouts with sufficient white space
- Focused interfaces that highlight essential information
- Professional appearance suitable for business operations
- User-friendly controls with clear affordances
- Consistent visual hierarchy across all screens

### 1.2 Color Palette

The system will use the following color palette, aligned with the Windsurf Rules:

- **Primary**: #2563EB (Blue) - Used for primary actions, key navigation elements, and branding
- **Secondary**: #10B981 (Green) - Used for success states, positive indicators, and secondary actions
- **Accent**: #F59E0B (Amber) - Used for highlights, warnings, and attention-grabbing elements
- **Neutral**: #6B7280 (Gray) - Used for text, backgrounds, and non-interactive elements
- **Error**: #EF4444 (Red) - Used for error states and critical alerts

Additional supporting colors:
- Background: #F9FAFB (Light Gray)
- Surface: #FFFFFF (White)
- Border: #E5E7EB (Light Gray)
- Text Primary: #111827 (Dark Gray)
- Text Secondary: #4B5563 (Medium Gray)

### 1.3 Typography

- **Heading Font**: Inter (Sans-serif)
  - H1: 24px, Bold (700)
  - H2: 20px, Bold (700)
  - H3: 18px, Semibold (600)
  - H4: 16px, Semibold (600)
  - H5: 14px, Semibold (600)

- **Body Font**: Inter (Sans-serif)
  - Body: 16px, Regular (400)
  - Body Small: 14px, Regular (400)
  - Caption: 12px, Regular (400)

- **Button Text**: Inter, 14px, Medium (500)
- **Input Text**: Inter, 16px, Regular (400)
- **Table Text**: Inter, 14px, Regular (400)

### 1.4 Brand Character

The UI will convey the following brand characteristics:
- **Reliable**: Consistent behavior and stable interfaces
- **Efficient**: Streamlined workflows and minimal clicks for common tasks
- **Professional**: Clean, organized presentation of information
- **Trustworthy**: Clear presentation of critical data and status indicators
- **Modern**: Contemporary design patterns and interactions

## 2. Complete List of Screens

### 2.1 Authentication Screens
1. Login Screen
2. Forgot Password Screen
3. Reset Password Screen

### 2.2 Dashboard Screens
4. Admin Dashboard
5. Branch Manager Dashboard
6. Operations Dashboard
7. Finance Dashboard
8. Driver/Checker Dashboard

### 2.3 Master Data Screens
9. Branch Management Screen
10. Employee Management Screen
11. Vehicle Management Screen
12. Customer Management Screen
13. Service Area Management Screen
14. Rate Configuration Screen
15. Forwarder Partner Management Screen

### 2.4 Operational Screens
16. Pickup Request List Screen
17. Pickup Request Form Screen
18. Pickup Assignment Screen
19. Waybill Creation Screen
20. Shipment List Screen
21. Shipment Detail Screen
22. Loading Form Screen
23. Loading Management Screen
24. Delivery Assignment Screen
25. Delivery Status Screen
26. Return Management Screen
27. Return Processing Screen

### 2.5 Mobile Operational Screens
28. Mobile Login Screen
29. Mobile Dashboard Screen
30. Pickup Task List Screen
31. Pickup Detail Screen
32. Pickup Form Screen
33. Delivery Task List Screen
34. Delivery Detail Screen
35. Delivery Confirmation Screen
36. Barcode Scanning Screen
37. Signature Capture Screen
38. Location Verification Screen

### 2.6 Financial Screens
39. Billing List Screen
40. Invoice Generation Screen
41. Invoice Detail Screen
42. Payment Recording Screen
43. CAD Collection Assignment Screen
44. CAD Collection Status Screen
45. Expense Management Screen
46. Financial Report Screen

### 2.7 Reporting Screens
47. Operational Report Screen
48. Financial Report Screen
49. Performance Dashboard Screen
50. Custom Report Builder Screen

### 2.8 Settings and Administration
51. User Management Screen
52. Role Management Screen
53. Permission Management Screen
54. System Settings Screen
55. Profile Settings Screen

## 3. Detailed Screen Descriptions

### 3.1 Authentication Screens

#### Login Screen
- **Purpose**: Allow users to authenticate and access the system
- **Key Elements**:
  - Logo and system name
  - Username/email input field
  - Password input field with show/hide toggle
  - "Remember me" checkbox
  - Login button
  - Forgot password link
- **User Interactions**:
  - Form validation for required fields
  - Error messages for invalid credentials
  - Redirect to appropriate dashboard upon successful login
  - Option to reset password

#### Forgot Password Screen
- **Purpose**: Allow users to request a password reset
- **Key Elements**:
  - Logo and system name
  - Email input field
  - Submit button
  - Back to login link
- **User Interactions**:
  - Email validation
  - Success message confirming reset email sent
  - Error handling for non-existent accounts

#### Reset Password Screen
- **Purpose**: Allow users to create a new password
- **Key Elements**:
  - Logo and system name
  - New password input field
  - Confirm password input field
  - Password strength indicator
  - Submit button
- **User Interactions**:
  - Password validation (min length, complexity)
  - Match validation for confirmation
  - Success message and redirect to login after completion

### 3.2 Dashboard Screens

#### Admin Dashboard
- **Purpose**: Provide system-wide overview for administrators
- **Key Elements**:
  - Key performance indicators (KPIs) summary cards
  - System health status
  - User activity chart
  - Recent system alerts
  - Quick access links to key administration functions
- **User Interactions**:
  - Filter data by date range
  - Drill down into specific metrics
  - Respond to system alerts

#### Branch Manager Dashboard
- **Purpose**: Provide branch-specific operational overview
- **Key Elements**:
  - Branch performance metrics
  - Daily shipment volume chart
  - Vehicle utilization gauge
  - Staff performance summary
  - Pending tasks and alerts
- **User Interactions**:
  - Filter data by date range and metrics
  - Toggle between different visualization views
  - Navigate to detailed reports

#### Operations Dashboard
- **Purpose**: Monitor and manage daily operational activities
- **Key Elements**:
  - Pending pickup requests counter
  - In-transit shipments map
  - Delivery status pie chart
  - Vehicle status board
  - Delayed shipments alert list
- **User Interactions**:
  - Filter by status, vehicle, or route
  - Sort and search functionality
  - Click through to detailed views

#### Finance Dashboard
- **Purpose**: Monitor financial performance and pending tasks
- **Key Elements**:
  - Revenue and cost summary cards
  - Accounts receivable aging chart
  - Daily cash flow graph
  - Pending invoices counter
  - Overdue payments alert list
- **User Interactions**:
  - Filter by date range, branch, or customer
  - Export data to reports
  - Navigate to invoice or payment screens

#### Driver/Checker Dashboard
- **Purpose**: Provide mobile-optimized view of assigned tasks
- **Key Elements**:
  - Today's task list
  - Task completion progress bar
  - Next stop information with map
  - Quick action buttons
  - Status update section
- **User Interactions**:
  - Mark tasks as complete
  - Update task status
  - Navigate to task details
  - Scan barcodes or capture signatures

### 3.3 Master Data Screens

#### Branch Management Screen
- **Purpose**: Create, view, edit, and manage branch information
- **Key Elements**:
  - Branch list table with key information
  - Search and filter options
  - Add/Edit branch form
  - Branch details panel
  - Service area map
- **User Interactions**:
  - CRUD operations for branches
  - Sort and filter branches
  - Assign branch manager
  - Define service areas

#### Employee Management Screen
- **Purpose**: Manage employee records and assignments
- **Key Elements**:
  - Employee list table with key information
  - Search and filter options
  - Add/Edit employee form
  - Employee details panel with tabs for different information categories
  - Role assignment section
- **User Interactions**:
  - CRUD operations for employees
  - Assign roles and permissions
  - Upload employee documents
  - Filter by branch, role, or status

#### Vehicle Management Screen
- **Purpose**: Track and manage the vehicle fleet
- **Key Elements**:
  - Vehicle list table with status indicators
  - Vehicle details panel
  - Maintenance history timeline
  - Driver assignment section
  - Vehicle documents storage
- **User Interactions**:
  - CRUD operations for vehicles
  - Schedule maintenance
  - Assign drivers
  - Track fuel consumption
  - Upload vehicle documents

#### Customer Management Screen
- **Purpose**: Manage customer information and service settings
- **Key Elements**:
  - Customer list table with key information
  - Customer details panel
  - Shipping history tab
  - Billing information tab
  - Special rates section
- **User Interactions**:
  - CRUD operations for customers
  - Set special rates
  - View shipping history
  - Manage credit limits
  - Set payment terms

### 3.4 Operational Screens

#### Pickup Request List Screen
- **Purpose**: View and manage all pickup requests
- **Key Elements**:
  - Pickup request table with status indicators
  - Filter by date, status, and customer
  - Quick action buttons (assign, edit, cancel)
  - Status update panel
  - Map view toggle
- **User Interactions**:
  - Filter and sort requests
  - Assign requests to pickup teams
  - Update request status
  - View on map
  - Export list to report

#### Pickup Request Form Screen
- **Purpose**: Create or edit pickup requests
- **Key Elements**:
  - Customer information section (with search)
  - Pickup address with map integration
  - Package information form
  - Special instructions field
  - Schedule date and time pickers
- **User Interactions**:
  - Customer search and selection
  - Address validation
  - Package type and quantity inputs
  - Schedule selection
  - Form validation

#### Waybill Creation Screen
- **Purpose**: Create new shipment waybills
- **Key Elements**:
  - Sender information section
  - Recipient information section
  - Package details form
  - Service type selection
  - Payment method selection
  - Rate calculation display
  - Terms and conditions checkbox
- **User Interactions**:
  - Customer search and selection
  - Address validation and suggestion
  - Weight and dimension input with automatic volume calculation
  - Service type selection with rate display
  - Payment method selection

#### Shipment List Screen
- **Purpose**: View and manage all shipments
- **Key Elements**:
  - Shipment table with status indicators
  - Advanced filter panel
  - Quick action buttons
  - Bulk action dropdown
  - Export options
- **User Interactions**:
  - Filter by multiple criteria
  - Sort by various columns
  - Perform bulk status updates
  - Export to different formats
  - Navigate to shipment details

#### Shipment Detail Screen
- **Purpose**: View comprehensive information about a shipment
- **Key Elements**:
  - Shipment summary card
  - Status timeline
  - Package information
  - Tracking updates
  - Documents section
  - Action buttons for next steps
- **User Interactions**:
  - Update shipment status
  - Add tracking updates
  - Upload documents
  - Print waybill
  - Initiate related processes (return, claim)

### 3.5 Mobile Operational Screens

#### Mobile Login Screen
- **Purpose**: Authenticate mobile users with a simplified interface
- **Key Elements**:
  - Logo and app name
  - Username input
  - Password input
  - Login button
  - Remember me option
  - Version information
- **User Interactions**:
  - Simplified form validation
  - Biometric authentication option
  - Offline authentication capability
  - Error handling for poor connectivity

#### Pickup Form Screen
- **Purpose**: Record pickup details in the field
- **Key Elements**:
  - Pickup information summary
  - Package scanning button
  - Package details form
  - Photo capture buttons
  - Signature pad
  - Submit button
- **User Interactions**:
  - Barcode scanning
  - Photo capture of packages
  - GPS location verification
  - Digital signature capture
  - Offline data storage with sync status

#### Delivery Confirmation Screen
- **Purpose**: Record delivery completion in the field
- **Key Elements**:
  - Delivery information summary
  - Recipient information
  - Delivery status options
  - Photo capture button
  - Signature pad
  - Payment collection form (for COD/CAD)
- **User Interactions**:
  - Recipient verification
  - Status selection (delivered, refused, etc.)
  - Photo evidence capture
  - Signature capture
  - Payment recording
  - GPS location verification

### 3.6 Financial Screens

#### Invoice Generation Screen
- **Purpose**: Create and manage customer invoices
- **Key Elements**:
  - Customer selection
  - Date range selection
  - Eligible shipments table
  - Invoice summary panel
  - Terms and due date settings
  - Preview and generate buttons
- **User Interactions**:
  - Customer search and selection
  - Shipment selection for invoicing
  - Terms configuration
  - Preview invoice before generation
  - Generate and send invoice

#### Payment Recording Screen
- **Purpose**: Record customer payments
- **Key Elements**:
  - Customer selection
  - Outstanding invoices table
  - Payment amount input
  - Payment method selection
  - Reference number input
  - Payment allocation panel
- **User Interactions**:
  - Invoice selection for payment
  - Partial payment allocation
  - Payment method details
  - Upload payment proof
  - Receipt generation

## 4. Screen Flow (UI Flow)

### 4.1 Authentication Flow
1. User accesses the system and is presented with the **Login Screen**
2. If login is successful, user is directed to their role-specific dashboard
3. If user forgets password, they click "Forgot Password" to access the **Forgot Password Screen**
4. After submitting email, system sends reset link
5. User clicks link and accesses the **Reset Password Screen**
6. After successful password reset, user is redirected to the **Login Screen**

### 4.2 Operational Flow - Pickup Process
1. Customer service creates a new pickup request on the **Pickup Request Form Screen**
2. The request appears on the **Pickup Request List Screen**
3. Operations manager assigns pickup team on the **Pickup Assignment Screen**
4. Driver/Checker receives assignment on their **Mobile Dashboard Screen**
5. Driver navigates to the **Pickup Task List Screen** to view details
6. At the location, driver uses the **Pickup Form Screen** to record details
7. Driver captures signature and completes pickup
8. Pickup status is updated on the **Pickup Request List Screen**
9. Warehouse staff processes received packages using the **Waybill Creation Screen**

### 4.3 Operational Flow - Delivery Process
1. Packages ready for delivery appear on the **Delivery Assignment Screen**
2. Operations manager assigns deliveries to drivers
3. Driver receives assignments on their **Mobile Dashboard Screen**
4. Driver views delivery tasks on the **Delivery Task List Screen**
5. At delivery location, driver uses the **Delivery Confirmation Screen**
6. Driver captures signature and payment (if COD/CAD)
7. Delivery status is updated on the **Delivery Status Screen**
8. For failed deliveries, the package is processed on the **Return Processing Screen**

### 4.4 Financial Flow - Billing and Payment
1. Finance staff accesses the **Invoice Generation Screen**
2. Staff selects customer and eligible shipments
3. System generates invoice viewable on the **Invoice Detail Screen**
4. Invoice appears on the **Billing List Screen**
5. When payment is received, staff records it on the **Payment Recording Screen**
6. For CAD payments, collectors are assigned on the **CAD Collection Assignment Screen**
7. Collectors update collection status on the **CAD Collection Status Screen**
8. Financial data is viewable on the **Financial Report Screen**

## 5. Wireframe Prompts for Key Screens

### 5.1 Authentication Screens

#### Login Screen
"Create a clean, professional login screen for a logistics ERP system. Include a centered form with the company logo at the top, followed by email and password input fields with appropriate icons. Add a 'Remember me' checkbox and a 'Forgot password?' link below the form. Include a prominent blue primary button labeled 'Login'. The background should be light with subtle branding elements."

#### Forgot Password Screen
"Design a simple forgot password screen for a logistics ERP system. Include a centered form with brief instructions at the top explaining the password reset process. Add an email input field and a prominent 'Reset Password' button. Include a 'Back to Login' link below the form. Maintain the same design language as the login screen with a light background and blue primary button."

### 5.2 Dashboard Screens

#### Admin Dashboard
"Create a comprehensive admin dashboard for a logistics ERP system with a clean, data-focused layout. At the top, display 4-5 KPI cards showing metrics like total shipments, on-time delivery rate, active vehicles, and revenue. Below, create a two-column layout with a shipment volume chart on the left and a map showing vehicle locations on the right. At the bottom, include a recent activities feed and a system alerts panel. Use a light theme with the company's blue primary color for accents."

#### Branch Manager Dashboard
"Design a branch manager dashboard for a logistics ERP system focusing on operational metrics. Include a header with branch selection dropdown and date range filter. Create a top row of 4 KPI cards showing daily shipments, on-time rate, vehicle utilization, and pending pickups. Below, design a two-column layout with a shipment status breakdown chart on the left and a staff performance table on the right. At the bottom, include a tasks panel showing pending approvals and alerts. Use a clean, light theme with blue and green accent colors for positive metrics."

### 5.3 Operational Screens

#### Pickup Request List Screen
"Design a pickup request list screen for a logistics ERP system with a focus on usability. Include a header with the title and action buttons (Add New, Export, Print). Below, add a filter bar with date range, status, and customer filters. The main content should be a data table with columns for request ID, customer name, address, scheduled time, package info, status, and actions. Each row should have color-coded status indicators and action buttons. Include pagination controls at the bottom. Use a clean, light design with subtle grid lines."

#### Waybill Creation Screen
"Create a waybill creation form for a logistics ERP system with a step-based layout. Design a multi-section form with clearly separated sections for: 1) Sender Information with customer search and address fields, 2) Recipient Information with similar fields, 3) Package Details with inputs for quantity, weight, dimensions, and description, 4) Service Options with service type selection and special handling checkboxes, and 5) Payment Information with payment method selection. Include a sidebar showing the calculated shipping cost breakdown. Add a sticky footer with Save Draft and Create Waybill buttons. Use a clean form design with proper spacing and grouping."

#### Shipment Detail Screen
"Design a detailed shipment information screen for a logistics ERP system. Include a header with the waybill number, created date, and status. Below the header, create a horizontal timeline showing the shipment's journey stages. Design the main content in a two-column layout: the left side showing sender/receiver information, package details, and service information in separate cards; the right side displaying a tracking map, tracking history in a vertical timeline, and document attachments. Add action buttons at the top right for operations like Print, Edit, and Cancel. Use a clean, information-dense layout with clear visual hierarchy."

### 5.4 Mobile Screens

#### Mobile Dashboard Screen
"Create a mobile dashboard for delivery drivers in a logistics app. Design for a standard smartphone screen with a clean, touch-friendly interface. Include a header with the driver's name, profile picture, and notification bell. Below, show today's summary metrics in small cards (completed/total deliveries, on-time percentage). The main section should display a scrollable task list with each task showing the delivery address, time window, recipient name, and package count. Use card-based design with clear visual status indicators. Add a bottom navigation bar with icons for Dashboard, Tasks, Scan, and Profile. Use a light theme with the company blue as the primary color."

#### Pickup Form Screen
"Design a mobile pickup form screen for logistics drivers to record package collection. Create a form-based interface optimized for quick data entry in the field. Include a header showing the customer name and address. Add a barcode scanner button at the top for quick package scanning. Design form sections for package details (quantity, weight, dimensions) with clear labels and appropriate input types. Include a photo capture section with camera button and thumbnail previews. Add a signature capture area at the bottom. Use a prominent 'Complete Pickup' button at the bottom. Design for offline use with a sync status indicator."

#### Delivery Confirmation Screen
"Create a delivery confirmation screen for a mobile logistics app used by drivers. Design a clean interface focusing on quick completion in the field. Include recipient information at the top. Add delivery status options as radio buttons (Delivered, Recipient Absent, Address Issue, etc.). Include a section for recipient details with name and ID inputs. Add a signature capture area with clear instructions. For COD/CAD deliveries, include a payment section with amount and payment method. Add a photo evidence section with camera button. Use a prominent 'Confirm Delivery' button at the bottom. Design with offline use in mind, including a sync status indicator."

### 5.5 Financial Screens

#### Invoice Generation Screen
"Design an invoice generation screen for a logistics ERP system. Create a form-based layout with a clear workflow. Include a customer selection section at the top with search functionality. Add date range selection for shipments to include. The main section should display an eligible shipments table with checkboxes for selection, showing waybill numbers, dates, services, and amounts. On the right side, include an invoice summary panel showing selected item count, subtotal, tax, and total amount. Add invoice settings below for terms, due date, and notes. Include Preview and Generate Invoice buttons at the bottom. Use a clean, financial-appropriate design with subtle gridlines and clear typography."

#### Payment Recording Screen
"Create a payment recording screen for a logistics financial system. Design a form-based interface for recording customer payments. Include a customer selection section at the top. Below, show a table of outstanding invoices with checkboxes, invoice numbers, dates, amounts, and balance due. Add a payment details section with inputs for payment date, amount, method, and reference number. Include a payment allocation section showing how the payment will be applied to selected invoices. Add a document upload area for payment proof. Include a Notes field and Submit Payment button at the bottom. Use a clean financial interface with appropriate spacing and typography."
