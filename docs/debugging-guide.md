# Samudra ERP Debugging Guide

This guide provides comprehensive instructions for debugging the Samudra ERP monorepo applications, following the Windsurf Rules for development environments.

## Table of Contents

- [Prerequisites](#prerequisites)
- [IDE Setup](#ide-setup)
- [Debugging Next.js (Web)](#debugging-nextjs-web)
- [Debugging Express.js (API)](#debugging-expressjs-api)
- [Debugging React Native (Mobile)](#debugging-react-native-mobile)
- [Full-Stack Debugging](#full-stack-debugging)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin debugging, ensure you have the following installed:

1. Visual Studio Code with recommended extensions
2. Node.js 18.x LTS
3. pnpm 10.x
4. Chrome or Edge browser for web debugging
5. Android Studio / Xcode for mobile debugging
6. Docker Desktop (for local development environment)

## IDE Setup

The Samudra ERP monorepo comes with pre-configured debugging settings:

1. Open the project using the workspace file:

   ```
   code samudra-erp.code-workspace
   ```

2. Install recommended extensions when prompted.

3. The following debugging configurations are available in the Run and Debug panel (F5):
   - Next.js: Debug Server-Side
   - Next.js: Debug Client-Side
   - Next.js: Full Stack
   - API: Debug Server
   - API: Attach to Process
   - API: Debug Tests
   - Mobile: Debug in Expo
   - Mobile: Attach to Packager
   - Mobile: Debug Android
   - Mobile: Debug iOS
   - Full Stack: Web + API
   - Full Stack: All Services

## Debugging Next.js (Web)

### Server-Side Debugging

1. Set breakpoints in your server-side code (getServerSideProps, API routes, etc.)
2. Select "Next.js: Debug Server-Side" from the debug configuration dropdown
3. Press F5 to start debugging
4. The debugger will stop at your breakpoints when server-side code is executed

### Client-Side Debugging

1. Set breakpoints in your client-side code (React components, hooks, etc.)
2. Select "Next.js: Debug Client-Side" from the debug configuration dropdown
3. Press F5 to start debugging
4. Navigate to http://localhost:3000 in the launched browser
5. The debugger will stop at your breakpoints when client-side code is executed

### Full-Stack Next.js Debugging

1. Set breakpoints in both server-side and client-side code
2. Select "Next.js: Full Stack" from the debug configuration dropdown
3. Press F5 to start debugging
4. The debugger will automatically launch Chrome and connect to both server and client

### Source Maps

Source maps are properly configured for Next.js to ensure you can debug the original source code rather than the transpiled/bundled code. The configuration includes:

```json
"sourceMapPathOverrides": {
  "webpack://_N_E/*": "${webRoot}/*",
  "webpack:///*": "*",
  "webpack:///./~/*": "${webRoot}/node_modules/*"
}
```

## Debugging Express.js (API)

### API Server Debugging

1. Set breakpoints in your Express.js API code
2. Select "API: Debug Server" from the debug configuration dropdown
3. Press F5 to start debugging
4. The debugger will stop at your breakpoints when API endpoints are called

### Attaching to a Running API Process

1. Start the API server manually: `cd apps/api && pnpm dev`
2. Select "API: Attach to Process" from the debug configuration dropdown
3. Press F5 to start debugging
4. Select the Node.js process running your API from the list
5. The debugger will attach to the running process and stop at your breakpoints

### Debugging API Tests

1. Set breakpoints in your test files or API code
2. Select "API: Debug Tests" from the debug configuration dropdown
3. Press F5 to start debugging
4. The debugger will stop at your breakpoints during test execution

## Debugging React Native (Mobile)

### Expo Debugging

1. Set breakpoints in your React Native code
2. Select "Mobile: Debug in Expo" from the debug configuration dropdown
3. Press F5 to start debugging
4. Expo will start and provide a QR code to scan with the Expo Go app
5. The debugger will stop at your breakpoints when the code is executed

### Attaching to Running Packager

1. Start the Expo development server manually: `cd apps/mobile && pnpm start`
2. Select "Mobile: Attach to Packager" from the debug configuration dropdown
3. Press F5 to start debugging
4. The debugger will attach to the running Expo packager
5. Open the app in Expo Go and the debugger will stop at your breakpoints

### Android/iOS Specific Debugging

1. Set breakpoints in your React Native code
2. Select "Mobile: Debug Android" or "Mobile: Debug iOS" from the debug configuration dropdown
3. Press F5 to start debugging
4. The debugger will launch the app in an emulator/simulator
5. The debugger will stop at your breakpoints when the code is executed

## Full-Stack Debugging

### Web + API Debugging

1. Set breakpoints in both your Next.js and Express.js code
2. Select "Full Stack: Web + API" from the debug configuration dropdown
3. Press F5 to start debugging
4. Both the Next.js and Express.js servers will start
5. The debugger will stop at your breakpoints in either codebase

### All Services Debugging

1. Set breakpoints in your Next.js, Express.js, and React Native code
2. Select "Full Stack: All Services" from the debug configuration dropdown
3. Press F5 to start debugging
4. All services will start (Web, API, Mobile)
5. The debugger will stop at your breakpoints in any of the codebases

## Troubleshooting

### Source Maps Not Working

If breakpoints are not being hit or you're seeing transpiled code:

1. Ensure source maps are enabled in your tsconfig.json or webpack configuration
2. Check that the "sourceMaps" option is set to true in your launch configuration
3. Verify that the paths in "sourceMapPathOverrides" match your project structure

### Node.js Debugging Issues

If you're having issues with Node.js debugging:

1. Try using the "Attach to Process" configuration instead of "Launch"
2. Ensure you're using the correct Node.js version (18.x LTS)
3. Check that the "skipFiles" setting is correctly configured to skip node_modules

### React Native Debugging Issues

If you're having issues with React Native debugging:

1. Ensure the React Native extension is installed and enabled
2. Try restarting the packager with `--reset-cache`
3. Verify that the Metro bundler is running on the default port (19000)
4. Check that your device/emulator can connect to the development server

### Docker Environment Issues

If you're debugging with Docker:

1. Ensure ports are properly mapped in your docker-compose.yml
2. Use the "Attach to Process" configuration to connect to processes inside containers
3. Verify that source maps are correctly configured for the Docker environment

## Advanced Debugging Techniques

### Using Logpoints

Instead of console.log statements, use logpoints:

1. Right-click on the line number where you want to add a logpoint
2. Select "Add Logpoint"
3. Enter your log message with expressions in curly braces, e.g., "User data: {user}"
4. The message will be logged without modifying your code

### Conditional Breakpoints

To break only when a specific condition is met:

1. Right-click on the line number where you want to add a breakpoint
2. Select "Add Conditional Breakpoint"
3. Enter your condition, e.g., "user.id === 123"
4. The debugger will only stop when the condition is true

### Data Inspection

While debugging:

1. Hover over variables to see their current values
2. Use the Watch panel to track specific expressions
3. Use the Call Stack to navigate through the execution path
4. Use the Variables panel to explore the current scope

### Performance Profiling

For performance issues:

1. Use the "JavaScript Debug Terminal" to run your application
2. Open Chrome DevTools and use the Performance tab
3. Record a performance profile during the problematic operation
4. Analyze the flame chart to identify bottlenecks

## Additional Resources

- [VS Code Debugging Documentation](https://code.visualstudio.com/docs/editor/debugging)
- [Next.js Debugging Guide](https://nextjs.org/docs/advanced-features/debugging)
- [Express.js Debugging](https://expressjs.com/en/guide/debugging.html)
- [React Native Debugging](https://reactnative.dev/docs/debugging)
- [Chrome DevTools Documentation](https://developers.google.com/web/tools/chrome-devtools)
