/**
 * Theme configuration for Samudra ERP Mobile App
 * Based on Windsurf Rules color palette and design system
 */
import { DefaultTheme } from 'react-native-paper';

// Color palette as defined in Windsurf Rules
export const colors = {
  primary: '#2563EB', // Blue
  secondary: '#10B981', // Green
  accent: '#F59E0B', // Amber
  neutral: '#6B7280', // Gray
  error: '#EF4444', // Red
  success: '#22C55E',
  warning: '#F97316',
  info: '#3B82F6',
  background: '#F9FAFB',
  surface: '#FFFFFF',
  border: '#E5E7EB',
  textPrimary: '#111827',
  textSecondary: '#4B5563',
};

// Spacing scale (4px grid)
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Typography
export const typography = {
  fontFamily: {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semiBold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
  },
};

// React Native Paper theme
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
    background: colors.background,
    surface: colors.surface,
    text: colors.textPrimary,
    error: colors.error,
  },
  fonts: {
    regular: {
      fontFamily: typography.fontFamily.regular,
    },
    medium: {
      fontFamily: typography.fontFamily.medium,
    },
    light: {
      fontFamily: typography.fontFamily.regular,
    },
    thin: {
      fontFamily: typography.fontFamily.regular,
    },
  },
};

export default {
  colors,
  spacing,
  typography,
  theme,
};
