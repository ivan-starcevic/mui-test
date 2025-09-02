import { TextField, Box } from '@mui/material';
import { createMuiStoryParameters, withMuiSpacing } from '../../.storybook/muiHelpers';

export default {
  title: 'Material-UI/TextField',
  component: TextField,
  parameters: {
    ...createMuiStoryParameters('TextField').parameters,
    docs: {
      description: {
        component: 'A Material-UI TextField component with full customization support including variants, sizes, and validation states.',
      },
    },
  },
  argTypes: createMuiStoryParameters('TextField').argTypes,
  decorators: [withMuiSpacing],
};

// Base story
export const Default = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder text',
    variant: 'outlined',
    size: 'medium',
    fullWidth: false,
  },
};

// Variants
export const Variants = {
  render: (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px' }}>
      <TextField label="Outlined" variant="outlined" {...args} />
      <TextField label="Filled" variant="filled" {...args} />
      <TextField label="Standard" variant="standard" {...args} />
    </Box>
  ),
  args: {
    size: 'medium',
    fullWidth: true,
  },
};

// Sizes
export const Sizes = {
  render: (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px' }}>
      <TextField label="Small" size="small" {...args} />
      <TextField label="Medium" size="medium" {...args} />
    </Box>
  ),
  args: {
    variant: 'outlined',
    fullWidth: true,
  },
};

// States
export const States = {
  render: (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px' }}>
      <TextField label="Normal" {...args} />
      <TextField label="Required" required {...args} />
      <TextField label="Disabled" disabled {...args} />
      <TextField label="Error" error helperText="Error message" {...args} />
      <TextField label="Success" color="success" {...args} />
    </Box>
  ),
  args: {
    variant: 'outlined',
    size: 'medium',
    fullWidth: true,
  },
};

// Types
export const Types = {
  render: (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px' }}>
      <TextField label="Text" type="text" {...args} />
      <TextField label="Email" type="email" {...args} />
      <TextField label="Password" type="password" {...args} />
      <TextField label="Number" type="number" {...args} />
      <TextField label="Multiline" multiline rows={3} {...args} />
    </Box>
  ),
  args: {
    variant: 'outlined',
    size: 'medium',
    fullWidth: true,
  },
};

// Interactive
export const Interactive = {
  args: {
    label: 'Interactive Field',
    placeholder: 'Type something...',
    variant: 'outlined',
    size: 'medium',
    fullWidth: true,
    onChange: (event) => console.log('Value changed:', event.target.value),
  },
};

// Custom styling
export const CustomStyling = {
  args: {
    label: 'Custom Styled',
    variant: 'outlined',
    size: 'medium',
    fullWidth: true,
    sx: {
      '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        '&:hover fieldset': {
          borderColor: '#1976d2',
          borderWidth: '2px',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#1976d2',
          borderWidth: '2px',
        },
      },
      '& .MuiInputLabel-root': {
        color: '#666',
        '&.Mui-focused': {
          color: '#1976d2',
        },
      },
    },
  },
};
