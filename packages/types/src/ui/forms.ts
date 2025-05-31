/**
 * @file UI form type definitions
 * @description Defines types for form components and validation
 */

import { ReactNode } from 'react';
import { BaseComponentProps } from './components';

/**
 * Form field props
 */
export interface FormFieldProps extends BaseComponentProps {
  name: string;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  children: ReactNode;
}

/**
 * Form props
 */
export interface FormProps<T = Record<string, any>> extends BaseComponentProps {
  onSubmit: (data: T) => void;
  onReset?: () => void;
  children: ReactNode;
  defaultValues?: Record<string, any>;
  validationSchema?: any; // Zod schema
  mode?: 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all';
  reValidateMode?: 'onChange' | 'onBlur' | 'onSubmit';
  isSubmitting?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

/**
 * Form section props
 */
export interface FormSectionProps extends BaseComponentProps {
  title?: string;
  description?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  children: ReactNode;
}

/**
 * Form validation error
 */
export interface FormValidationError {
  type: string;
  message: string;
  path: string[];
}

/**
 * Form field validation rules
 */
export interface FormValidationRules {
  required?: {
    value: boolean;
    message: string;
  };
  min?: {
    value: number;
    message: string;
  };
  max?: {
    value: number;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate?: Record<string, (value: any) => boolean | string>;
}

/**
 * Form field types
 */
export type FormFieldType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'checkbox'
  | 'radio'
  | 'select'
  | 'multiselect'
  | 'textarea'
  | 'file'
  | 'hidden'
  | 'barcode'
  | 'signature'
  | 'location'
  | 'address'
  | 'money'
  | 'weight'
  | 'dimensions';

/**
 * Form field configuration
 */
export interface FormFieldConfig {
  name: string;
  type: FormFieldType;
  label?: string;
  placeholder?: string;
  helperText?: string;
  defaultValue?: any;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  validationRules?: FormValidationRules;
  options?: Array<{
    value: string | number;
    label: string;
    disabled?: boolean;
  }>;
  props?: Record<string, any>;
  dependencies?: string[];
  conditionalDisplay?: {
    field: string;
    operator:
      | '=='
      | '!='
      | '>'
      | '<'
      | '>='
      | '<='
      | 'includes'
      | 'startsWith'
      | 'endsWith'
      | 'isEmpty'
      | 'isNotEmpty';
    value: any;
  };
}

/**
 * Form schema
 */
export interface FormSchema {
  id: string;
  title: string;
  description?: string;
  sections: Array<{
    id: string;
    title?: string;
    description?: string;
    fields: FormFieldConfig[];
  }>;
  actions?: {
    submit?: {
      label: string;
      position?: 'left' | 'center' | 'right';
    };
    reset?: {
      label: string;
      position?: 'left' | 'center' | 'right';
    };
    cancel?: {
      label: string;
      position?: 'left' | 'center' | 'right';
      action?: 'navigate' | 'callback';
      destination?: string;
    };
  };
}

/**
 * Specialized form field props
 */

export interface AddressFieldProps extends BaseComponentProps {
  name: string;
  label?: string;
  defaultValue?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  isRequired?: boolean;
  isDisabled?: boolean;
  showMap?: boolean;
  allowCoordinates?: boolean;
  countries?: string[];
}

export interface LocationFieldProps extends BaseComponentProps {
  name: string;
  label?: string;
  defaultValue?: {
    latitude: number;
    longitude: number;
  };
  isRequired?: boolean;
  isDisabled?: boolean;
  showMap?: boolean;
  useCurrentLocation?: boolean;
  zoomLevel?: number;
}

export interface MoneyFieldProps extends BaseComponentProps {
  name: string;
  label?: string;
  defaultValue?: {
    amount: number;
    currency: string;
  };
  isRequired?: boolean;
  isDisabled?: boolean;
  currencies?: string[];
  defaultCurrency?: string;
  min?: number;
  max?: number;
}

export interface DimensionsFieldProps extends BaseComponentProps {
  name: string;
  label?: string;
  defaultValue?: {
    length: number;
    width: number;
    height: number;
  };
  isRequired?: boolean;
  isDisabled?: boolean;
  unit?: 'cm' | 'in';
  showVolumeCalculation?: boolean;
}
