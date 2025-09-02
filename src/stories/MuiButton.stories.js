import { Button } from '@mui/material';
import { createMuiStoryParameters, withMuiSpacing } from '../../.storybook/muiHelpers';

export default {
  title: 'Material-UI/Button',
  component: Button,
  parameters: {
    ...createMuiStoryParameters('Button').parameters,
    docs: {
      description: {
        component: 'A Material-UI Button component with full customization support including variants, colors, and sizes.',
      },
    },
  },
  argTypes: createMuiStoryParameters('Button').argTypes,
  decorators: [withMuiSpacing],
};

// Base story
export const Default = {
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
  },
};

// Variants
export const Variants = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="text" {...args}>Text</Button>
      <Button variant="outlined" {...args}>Outlined</Button>
      <Button variant="contained" {...args}>Contained</Button>
    </div>
  ),
  args: {
    color: 'primary',
    size: 'medium',
  },
};

// Colors
export const Colors = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button color="primary" {...args}>Primary</Button>
      <Button color="secondary" {...args}>Secondary</Button>
      <Button color="success" {...args}>Success</Button>
      <Button color="error" {...args}>Error</Button>
      <Button color="info" {...args}>Info</Button>
      <Button color="warning" {...args}>Warning</Button>
    </div>
  ),
  args: {
    variant: 'contained',
    size: 'medium',
  },
};

// Sizes
export const Sizes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="small" {...args}>Small</Button>
      <Button size="medium" {...args}>Medium</Button>
      <Button size="large" {...args}>Large</Button>
    </div>
  ),
  args: {
    variant: 'contained',
    color: 'primary',
  },
};

// Interactive
export const Interactive = {
  args: {
    children: 'Click me!',
    variant: 'contained',
    color: 'primary',
    size: 'large',
    onClick: () => alert('Button clicked!'),
  },
};

// Custom styling
export const CustomStyling = {
  args: {
    children: 'Custom Button',
    variant: 'contained',
    color: 'secondary',
    sx: {
      borderRadius: '25px',
      textTransform: 'none',
      fontSize: '18px',
      fontWeight: 'bold',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      '&:hover': {
        boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
        transform: 'translateY(-2px)',
      },
    },
  },
};
