/**
 * @file UI component type definitions
 * @description Defines types for UI components following Atomic Design methodology
 */

// Define React types locally to avoid dependency on React
type ReactNode = any;
type ElementType = any;
type CSSProperties = any;

/**
 * Common component props
 */
export interface BaseComponentProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
  'data-testid'?: string;
}

/**
 * Component size variants
 */
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Component color variants based on the design system
 */
export type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'success'
  | 'error'
  | 'warning'
  | 'info';

/**
 * Status indicator variants
 */
export type StatusVariant =
  | 'active'
  | 'inactive'
  | 'pending'
  | 'processing'
  | 'completed'
  | 'cancelled'
  | 'failed'
  | 'warning'
  | 'error';

/**
 * Button props
 */
export interface ButtonProps extends BaseComponentProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: SizeVariant;
  color?: ColorVariant;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  isDisabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: ReactNode;
  as?: ElementType;
  href?: string;
}

/**
 * Input props
 */
export interface InputProps extends BaseComponentProps {
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'url'
    | 'date'
    | 'time'
    | 'datetime-local';
  name: string;
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  size?: SizeVariant;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  autoComplete?: string;
  autoFocus?: boolean;
}

/**
 * Select props
 */
export interface SelectProps extends BaseComponentProps {
  name: string;
  options: SelectOption[];
  value?: string | string[];
  defaultValue?: string | string[];
  placeholder?: string;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  isMulti?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  size?: SizeVariant;
  onChange?: (value: any) => void;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
}

/**
 * Select option
 */
export interface SelectOption {
  value: string;
  label: string;
  isDisabled?: boolean;
  group?: string;
  icon?: ReactNode;
}

/**
 * Card props
 */
export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'outline' | 'elevated' | 'filled';
  color?: ColorVariant;
  padding?: SizeVariant | 'none';
  bordered?: boolean;
  elevated?: boolean;
  isInteractive?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

/**
 * Badge props
 */
export interface BadgeProps extends BaseComponentProps {
  variant?: 'default' | 'outline' | 'filled';
  color?: ColorVariant;
  size?: Exclude<SizeVariant, 'xl'>;
  rounded?: boolean;
  children: ReactNode;
}

/**
 * Status badge props
 */
export interface StatusBadgeProps extends Omit<BadgeProps, 'color'> {
  status: StatusVariant;
  showDot?: boolean;
}

/**
 * Avatar props
 */
export interface AvatarProps extends BaseComponentProps {
  src?: string;
  name?: string;
  size?: SizeVariant;
  variant?: 'circle' | 'square' | 'rounded';
  color?: ColorVariant;
  fallback?: ReactNode;
  alt?: string;
  isLoading?: boolean;
}

/**
 * Modal props
 */
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  isCentered?: boolean;
  scrollBehavior?: 'inside' | 'outside';
  children: ReactNode;
}

/**
 * Table props
 */
export interface TableProps extends BaseComponentProps {
  data: any[];
  columns: TableColumn[];
  isLoading?: boolean;
  emptyState?: ReactNode;
  onRowClick?: (row: any) => void;
  isSelectable?: boolean;
  selectedRows?: any[];
  onSelectionChange?: (selectedRows: any[]) => void;
  sortable?: boolean;
  defaultSortField?: string;
  defaultSortOrder?: 'asc' | 'desc';
  pagination?: {
    pageSize: number;
    currentPage: number;
    totalItems: number;
    onPageChange: (page: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
  };
}

/**
 * Table column definition
 */
export interface TableColumn {
  id: string;
  header: string;
  accessor: string | ((row: any) => any);
  cell?: (value: any, row: any) => ReactNode;
  isSortable?: boolean;
  isVisible?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

/**
 * Custom logistics component props
 */

export interface ShipmentCardProps extends BaseComponentProps {
  shipment: any;
  variant?: 'default' | 'compact' | 'detailed';
  isSelectable?: boolean;
  isSelected?: boolean;
  onSelect?: (shipment: any) => void;
  onClick?: (shipment: any) => void;
  actions?: ReactNode;
}

export interface TrackingTimelineProps extends BaseComponentProps {
  events: any[];
  currentStatus?: string;
  orientation?: 'vertical' | 'horizontal';
  showTime?: boolean;
  maxItems?: number;
}

export interface DeliveryMapProps extends BaseComponentProps {
  deliveries: any[];
  currentLocation?: { lat: number; lng: number };
  zoom?: number;
  height?: string | number;
  showTraffic?: boolean;
  onMarkerClick?: (delivery: any) => void;
  optimizedRoute?: boolean;
}

export interface BarcodeScannerInputProps extends BaseComponentProps {
  onScan: (value: string) => void;
  onError?: (error: string) => void;
  placeholder?: string;
  buttonText?: string;
  isDisabled?: boolean;
  scannerType?: 'camera' | 'input' | 'both';
  acceptedFormats?: string[];
}

export interface SignaturePadProps extends BaseComponentProps {
  onChange: (signature: string) => void;
  value?: string;
  width?: number | string;
  height?: number | string;
  clearButtonText?: string;
  penColor?: string;
  backgroundColor?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
}

export interface WeightVolumeCalculatorProps extends BaseComponentProps {
  onCalculate: (result: { weight: number; volume: number; volumetricWeight: number }) => void;
  initialDimensions?: {
    length: number;
    width: number;
    height: number;
    weight: number;
  };
  conversionFactor?: number;
  showVolumetricWeight?: boolean;
  unit?: 'metric' | 'imperial';
}
