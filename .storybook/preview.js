import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { withThemeByClassName } from '@storybook/addon-themes';
import { lightTheme, darkTheme, customTheme } from './theme';
import { globalTypes } from './globalTypes';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  globalTypes,
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: 'requiredFirst',
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1200px',
            height: '800px',
          },
        },
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#121212',
        },
        {
          name: 'paper',
          value: '#fafafa',
        },
      ],
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
      options: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa'],
        },
      },
      test: "error"
    },
    docs: {
      source: {
        type: 'dynamic',
        excludeDecorators: true,
      },
    },
    layout: 'centered',
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: 'light', color: '#ffffff' },
        { name: 'dark', class: 'dark', color: '#121212' },
        { name: 'custom', class: 'custom', color: '#f5f5f5' },
      ],
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
        custom: 'custom',
      },
      defaultTheme: 'light',
    }),
    (Story, context) => {
      const themeMap = {
        light: lightTheme,
        dark: darkTheme,
        custom: customTheme,
      };
      
      const currentTheme = context.globals.theme || 'light';
      const theme = themeMap[currentTheme] || lightTheme;
      
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={currentTheme}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;