import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  OutlinedInput,
  FilledInput,
  Input,
  FormHelperText,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const CustomTextField = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  size = 'small',
  margin = 'dense',
  variant = 'outlined',
  helperText,
  error = false,
  errorText,
  success = false,
  successText,
  required = false,
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  onStartIconClick,
  onEndIconClick,
  multiline = false,
  rows = 1,
  maxRows,
  minRows,
  inputProps,
  inputRef,
  autoComplete,
  ...otherProps
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;

  const handleEndIconClick = () => {
    if (type === 'password') {
      setShowPassword(!showPassword);
    }
    if (onEndIconClick) {
      onEndIconClick();
    }
  };

  const getEndIcon = () => {
    if (type === 'password') {
      return showPassword ? <VisibilityOff /> : <Visibility />;
    }
    return endIcon;
  };

  const getHelperText = () => {
    if (error && errorText) return errorText;
    if (success && successText) return successText;
    return helperText;
  };

  const getHelperTextColor = () => {
    if (error) return 'error';
    if (success) return 'success';
    return 'default';
  };

  // Choose the appropriate input component based on variant
  const getInputComponent = () => {
    const commonProps = {
      placeholder,
      size,
      value,
      onChange,
      type: inputType,
      multiline,
      rows: multiline ? rows : undefined,
      maxRows: multiline ? maxRows : undefined,
      minRows: multiline ? minRows : undefined,
      startAdornment: startIcon && (
        <InputAdornment position="start">
          {onStartIconClick ? (
            <IconButton
              onClick={onStartIconClick}
              edge="start"
              size="small"
            >
              {startIcon}
            </IconButton>
          ) : (
            startIcon
          )}
        </InputAdornment>
      ),
      endAdornment: (endIcon || type === 'password') && (
        <InputAdornment position="end">
          {onEndIconClick || type === 'password' ? (
            <IconButton
              onClick={handleEndIconClick}
              edge="end"
              size="small"
            >
              {getEndIcon()}
            </IconButton>
          ) : (
            endIcon
          )}
        </InputAdornment>
      ),
      inputRef,
      autoComplete,
      ...inputProps,
      sx: {
        '&.Mui-focused fieldset': {
          borderColor: error ? 'error.main' : success ? 'success.main' : 'primary.main',
        },
        '&:hover fieldset': {
          borderColor: error ? 'error.main' : success ? 'success.main' : 'primary.main',
        },
        ...inputProps?.sx
      }
    };

    switch (variant) {
      case 'filled':
        return <FilledInput {...commonProps} />;
      case 'standard':
        return <Input {...commonProps} />;
      case 'outlined':
      default:
        return <OutlinedInput {...commonProps} />;
    }
  };

  return (
    <FormControl 
      margin={margin} 
      error={error}
      disabled={disabled}
      fullWidth={fullWidth}
      variant={variant}
      {...otherProps}
    >
      <FormLabel 
        id={`${label?.toLowerCase().replace(/\s+/g, '-')}-label`}
        sx={{ 
          mb: 1,
          color: error ? 'error.main' : success ? 'success.main' : 'text.primary'
        }}
      >
        {label}
        {required && <span style={{ color: 'error.main' }}> *</span>}
      </FormLabel>
      
      {getInputComponent()}
      
      {getHelperText() && (
        <FormHelperText color={getHelperTextColor()}>
          {getHelperText()}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomTextField;
