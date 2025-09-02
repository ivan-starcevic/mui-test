# Storybook Setup for Material-UI (MUI) Components

This Storybook configuration is optimized for Material-UI components and React development.

## 🚀 Features

### Core Optimizations
- **MUI Theme Integration**: Full support for light, dark, and custom themes
- **Component Controls**: Enhanced controls for MUI-specific props
- **Responsive Viewports**: Pre-configured mobile, tablet, and desktop breakpoints
- **Accessibility Testing**: Built-in a11y validation with WCAG compliance
- **Interactive Documentation**: Auto-generated component documentation

### Addons Included
- `@storybook/addon-controls` - Enhanced component controls
- `@storybook/addon-viewport` - Responsive design testing
- `@storybook/addon-backgrounds` - Background color testing
- `@storybook/addon-measure` - Component measurement tools
- `@storybook/addon-outline` - Component outline visualization
- `@storybook/addon-themes` - Theme switching
- `@storybook/addon-a11y` - Accessibility testing
- `@storybook/addon-docs` - Component documentation

## 🎨 Theme Configuration

### Available Themes
- **Light Theme**: Default Material-UI light theme
- **Dark Theme**: Material-UI dark theme
- **Custom Theme**: Green/orange accent theme for testing

### Theme Switching
Use the theme toolbar to switch between themes globally. All components will automatically adapt to the selected theme.

## 📱 Viewport Configuration

### Pre-configured Breakpoints
- **Mobile**: 375x667px
- **Tablet**: 768x1024px  
- **Desktop**: 1200x800px

## 🎯 Component Story Setup

### Using MUI Helpers
```javascript
import { createMuiStoryParameters, withMuiSpacing } from '../../.storybook/muiHelpers';

export default {
  title: 'Material-UI/ComponentName',
  component: ComponentName,
  parameters: createMuiStoryParameters('ComponentName').parameters,
  argTypes: createMuiStoryParameters('ComponentName').argTypes,
  decorators: [withMuiSpacing],
};
```

### Available Decorators
- `withMuiSpacing` - Adds consistent padding around components
- `withPaperBackground` - Wraps components in a Paper component
- `withContainer` - Centers components in a responsive container

## 🎮 Controls and Props

### Common MUI Props
All stories automatically include controls for:
- `sx` - System props and custom styling
- `className` - CSS class overrides
- `onClick` - Click event handlers
- `onChange` - Change event handlers

### Component-Specific Props
Each MUI component gets relevant controls:
- **Button**: variant, color, size
- **TextField**: variant, size, fullWidth
- **And more...**

## 🧪 Testing Integration

### Vitest Support
- Component testing with `@storybook/addon-vitest`
- Interactive testing in Storybook
- Coverage reporting

### Accessibility Testing
- WCAG 2.0 AA compliance checking
- Color contrast validation
- Screen reader compatibility

## 🚀 Getting Started

### Start Storybook
```bash
npm run storybook
```

### Build for Production
```bash
npm run build-storybook
```

### Available Scripts
- `storybook` - Start development server
- `build-storybook` - Build static site
- `test-storybook` - Run tests

## 📁 File Structure

```
.storybook/
├── main.js              # Main Storybook configuration
├── preview.js           # Preview configuration with MUI setup
├── theme.js             # MUI theme definitions
├── globalTypes.js       # Global controls and toolbar
├── muiHelpers.js        # MUI-specific utilities and decorators
└── README.md            # This file

src/stories/
├── MuiButton.stories.js     # Button component stories
├── MuiTextField.stories.js  # TextField component stories
└── ...                      # Other component stories
```

## 🔧 Customization

### Adding New Themes
1. Add theme definition to `theme.js`
2. Update `preview.js` decorators
3. Add theme option to global types

### Creating New Component Stories
1. Use `createMuiStoryParameters()` helper
2. Apply appropriate decorators
3. Follow MUI design patterns

### Adding New Addons
1. Install addon package
2. Add to `main.js` addons array
3. Configure in `preview.js` if needed

## 🎯 Best Practices

### Story Organization
- Group by component category (e.g., "Material-UI/Button")
- Use descriptive story names
- Include interactive examples

### Props Documentation
- Use `argTypes` for prop descriptions
- Include default values
- Categorize props logically

### Theme Testing
- Test components in all available themes
- Ensure proper contrast ratios
- Validate responsive behavior

## 🐛 Troubleshooting

### Common Issues
- **Theme not switching**: Check decorator configuration
- **Controls not working**: Verify argTypes setup
- **Styling issues**: Ensure proper MUI imports

### Performance Tips
- Use `storyStoreV7` for better performance
- Lazy load heavy components
- Optimize bundle size with tree shaking

## 📚 Additional Resources

- [Material-UI Documentation](https://mui.com/)
- [Storybook Documentation](https://storybook.js.org/)
- [MUI + Storybook Examples](https://mui.com/material-ui/getting-started/templates/)
