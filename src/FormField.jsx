import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FilledInput from '@mui/material/FilledInput';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import { useTheme } from '@mui/material/styles';

/**
 * FormField component that replaces MUI's TextField
 * Uses separate Input and Label components for better UX
 */
const FormField = React.forwardRef(({
  label,
  placeholder,
  helperText,
  error = false,
  disabled = false,
  required = false,
  fullWidth = true,
  size = 'medium',
  variant = 'outlined',
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
  startAdornment,
  endAdornment,
  sx,
  labelProps = {},
  inputProps = {},
  helperTextProps = {},
  ...otherProps
}, ref) => {
  const theme = useTheme();
  
  // Generate unique ID for accessibility
  const fieldId = id || `form-field-${name || Math.random().toString(36).substr(2, 9)}`;
  const labelId = `${fieldId}-label`;
  const helperTextId = `${fieldId}-helper-text`;

  // Handle input variant
  const getInputComponent = () => {
    switch (variant) {
      case 'outlined':
        return OutlinedInput;
      case 'filled':
        return FilledInput;
      case 'standard':
        return Input;
      default:
        return OutlinedInput;
    }
  };

  const InputComponent = getInputComponent();

  return (
    <FormControl
      error={error}
      disabled={disabled}
      required={required}
      fullWidth={fullWidth}
      size={size}
      sx={{
        mb: 2,
        ...sx
      }}
      {...otherProps}
    >
      {label && (
        <FormLabel
          id={labelId}
          htmlFor={fieldId}
          sx={{
            mb: 1,
            color: error ? 'error.main' : 'text.primary',
            ...labelProps.sx
          }}
          {...labelProps}
        >
          {label}
        </FormLabel>
      )}
      
      <InputComponent
        ref={ref}
        id={fieldId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        type={type}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        minRows={minRows}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        aria-labelledby={label ? labelId : undefined}
        aria-describedby={helperText ? helperTextId : undefined}
        sx={{
          ...inputProps.sx
        }}
        {...inputProps}
      />
      
      {helperText && (
        <FormHelperText
          id={helperTextId}
          sx={{
            mt: 0.5,
            ...helperTextProps.sx
          }}
          {...helperTextProps}
        >
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
});

FormField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  maxRows: PropTypes.number,
  minRows: PropTypes.number,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  sx: PropTypes.object,
  labelProps: PropTypes.object,
  inputProps: PropTypes.object,
  helperTextProps: PropTypes.object,
};

FormField.displayName = 'FormField';

export default FormField;
