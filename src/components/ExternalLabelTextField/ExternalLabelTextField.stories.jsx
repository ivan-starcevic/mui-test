import React from 'react';
import { fn } from 'storybook/test';
import ExternalLabelTextField from './ExternalLabelTextField';

export default {
  title: 'Components/ExternalLabelTextField',
  component: ExternalLabelTextField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A text field component with external labels positioned above the input field. Supports three variants: outlined, filled, and standard.'
      }
    }
  },
  args: {
    variant: 'outlined',
    size: 'small',
    label: 'Text Field',
    placeholder: 'Enter text...',
    error: false,
    disabled: false,
    required: false,
    fullWidth: false,
    type: 'text',
    multiline: false,
    rows: 1,
    value: '',
    name: 'textfield',
    onChange: fn()
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
      description: 'The variant of the input field'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      description: 'The size of the input field'
    },
    label: {
      control: { type: 'text' },
      description: 'The label text displayed above the input field'
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the input field'
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether to show error styling'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input field is disabled'
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the field is required'
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the input field should take full width'
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The type of the input field'
    },
    multiline: {
      control: { type: 'boolean' },
      description: 'Whether the input field supports multiple lines'
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of rows to display when multiline is true',
      min: 1,
      max: 10
    },
    value: {
      control: { type: 'text' },
      description: 'The value of the input field'
    },
    name: {
      control: { type: 'text' },
      description: 'The name attribute of the input field'
    },
    onChange: {
      action: 'onChange',
      description: 'Callback fired when the input value changes'
    }
  }
};

// Basic story with default props
export const Default = {
  args: {
    label: 'Default Text Field',
    placeholder: 'Enter some text...'
  }
};

// Story showing the outlined variant
export const Outlined = {
  args: {
    label: 'Outlined Text Field',
    variant: 'outlined',
    placeholder: 'This is an outlined variant'
  }
};

// Story showing the filled variant
export const Filled = {
  args: {
    label: 'Filled Text Field',
    variant: 'filled',
    placeholder: 'This is a filled variant'
  }
};

// Story showing the standard variant
export const Standard = {
  args: {
    label: 'Standard Text Field',
    variant: 'standard',
    placeholder: 'This is a standard variant'
  }
};
