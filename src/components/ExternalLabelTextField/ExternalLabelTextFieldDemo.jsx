import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Stack,
  Divider,
  FormControlLabel,
  Switch,
  InputAdornment
} from '@mui/material';
import { Email as EmailIcon, Lock as LockIcon, Person as PersonIcon } from '@mui/icons-material';
import ExternalLabelTextField from './ExternalLabelTextField';

function ExternalLabelTextFieldDemo() {
  const [showValues, setShowValues] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    bio: ''
  });

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
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
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange('password')}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
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
            variant="filled"
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
            variant="standard"
            disabled
            value="This field is disabled"
          />
        </Stack>
      </Paper>

      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Form Data
        </Typography>
        
        <FormControlLabel
          control={
            <Switch
              checked={showValues}
              onChange={(e) => setShowValues(e.target.checked)}
            />
          }
          label="Show form values"
        />
        
        {showValues && (
          <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
            <Typography variant="body2" component="pre" sx={{ fontFamily: 'monospace' }}>
              {JSON.stringify(formData, null, 2)}
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
}

export default ExternalLabelTextFieldDemo;
