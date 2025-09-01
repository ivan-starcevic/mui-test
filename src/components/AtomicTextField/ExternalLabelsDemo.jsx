/**
 * MUI Form Field Demo: External Labels
 * 
 * This demo showcases how to create form fields with external labels using Material-UI components.
 * It demonstrates three different input variants (Outlined, Filled, Standard) with labels positioned
 * outside the input fields rather than as floating labels inside them.
 * 
 * Key concepts demonstrated:
 * - Using FormControl with FormLabel for external labels
 * - hiddenLabel prop to remove internal label spacing
 * - CSS overrides for consistent spacing
 * - Proper accessibility with id/htmlFor attributes
 */

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FilledInput from '@mui/material/FilledInput';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';

function ExternalLabelsDemo() {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <FormControl variant="outlined">
          <FormLabel id="outlined-label-id" htmlFor="outlined-input" sx={{ mb: 1 }}>
            Label (Outlined)
          </FormLabel>
          <OutlinedInput
            id="outlined-input"
            name="outlined-input"
            placeholder="Placeholder"
            size="small"
          />
          <FormHelperText>Helper text</FormHelperText>
        </FormControl>
        <FormControl hiddenLabel variant="filled">
          <FormLabel id="filled-label-id" htmlFor="filled-input" sx={{ mb: 1 }}>
            Label (Filled)
          </FormLabel>
          <FilledInput
            id="filled-input"
            name="filled-input"
            placeholder="Placeholder"
            size="small"
          />
          <FormHelperText>Helper text</FormHelperText>
        </FormControl>
        <FormControl variant="standard">
          <FormLabel id="standard-label-id" htmlFor="standard-input" sx={{ mb: 1 }}>
            Label (Standard)
          </FormLabel>
          <Input
            id="standard-input"
            name="standard-input"
            placeholder="Placeholder"
            size="small"
            sx={{
              '&.MuiInputBase-root': { mt: '0 !important' },
              '&.MuiInput-root': { mt: '0 !important' }
            }}
          />
          <FormHelperText>Helper text</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}

export default ExternalLabelsDemo;
