import React from 'react';
import { Button } from '@mui/material';

export default {
  title: 'Material-UI/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A Material-UI Button component with full customization support.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'outlined', 'contained'],
      description: 'The variant to use.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    color: {
      control: { type: 'select' },
      options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
      description: 'The color of the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the button.',
    },
  },
};

export const Default = {
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
  },
};

export const Variants = {
  args: {
    color: 'primary',
    size: 'medium',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button {...args} variant="text">Text</Button>
      <Button {...args} variant="outlined">Outlined</Button>
      <Button {...args} variant="contained">Contained</Button>
    </div>
  ),
};

export const Colors = {
  args: {
    variant: 'contained',
    size: 'medium',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button {...args} color="primary">Primary</Button>
      <Button {...args} color="secondary">Secondary</Button>
      <Button {...args} color="success">Success</Button>
      <Button {...args} color="error">Error</Button>
      <Button {...args} color="info">Info</Button>
      <Button {...args} color="warning">Warning</Button>
    </div>
  ),
};
