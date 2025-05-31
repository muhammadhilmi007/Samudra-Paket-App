/**
 * @file UI layout type definitions
 * @description Defines types for layout components
 */

import { ReactNode } from 'react';
import { BaseComponentProps } from './components';

/**
 * Layout props
 */
export interface LayoutProps extends BaseComponentProps {
  children: ReactNode;
}

/**
 * Dashboard layout props
 */
export interface DashboardLayoutProps extends LayoutProps {
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  sidebar?: {
    isOpen: boolean;
    onToggle: () => void;
  };
  notifications?: {
    count: number;
    items: NotificationItem[];
  };
  user?: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: string;
  };
}

/**
 * Sidebar props
 */
export interface SidebarProps extends BaseComponentProps {
  isOpen: boolean;
  onToggle: () => void;
  items: SidebarItem[];
  logo?: {
    src: string;
    alt: string;
  };
  user?: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: string;
  };
  footer?: ReactNode;
}

/**
 * Sidebar item
 */
export interface SidebarItem {
  id: string;
  label: string;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
  badge?: {
    content: string | number;
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  };
  children?: SidebarItem[];
  isExpanded?: boolean;
  requiredPermission?: string;
}

/**
 * Header props
 */
export interface HeaderProps extends BaseComponentProps {
  title?: string;
  logo?: {
    src: string;
    alt: string;
    href?: string;
  };
  onSidebarToggle?: () => void;
  user?: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: string;
  };
  onUserMenuClick?: () => void;
  notificationCount?: number;
  onNotificationsClick?: () => void;
  actions?: ReactNode;
  searchBar?: boolean;
  onSearch?: (query: string) => void;
}

/**
 * Footer props
 */
export interface FooterProps extends BaseComponentProps {
  logo?: {
    src: string;
    alt: string;
  };
  copyright?: string;
  links?: Array<{
    label: string;
    href: string;
    isExternal?: boolean;
  }>;
  socialLinks?: Array<{
    icon: ReactNode;
    href: string;
    label: string;
  }>;
}

/**
 * Breadcrumb props
 */
export interface BreadcrumbProps extends BaseComponentProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
}

/**
 * Breadcrumb item
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
  isCurrentPage?: boolean;
}

/**
 * Page header props
 */
export interface PageHeaderProps extends BaseComponentProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
  tabs?: Array<{
    id: string;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
  }>;
  status?: {
    label: string;
    variant: 'default' | 'success' | 'error' | 'warning' | 'info';
  };
}

/**
 * Container props
 */
export interface ContainerProps extends BaseComponentProps {
  children: ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  centerContent?: boolean;
}

/**
 * Grid props
 */
export interface GridProps extends BaseComponentProps {
  children: ReactNode;
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rowGap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  columnGap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
}

/**
 * Grid item props
 */
export interface GridItemProps extends BaseComponentProps {
  children: ReactNode;
  colSpan?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  rowSpan?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  colStart?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  rowStart?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
}

/**
 * Notification item
 */
export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  type: 'info' | 'success' | 'warning' | 'error';
  icon?: ReactNode;
  link?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * Tab props
 */
export interface TabsProps extends BaseComponentProps {
  tabs: Array<{
    id: string;
    label: string;
    content: ReactNode;
    icon?: ReactNode;
    isDisabled?: boolean;
  }>;
  defaultTabId?: string;
  activeTabId?: string;
  onChange?: (tabId: string) => void;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'enclosed' | 'filled' | 'unstyled';
  size?: 'sm' | 'md' | 'lg';
  isLazy?: boolean;
  isFitted?: boolean;
}
