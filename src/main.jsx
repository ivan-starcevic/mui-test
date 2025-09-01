import React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ExternalLabelsDemo from './components/AtomicTextField/ExternalLabelsDemo.jsx';
import ExternalLabelsDemoTextField from './components/AtomicTextField/ExternalLabelsDemoTextField.jsx';

function CodeExample({ title, code }) {
  return (
    <Box sx={{ mt: 2, mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Paper 
        elevation={1} 
        sx={{ 
          p: 2, 
          backgroundColor: '#f5f5f5',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          overflow: 'auto'
        }}
        component="pre"
      >
        {code}
      </Paper>
    </Box>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6 }}>
        <h2>Version 1: Individual Input Components</h2>
        <ExternalLabelsDemo />
        <CodeExample 
          title="Code Example:"
          code={`// Outlined Input
<FormControl variant="outlined">
  <FormLabel htmlFor="outlined-input">Label (Outlined)</FormLabel>
  <OutlinedInput id="outlined-input" />
  <FormHelperText>Helper text</FormHelperText>
</FormControl>

// Filled Input
<FormControl hiddenLabel variant="filled">
  <FormLabel htmlFor="filled-input">Label (Filled)</FormLabel>
  <FilledInput id="filled-input" />
  <FormHelperText>Helper text</FormHelperText>
</FormControl>

// Standard Input
<FormControl variant="standard">
  <FormLabel htmlFor="standard-input">Label (Standard)</FormLabel>
  <Input id="standard-input" sx={{ '&.MuiInputBase-root': { mt: '0 !important' } }} />
  <FormHelperText>Helper text</FormHelperText>
</FormControl>`}
        />
      </Box>
      <Box>
        <h2>Version 2: TextField Components</h2>
        <ExternalLabelsDemoTextField />
        <CodeExample 
          title="Code Example:"
          code={`// Outlined TextField
<FormControl variant="outlined">
  <FormLabel htmlFor="outlined-textfield">Label (Outlined TextField)</FormLabel>
  <TextField variant="outlined" hiddenLabel />
  <FormHelperText>Helper text</FormHelperText>
</FormControl>

// Filled TextField
<FormControl hiddenLabel variant="filled">
  <FormLabel htmlFor="filled-textfield">Label (Filled TextField)</FormLabel>
  <TextField variant="filled" hiddenLabel />
  <FormHelperText>Helper text</FormHelperText>
</FormControl>

// Standard TextField
<FormControl variant="standard">
  <FormLabel htmlFor="standard-textfield">Label (Standard TextField)</FormLabel>
  <TextField variant="standard" hiddenLabel sx={{ '&.MuiInputBase-root': { mt: '0 !important' } }} />
  <FormHelperText>Helper text</FormHelperText>
</FormControl>`}
        />
      </Box>
    </Box>
  </React.StrictMode>
);
