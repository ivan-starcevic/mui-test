import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Divider,
  Alert,
  Stack,
  Chip,
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from '@mui/material';
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Person as PersonIcon,
  Phone as PhoneIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon
} from '@mui/icons-material';
import FormField from './FormField';

const FormFieldDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    bio: '',
    website: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    }
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        FormField Component Demo
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        This demo showcases the new FormField component that replaces MUI's TextField with separate Input and Label components, following the Joy-UI approach.
      </Alert>

      <Grid container spacing={4}>
        {/* Basic Examples */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Basic Examples
            </Typography>
            
            <FormField
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange('name')}
              error={!!errors.name}
              helperText={errors.name}
              startAdornment={<PersonIcon sx={{ color: 'action.active', mr: 1 }} />}
            />

            <FormField
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange('email')}
              error={!!errors.email}
              helperText={errors.email}
              startAdornment={<EmailIcon sx={{ color: 'action.active', mr: 1 }} />}
            />

            <FormField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange('password')}
              error={!!errors.password}
              helperText={errors.password}
              startAdornment={<LockIcon sx={{ color: 'action.active', mr: 1 }} />}
              endAdornment={
                <Box
                  component="button"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    p: 0.5,
                    color: 'action.active'
                  }}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </Box>
              }
            />
          </Paper>
        </Grid>

        {/* Advanced Examples */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Advanced Examples
            </Typography>

            <FormField
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange('phone')}
              helperText="We'll use this for important updates"
              startAdornment={<PhoneIcon sx={{ color: 'action.active', mr: 1 }} />}
            />

            <FormField
              label="Bio"
              multiline
              rows={3}
              placeholder="Tell us about yourself..."
              value={formData.bio}
              onChange={handleChange('bio')}
              helperText="Maximum 500 characters"
            />

            <FormField
              label="Website"
              type="url"
              placeholder="https://example.com"
              value={formData.website}
              onChange={handleChange('website')}
              helperText="Optional - your personal or company website"
            />
          </Paper>
        </Grid>

        {/* Variants and Sizes */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Variants and Sizes
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Input Variants
                </Typography>
                <FormField
                  label="Outlined Variant (Default)"
                  variant="outlined"
                  placeholder="Outlined input field"
                />
                <FormField
                  label="Filled Variant"
                  variant="filled"
                  placeholder="Filled input field"
                />
                <FormField
                  label="Standard Variant"
                  variant="standard"
                  placeholder="Standard input field"
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Input Sizes
                </Typography>
                <FormField
                  label="Small Size"
                  size="small"
                  placeholder="Small input field"
                />
                <FormField
                  label="Medium Size (Default)"
                  size="medium"
                  placeholder="Medium input field"
                />
                <FormField
                  label="Large Size"
                  size="large"
                  placeholder="Large input field"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* States */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Different States
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <FormField
                  label="Normal State"
                  placeholder="Normal input"
                />
              </Grid>
              
              <Grid item xs={12} md={3}>
                <FormField
                  label="Error State"
                  placeholder="Error input"
                  error={true}
                  helperText="This field has an error"
                />
              </Grid>
              
              <Grid item xs={12} md={3}>
                <FormField
                  label="Disabled State"
                  placeholder="Disabled input"
                  disabled={true}
                  helperText="This field is disabled"
                />
              </Grid>
              
              <Grid item xs={12} md={3}>
                <FormField
                  label="Required Field"
                  placeholder="Required input"
                  required={true}
                  helperText="This field is required"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Custom Styling */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Custom Styling
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <FormField
                  label="Custom Label Styling"
                  placeholder="With custom label styling"
                  labelProps={{
                    sx: {
                      color: 'primary.main',
                      fontWeight: 'bold',
                      fontSize: '1.1rem'
                    }
                  }}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <FormField
                  label="Custom Input Styling"
                  placeholder="With custom input styling"
                  inputProps={{
                    sx: {
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        backgroundColor: 'grey.50',
                        '&:hover': {
                          backgroundColor: 'grey.100'
                        }
                      }
                    }
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* MUI Documentation Example */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              MUI Documentation Example
            </Typography>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              This is the exact code from the MUI documentation showing the raw components:
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Raw MUI Components
                </Typography>
                
                <FormControl sx={{ mb: 2 }}>
                  <InputLabel htmlFor="my-input">Email address</InputLabel>
                  <Input id="my-input" aria-describedby="my-helper-text" />
                  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                
                <FormControl sx={{ mb: 2 }}>
                  <InputLabel htmlFor="my-input-2">Password</InputLabel>
                  <Input id="my-input-2" type="password" aria-describedby="my-helper-text-2" />
                  <FormHelperText id="my-helper-text-2">Enter your password.</FormHelperText>
                </FormControl>
                
                <FormControl sx={{ mb: 2 }}>
                  <InputLabel htmlFor="my-input-3">Name</InputLabel>
                  <Input id="my-input-3" aria-describedby="my-helper-text-3" />
                  <FormHelperText id="my-helper-text-3">Enter your full name.</FormHelperText>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  FormField Wrapper (Same Result)
                </Typography>
                
                <FormField
                  label="Email address"
                  helperText="We'll never share your email."
                />
                
                <FormField
                  label="Password"
                  type="password"
                  helperText="Enter your password."
                />
                
                <FormField
                  label="Name"
                  helperText="Enter your full name."
                />
              </Grid>
            </Grid>
            
            <Alert severity="info" sx={{ mt: 3 }}>
              <Typography variant="body2">
                <strong>Comparison:</strong> The FormField component provides the same functionality as the raw MUI components but with a cleaner, more maintainable API. 
                It automatically handles ID generation, ARIA attributes, and consistent styling.
              </Typography>
            </Alert>
          </Paper>
        </Grid>

        {/* Form Submission */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Form Submission
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <FormField
                    label="Name *"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange('name')}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                  />
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <FormField
                    label="Email *"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <FormField
                    label="Password *"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange('password')}
                    error={!!errors.password}
                    helperText={errors.password}
                    required
                    endAdornment={
                      <Box
                        component="button"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        sx={{
                          border: 'none',
                          background: 'none',
                          cursor: 'pointer',
                          p: 0.5,
                          color: 'action.active'
                        }}
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </Box>
                    }
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Chip 
                      label="FormField Component" 
                      color="primary" 
                      variant="outlined" 
                    />
                    <Chip 
                      label="Replaces TextField" 
                      color="secondary" 
                      variant="outlined" 
                    />
                    <Chip 
                      label="Better UX" 
                      color="success" 
                      variant="outlined" 
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormFieldDemo;
