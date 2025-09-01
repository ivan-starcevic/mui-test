import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Alert
} from '@mui/material';
import AtomicTextField from './AtomicTextField';

const AtomicTextFieldDemo = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        AtomicTextField Demo
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Simple demonstration of external labels using MUI's built-in components: FormControl, FormLabel, and OutlinedInput.
      </Alert>

      <Paper sx={{ p: 4 }}>
        <AtomicTextField />
      </Paper>
    </Box>
  );
};

export default AtomicTextFieldDemo;
