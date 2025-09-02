import { createGlobalTypes } from '@storybook/addon-controls';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light Theme', icon: 'circlehollow' },
        { value: 'dark', title: 'Dark Theme', icon: 'circle' },
        { value: 'custom', title: 'Custom Theme', icon: 'star' },
      ],
      showName: true,
    },
  },
  direction: {
    name: 'Direction',
    description: 'Text direction',
    defaultValue: 'ltr',
    toolbar: {
      icon: 'arrowleft',
      items: [
        { value: 'ltr', title: 'Left to Right', icon: 'arrowleft' },
        { value: 'rtl', title: 'Right to Left', icon: 'arrowright' },
      ],
      showName: true,
    },
  },
  density: {
    name: 'Density',
    description: 'Component density',
    defaultValue: 'medium',
    toolbar: {
      icon: 'grid',
      items: [
        { value: 'compact', title: 'Compact', icon: 'grid' },
        { value: 'medium', title: 'Medium', icon: 'grid' },
        { value: 'comfortable', title: 'Comfortable', icon: 'grid' },
      ],
      showName: true,
    },
  },
};
