import React from 'react';
import {
  FormControl,
  FormLabel,
  OutlinedInput,
  FilledInput,
  Input,
  FormHelperText,
  InputAdornment
} from '@mui/material';

const ExternalLabelTextField = ({
  label,
  variant = 'outlined',
  size = 'small',
  fullWidth = false,
  required = false,
  error = false,
  helperText,
  disabled = false,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  name,
  id,
  type = 'text',
  multiline = false,
  rows = 1,
  maxRows,
  minRows,
  inputProps = {},
  InputProps = {},
  slotProps = {},
  sx = {},
  ...otherProps
}) => {
  // Validate variant prop
  const validVariants = ['outlined', 'filled', 'standard'];
  const inputVariant = validVariants.includes(variant) ? variant : 'outlined';

  // Generate unique ID if not provided
  const inputId = id || name || `external-label-input-${Math.random().toString(36).substr(2, 9)}`;
  const labelId = `${inputId}-label`;

  // Render appropriate input component based on variant
  const renderInput = () => {
    // Only include props that are valid for input components
    const commonProps = {
      id: inputId,
      name: name || inputId,
      placeholder,
      value,
      onChange,
      onBlur,
      onFocus,
      disabled,
      type,
      multiline,
      rows,
      maxRows,
      minRows,
      size,
      fullWidth,
      inputProps,
      sx,
      // Note: otherProps should only contain valid input component props
      ...otherProps
    };

    // Separate InputProps to avoid React warnings
    const inputSpecificProps = {
      ...InputProps,
      ...slotProps.input
    };

    switch (inputVariant) {
      case 'filled':
        return <FilledInput {...commonProps} {...inputSpecificProps} />;
      case 'standard':
        return (
          <Input
            {...commonProps}
            sx={{
              '&.MuiInputBase-root': { mt: '0 !important' },
              '&.MuiInput-root': { mt: '0 !important' },
              ...sx
            }}
            {...inputSpecificProps}
          />
        );
      case 'outlined':
      default:
        return <OutlinedInput {...commonProps} {...inputSpecificProps} />;
    }
  };

  return (
    <FormControl
      variant={inputVariant}
      fullWidth={fullWidth}
      error={error}
      disabled={disabled}
      hiddenLabel={inputVariant === 'filled'}
      {...slotProps.root}
    >
      <FormLabel
        id={labelId}
        htmlFor={inputId}
        sx={{ 
          mb: 1,
          color: error ? 'error.main' : disabled ? 'text.disabled' : 'text.primary',
          '&.Mui-focused': {
            color: error ? 'error.main' : 'primary.main'
          },
          '&.Mui-error': {
            color: 'error.main'
          },
          '&.Mui-disabled': {
            color: 'text.disabled'
          }
        }}
        required={required}
        {...slotProps.label}
      >
        {label}
      </FormLabel>

      {renderInput()}

      {helperText && (
        <FormHelperText error={error} {...slotProps.helperText}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default ExternalLabelTextField;
