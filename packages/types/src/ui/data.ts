/**
 * @file UI data display type definitions
 * @description Defines types for data display components
 */

import { ReactNode } from 'react';
import { BaseComponentProps } from './components';

/**
 * Data table props
 */
export interface DataTableProps extends BaseComponentProps {
  data: any[];
  columns: DataTableColumn[];
  isLoading?: boolean;
  loadingText?: string;
  emptyText?: string;
  emptyIcon?: ReactNode;
  pagination?: {
    pageSize: number;
    currentPage: number;
    totalItems: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
    pageSizeOptions?: number[];
  };
  sorting?: {
    sortBy?: string;
    sortDirection?: 'asc' | 'desc';
    onSort?: (field: string, direction: 'asc' | 'desc') => void;
  };
  filtering?: {
    filters: Record<string, any>;
    onFilterChange: (filters: Record<string, any>) => void;
  };
  selection?: {
    selectedRows: any[];
    onSelectionChange: (selectedRows: any[]) => void;
    selectionMode: 'single' | 'multiple';
  };
  rowActions?: {
    items: Array<{
      label: string;
      icon?: ReactNode;
      onClick: (row: any) => void;
      isDisabled?: (row: any) => boolean;
      isHidden?: (row: any) => boolean;
      variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
    }>;
  };
  bulkActions?: {
    items: Array<{
      label: string;
      icon?: ReactNode;
      onClick: (selectedRows: any[]) => void;
      isDisabled?: (selectedRows: any[]) => boolean;
      variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
    }>;
  };
  onRowClick?: (row: any) => void;
  isHoverable?: boolean;
  isStriped?: boolean;
  isBordered?: boolean;
  isCompact?: boolean;
  stickyHeader?: boolean;
  height?: string | number;
}

/**
 * Data table column
 */
export interface DataTableColumn {
  id: string;
  header: string;
  accessorKey?: string;
  accessorFn?: (row: any) => any;
  cell?: (info: { getValue: () => any; row: { original: any } }) => ReactNode;
  footer?: string | ReactNode;
  meta?: {
    isNumeric?: boolean;
    isSortable?: boolean;
    isFilterable?: boolean;
    filterType?:
      | 'text'
      | 'select'
      | 'multiSelect'
      | 'date'
      | 'dateRange'
      | 'number'
      | 'numberRange'
      | 'boolean';
    filterOptions?: Array<{ value: any; label: string }>;
  };
  enableSorting?: boolean;
  enableFiltering?: boolean;
  enableColumnFilter?: boolean;
  enableGlobalFilter?: boolean;
  enableResizing?: boolean;
  enableHiding?: boolean;
  enablePinning?: boolean;
  size?: number;
  minSize?: number;
  maxSize?: number;
}

/**
 * Data grid props
 */
export interface DataGridProps extends BaseComponentProps {
  data: any[];
  isLoading?: boolean;
  loadingText?: string;
  emptyText?: string;
  emptyIcon?: ReactNode;
  columns?: number;
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  renderItem: (item: any, index: number) => ReactNode;
  pagination?: {
    pageSize: number;
    currentPage: number;
    totalItems: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
    pageSizeOptions?: number[];
  };
  filtering?: {
    filters: Record<string, any>;
    onFilterChange: (filters: Record<string, any>) => void;
  };
  sorting?: {
    sortBy?: string;
    sortDirection?: 'asc' | 'desc';
    onSort?: (field: string, direction: 'asc' | 'desc') => void;
  };
  selection?: {
    selectedItems: any[];
    onSelectionChange: (selectedItems: any[]) => void;
    selectionMode: 'single' | 'multiple';
  };
  onItemClick?: (item: any) => void;
}

/**
 * Chart props
 */
export interface ChartProps extends BaseComponentProps {
  data: any[];
  isLoading?: boolean;
  loadingText?: string;
  emptyText?: string;
  emptyIcon?: ReactNode;
  height?: string | number;
  width?: string | number;
  title?: string;
  subtitle?: string;
  legend?: {
    show: boolean;
    position: 'top' | 'right' | 'bottom' | 'left';
  };
  tooltip?: {
    show: boolean;
    custom?: (data: any) => ReactNode;
  };
  grid?: {
    show: boolean;
    horizontal: boolean;
    vertical: boolean;
  };
  colors?: string[];
  theme?: 'light' | 'dark';
}

