import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Stack,
  Button,
  Alert
} from '@mui/material';
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import CustomTextField from './CustomTextField';

const CustomTextFieldDemo = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const [errors, setErrors] = useState({});

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

  const handleSubmit = (event) => {
    event.preventDefault();
    
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

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        CustomTextField Demo
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        CustomTextField with external labels and different variants. For dropdowns, use MUI's dedicated Select component.
      </Alert>

      <Paper sx={{ p: 4 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <CustomTextField
              label="Name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange('name')}
              error={!!errors.name}
              errorText={errors.name}
              startIcon={<PersonIcon />}
              required
              fullWidth
              variant="outlined"
            />

            <CustomTextField
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange('email')}
              error={!!errors.email}
              errorText={errors.email}
              startIcon={<EmailIcon />}
              required
              fullWidth
              variant="filled"
            />
            
            <CustomTextField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange('password')}
              error={!!errors.password}
              errorText={errors.password}
              startIcon={<LockIcon />}
              required
              fullWidth
              variant="standard"
            />
            
            <Button 
              type="submit" 
              variant="contained" 
              size="large"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default CustomTextFieldDemo;
