/**
 * Type declarations for external modules
 * This file addresses TypeScript module resolution for packages that don't have their own type definitions
 */

// React Native Paper
declare module 'react-native-paper' {
  export const DefaultTheme: any;
  export const Provider: any;
}

// React Navigation
declare module '@react-navigation/native' {
  export const NavigationContainer: any;
}

// Expo Status Bar
declare module 'expo-status-bar' {
  export const StatusBar: any;
}

// React Native Safe Area Context
declare module 'react-native-safe-area-context' {
  export const SafeAreaProvider: any;
}

// Other modules that might need declarations
declare module '*.png';
declare module '*.jpg';
declare module '*.svg';
declare module '*.json' {
  const value: any;
  export default value;
}
