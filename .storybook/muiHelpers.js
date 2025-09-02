import React from 'react';
import { Box, Container, Paper } from '@mui/material';

// Common decorator for MUI components that need spacing
export const withMuiSpacing = (Story) => (
  <Box sx={{ p: 3 }}>
    <Story />
  </Box>
);

// Decorator for components that need a paper background
export const withPaperBackground = (Story) => (
  <Paper sx={{ p: 3, m: 2 }}>
    <Story />
  </Paper>
);

// Decorator for components that need a container
export const withContainer = (Story) => (
  <Container maxWidth="md" sx={{ py: 4 }}>
    <Story />
  </Container>
);

// Helper function to create argTypes for common MUI props
export const createMuiArgTypes = (componentName) => {
  const baseArgTypes = {
    // Common MUI props
    sx: {
      control: { type: 'object' },
      description: 'The system prop that allows defining system overrides as well as additional CSS styles.',
      table: {
        type: { summary: 'object' },
        category: 'System',
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Override or extend the styles applied to the component.',
      table: {
        type: { summary: 'string' },
        category: 'System',
      },
    },
    // Common event handlers
    onClick: {
      action: 'clicked',
      description: 'Callback fired when the component is clicked.',
      table: {
        type: { summary: 'function' },
        category: 'Events',
      },
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when the value changes.',
      table: {
        type: { summary: 'function' },
        category: 'Events',
      },
    },
  };

  // Component-specific argTypes
  const componentSpecificArgTypes = {
    Button: {
      variant: {
        control: { type: 'select' },
        options: ['text', 'outlined', 'contained'],
        description: 'The variant to use.',
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: 'text' },
          category: 'Button',
        },
      },
      color: {
        control: { type: 'select' },
        options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
        description: 'The color of the component.',
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: 'primary' },
          category: 'Button',
        },
      },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
        description: 'The size of the component.',
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: 'medium' },
          category: 'Button',
        },
      },
    },
    TextField: {
      variant: {
        control: { type: 'select' },
        options: ['outlined', 'filled', 'standard'],
        description: 'The variant to use.',
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: 'outlined' },
          category: 'TextField',
        },
      },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium'],
        description: 'The size of the component.',
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: 'medium' },
          category: 'TextField',
        },
      },
      fullWidth: {
        control: { type: 'boolean' },
        description: 'If true, the input will take the full width of its container.',
        table: {
          type: { summary: 'boolean' },
          defaultValue: { summary: 'false' },
          category: 'TextField',
        },
      },
    },
  };

  return {
    ...baseArgTypes,
    ...(componentSpecificArgTypes[componentName] || {}),
  };
};

// Helper function to create common MUI story parameters
export const createMuiStoryParameters = (componentName) => ({
  component: componentName,
  parameters: {
    docs: {
      description: {
        component: `A Material-UI ${componentName} component with full customization support.`,
      },
    },
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
  argTypes: createMuiArgTypes(componentName),
});