/**
 * Line chart props
 */
export interface LineChartProps extends ChartProps {
  xAxis: {
    key: string;
    label?: string;
    type?: 'category' | 'time' | 'linear';
    tickFormat?: (value: any) => string;
  };
  yAxis: {
    label?: string;
    tickFormat?: (value: any) => string;
    min?: number;
    max?: number;
  };
  series: Array<{
    name: string;
    key: string;
    color?: string;
    lineStyle?: 'solid' | 'dashed' | 'dotted';
    showPoints?: boolean;
    showArea?: boolean;
    areaOpacity?: number;
  }>;
  curve?: 'linear' | 'monotone' | 'step' | 'natural';
  connectNulls?: boolean;
}

/**
 * Bar chart props
 */
export interface BarChartProps extends ChartProps {
  xAxis: {
    key: string;
    label?: string;
    tickFormat?: (value: any) => string;
  };
  yAxis: {
    label?: string;
    tickFormat?: (value: any) => string;
    min?: number;
    max?: number;
  };
  series: Array<{
    name: string;
    key: string;
    color?: string;
    barWidth?: number;
  }>;
  layout?: 'vertical' | 'horizontal';
  isStacked?: boolean;
  isGrouped?: boolean;
  barGap?: number;
  barRadius?: number;
}

/**
 * Pie chart props
 */
export interface PieChartProps extends ChartProps {
  nameKey: string;
  valueKey: string;
  innerRadius?: number;
  outerRadius?: number;
  cornerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  paddingAngle?: number;
  labelPosition?: 'inside' | 'outside';
  labelType?: 'value' | 'percent' | 'name' | 'name-value' | 'name-percent';
  labelFormatter?: (value: number, percent: number, name: string) => string;
  isDonut?: boolean;
}

/**
 * Map props
 */
export interface MapProps extends BaseComponentProps {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  height?: string | number;
  width?: string | number;
  markers?: Array<{
    id: string;
    position: {
      lat: number;
      lng: number;
    };
    title?: string;
    icon?: string | ReactNode;
    info?: ReactNode;
    onClick?: () => void;
  }>;
  polylines?: Array<{
    id: string;
    path: Array<{
      lat: number;
      lng: number;
    }>;
    color?: string;
    width?: number;
    opacity?: number;
    isGeodesic?: boolean;
  }>;
  polygons?: Array<{
    id: string;
    paths: Array<
      Array<{
        lat: number;
        lng: number;
      }>
    >;
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    fillOpacity?: number;
    strokeOpacity?: number;
  }>;
  onMapClick?: (event: { lat: number; lng: number }) => void;
  onMapDrag?: () => void;
  onMapZoom?: (zoom: number) => void;
  showTraffic?: boolean;
  showControls?: boolean;
  isInteractive?: boolean;
  mapType?: 'roadmap' | 'satellite' | 'hybrid' | 'terrain';
}

/**
 * Timeline props
 */
export interface TimelineProps extends BaseComponentProps {
  items: Array<{
    id: string;
    title: string;
    description?: string;
    timestamp: Date;
    icon?: ReactNode;
    iconColor?: string;
    status?: 'default' | 'success' | 'error' | 'warning' | 'info';
    content?: ReactNode;
    isActive?: boolean;
  }>;
  orientation?: 'vertical' | 'horizontal';
  align?: 'left' | 'right' | 'alternate';
  maxItems?: number;
  showMore?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * Stats card props
 */
export interface StatsCardProps extends BaseComponentProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    direction: 'up' | 'down' | 'neutral';
    label?: string;
  };
  footer?: ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  variant?: 'default' | 'outline' | 'filled';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
}

/**
 * Data list props
 */
export interface DataListProps extends BaseComponentProps {
  items: any[];
  renderItem: (item: any, index: number) => ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  emptyText?: string;
  emptyIcon?: ReactNode;
  keyExtractor: (item: any) => string;
  onItemClick?: (item: any) => void;
  isSelectable?: boolean;
  selectedItems?: any[];
  onSelectionChange?: (selectedItems: any[]) => void;
  showDividers?: boolean;
  size?: 'sm' | 'md' | 'lg';
  pagination?: {
    pageSize: number;
    currentPage: number;
    totalItems: number;
    onPageChange: (page: number) => void;
  };
}
