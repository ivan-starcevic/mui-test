import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Stack,
  InputAdornment,
  IconButton,
  Button,
  Alert,
  Link
} from '@mui/material';
import { Email as EmailIcon, Lock as LockIcon, Person as PersonIcon } from '@mui/icons-material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ExternalLabelTextField from './ExternalLabelTextField';

function ExternalLabelTextFieldDemo() {
  const [showValues, setShowValues] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    bio: '',
    iban: '',
    search: '',
    date: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation - required field
    if (!formData.email || formData.email.trim() === '') {
      newErrors.email = 'Enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter an email address in the correct format, like name@example.com';
    }

    // IBAN validation - required field
    if (!formData.iban || formData.iban.trim() === '') {
      newErrors.iban = 'Enter your IBAN number';
    } else {
      const iban = formData.iban.trim().toUpperCase();
      
      // Check length (7-15 characters)
      if (iban.length < 7 || iban.length > 15) {
        newErrors.iban = 'IBAN must be between 7 and 15 characters';
      }
      // Check if it starts with a country code (2 letters)
      else if (!/^[A-Z]{2}/.test(iban)) {
        newErrors.iban = 'IBAN must start with a country code (e.g., DE, AT)';
      }
    }

    // Date validation - required field
    if (!formData.date || formData.date.trim() === '') {
      newErrors.date = 'Please enter your passport\'s issue date, including day, month, and year.';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      if (selectedDate > today) {
        newErrors.date = 'Passport issue date cannot be in the future';
      }
    }

    // Password validation
    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Validate form and get result
    const isValid = validateForm();
    
    if (isValid) {
      // Simulate form submission
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
        
        setSubmitMessage({
          type: 'success',
          text: 'Form submitted successfully! Check the console for form data.'
        });
        
        console.log('Form submitted with data:', formData);
        
        // Reset form after successful submission
        setFormData({
          username: '',
          email: '',
          password: '',
          bio: '',
          iban: '',
          search: '',
          date: ''
        });
        setErrors({});
        
      } catch (error) {
        setSubmitMessage({
          type: 'error',
          text: 'An error occurred while submitting the form. Please try again.'
        });
      }
    } else {
      // Show validation errors - the errors are already set by validateForm()
      setSubmitMessage({
        type: 'error',
        text: 'Please fix the validation errors before submitting.'
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        ExternalLabelTextField Demo
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        This demo showcases the ExternalLabelTextField component with three variants: Outlined, Filled, and Standard.
        Labels are positioned outside the input fields rather than floating inside them.
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Basic Variants
        </Typography>

        <Stack spacing={3}>
          {/* Outlined Variant */}
          <ExternalLabelTextField
            label="Username (Outlined)"
            variant="outlined"
            placeholder="Enter your username"
            value={formData.username}
            size="small"
            fullWidth
            onChange={handleInputChange('username')}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: 'action.active', mr: 1 }} />
                  </InputAdornment>
                )
              }
            }}
          />

          {/* Filled Variant */}
          <ExternalLabelTextField
            label="Email (Filled)"
            variant="filled"
            type="email"
            size="small"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange('email')}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: 'action.active', mr: 1 }} />
                  </InputAdornment>
                )
              }
            }}
          />

          {/* Standard Variant */}
          <ExternalLabelTextField
            label="Password (Standard)"
            variant="standard"
            type="password"
            size="medium"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange('password')}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: 'action.active', mr: 1 }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <LockIcon sx={{ color: 'action.active', mr: 1 }} />
                  </InputAdornment>
                )
              }
            }}
          />
        </Stack>
      </Paper>

      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Advanced Features
        </Typography>

        <Stack spacing={3}>
          {/* Multiline Input */}
          <ExternalLabelTextField
            label="Bio (Multiline)"
            variant="outlined"
            multiline
            rows={3}
            placeholder="Tell us about yourself..."
            value={formData.bio}
            onChange={handleInputChange('bio')}
            helperText="Maximum 500 characters"
          />

          {/* Error State */}
          <ExternalLabelTextField
            label="Error Example"
            variant="outlined"
            error
            helperText="This field has an error"
            placeholder="This will show error styling"
          />

          {/* Required Field */}
          <ExternalLabelTextField
            label="Required Field"
            variant="outlined"
            required
            placeholder="This field is required"
          />

          {/* Disabled State */}
          <ExternalLabelTextField
            label="Disabled Field"
            variant="outlined"
            disabled
            value="This field is disabled"
          />
        </Stack>
      </Paper>

      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Common Usage Examples
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          This example shows how to use a fixed width of e.g., width: '25ch' for consistent form layouts.
        </Typography>

        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
          noValidate
          autoComplete="off"
        >
          <ExternalLabelTextField
            id="outlined-fixed"
            label="Outlined"
            variant="outlined"
          />
          <ExternalLabelTextField
            id="filled-fixed"
            label="Filled"
            variant="filled"
          />
          <ExternalLabelTextField
            id="standard-fixed"
            label="Standard"
            variant="standard"
          />
        </Box>
      </Paper>

      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Common Usage Examples
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          ExternalLabelTextField supports all the standard HTML input types since it's built on top of the native HTML input element.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
          noValidate
          autoComplete="off"
        >
          {/* Submit Message */}
          {submitMessage && (
            <Alert 
              severity={submitMessage.type} 
              sx={{ mb: 2 }}
            >
              {submitMessage.type === 'error' && Object.keys(errors).length > 0 ? (
                <Box>
                  <Typography variant="body1" sx={{ mb: 1, fontWeight: 'bold' }}>
                    Some information is missing or incorrect
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Please check your input and try again:
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2 }}>
                    {Object.keys(errors).map((fieldName) => (
                      <Box component="li" key={fieldName} sx={{ mb: 0.5 }}>
                        <Typography variant="body1">
                          <Link
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              const fieldId = fieldName === 'date' ? 'standard-date-input' : 
                                             fieldName === 'email' ? 'standard-email-input' :
                                             fieldName === 'iban' ? 'standard-iban-input' :
                                             fieldName === 'password' ? 'standard-password-input' : '';
                              if (fieldId) {
                                document.getElementById(fieldId)?.focus();
                              }
                            }}
                            sx={{ cursor: 'pointer', textDecoration: 'underline' }}
                          >
                            {errors[fieldName]}
                          </Link>
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ) : (
                submitMessage.text
              )}
            </Alert>
          )}

          <Stack direction="column" spacing={2}>
            <ExternalLabelTextField
              id="standard-email-input"
              required
              label="Email address"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              error={!!errors.email}
              helperText={errors.email || 'We’ll only use this to send you a receipt'}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: 'action.active', mr: 1 }} />
                    </InputAdornment>
                  )
                }
              }}
            />

            <ExternalLabelTextField
              id="standard-password-input"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={formData.password}
              onChange={handleInputChange('password')}
              error={!!errors.password}
              helperText={errors.password || ''}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? 'hide the password' : 'display the password'
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }}
            />

            <ExternalLabelTextField
              id="standard-iban-input"
              label="IBAN"
              type="text"
              required
              helperText={errors.iban || (
                <span>
                  Must be between 7 and 15 characters. E.g., DE1234567890. 
                  <Link href="#" sx={{ ml: 1 }}>
                    Look up your IBAN number.
                  </Link>
                </span>
              )}
              value={formData.iban}
              onChange={handleInputChange('iban')}
              error={!!errors.iban}
              slotProps={{
                input: {
                  inputProps: { 
                    style: { textTransform: 'uppercase' }
                  }
                }
              }}
            />

            <ExternalLabelTextField
              label="Search"
              type="search"
              value={formData.search}
              onChange={handleInputChange('search')}
            />

            <ExternalLabelTextField
              id="standard-date-input"
              label="When was your passport issued?"
              type="date"
              required
              value={formData.date}
              onChange={handleInputChange('date')}
              error={!!errors.date}
              helperText={errors.date || ''}
            />


            {/* Submit Button */}
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                size="medium"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Form'}
              </Button>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}

export default ExternalLabelTextFieldDemo;
