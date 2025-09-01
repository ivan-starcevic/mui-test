/**
 * MUI Form Field Demo: External Labels with TextField
 * 
 * This demo showcases how to create form fields with external labels using Material-UI TextField components.
 * It demonstrates three different TextField variants (Outlined, Filled, Standard) with labels positioned
 * outside the input fields rather than as floating labels inside them.
 * 
 * Key concepts demonstrated:
 * - Using FormControl with FormLabel for external labels
 * - TextField with hiddenLabel prop to remove internal label spacing
 * - CSS overrides for consistent spacing
 * - Proper accessibility with id/htmlFor attributes
 */

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

function ExternalLabelsDemoTextField() {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <FormControl variant="outlined">
          <FormLabel id="outlined-label-id" htmlFor="outlined-textfield" sx={{ mb: 1 }}>
            Label (Outlined TextField)
          </FormLabel>
          <TextField
            id="outlined-textfield"
            name="outlined-textfield"
            placeholder="Placeholder"
            size="small"
            variant="outlined"
            hiddenLabel
          />
          <FormHelperText>Helper text</FormHelperText>
        </FormControl>
        <FormControl hiddenLabel variant="filled">
          <FormLabel id="filled-label-id" htmlFor="filled-textfield" sx={{ mb: 1 }}>
            Label (Filled TextField)
          </FormLabel>
          <TextField
            id="filled-textfield"
            name="filled-textfield"
            placeholder="Placeholder"
            size="small"
            variant="filled"
            hiddenLabel
          />
          <FormHelperText>Helper text</FormHelperText>
        </FormControl>
        <FormControl variant="standard">
          <FormLabel id="standard-label-id" htmlFor="standard-textfield" sx={{ mb: 1 }}>
            Label (Standard TextField)
          </FormLabel>
          <TextField
            id="standard-textfield"
            name="standard-textfield"
            placeholder="Placeholder"
            size="small"
            variant="standard"
            hiddenLabel
            sx={{
              '&.MuiInputBase-root': { mt: '0 !important' },
              '& .MuiInputBase-root': { mt: '0 !important' }
            }}
          />
          <FormHelperText>Helper text</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}

export default ExternalLabelsDemoTextField;
