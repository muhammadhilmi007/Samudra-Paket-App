/**
 * @file UI theme type definitions
 * @description Defines types for theming and design system
 */

/**
 * Theme configuration
 */
export interface ThemeConfig {
  colorMode: 'light' | 'dark' | 'system';
  colors: ColorPalette;
  typography: Typography;
  spacing: Spacing;
  breakpoints: Breakpoints;
  shadows: Shadows;
  borderRadius: BorderRadius;
  transitions: Transitions;
  zIndices: ZIndices;
}

/**
 * Color palette based on the design system
 */
export interface ColorPalette {
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string; // Default: #2563EB
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  secondary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string; // Default: #10B981
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  accent: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string; // Default: #F59E0B
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  neutral: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string; // Default: #6B7280
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  success: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string; // Default: #22C55E
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  error: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string; // Default: #EF4444
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  warning: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string; // Default: #F97316
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  info: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string; // Default: #3B82F6
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  background: {
    default: string;
    paper: string;
    alt: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
  border: {
    light: string;
    default: string;
    dark: string;
  };
}

/**
 * Typography configuration
 */
export interface Typography {
  fontFamily: {
    base: string;
    heading: string;
    mono: string;
  };
  fontWeight: {
    light: number;
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  lineHeight: {
    none: number;
    tight: number;
    snug: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
  letterSpacing: {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
    widest: string;
  };
}

/**
 * Spacing configuration
 */
export interface Spacing {
  0: string;
  0.5: string;
  1: string;
  1.5: string;
  2: string;
  2.5: string;
  3: string;
  3.5: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  14: string;
  16: string;
  20: string;
  24: string;
  28: string;
  32: string;
  36: string;
  40: string;
  44: string;
  48: string;
  52: string;
  56: string;
  60: string;
  64: string;
  72: string;
  80: string;
  96: string;
}

/**
 * Breakpoints configuration
 */
export interface Breakpoints {
  sm: string; // 640px
  md: string; // 768px
  lg: string; // 1024px
  xl: string; // 1280px
  '2xl': string; // 1536px
}

/**
 * Shadows configuration
 */
export interface Shadows {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
}

/**
 * Border radius configuration
 */
export interface BorderRadius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  full: string;
}

/**
 * Transitions configuration
 */
export interface Transitions {
  duration: {
    fastest: string;
    fast: string;
    normal: string;
    slow: string;
    slowest: string;
  };
  easing: {
    easeIn: string;
    easeOut: string;
    easeInOut: string;
    linear: string;
  };
}

/**
 * Z-index configuration
 */
export interface ZIndices {
  hide: number;
  auto: string;
  base: number;
  docked: number;
  dropdown: number;
  sticky: number;
  banner: number;
  overlay: number;
  modal: number;
  popover: number;
  skipLink: number;
  toast: number;
  tooltip: number;
}
