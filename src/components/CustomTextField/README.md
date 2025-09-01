# CustomTextField Component

A flexible and accessible text field component that implements the "labeled input with external label" pattern using MUI's FormControl, FormLabel, and OutlinedInput components. This approach provides better control over styling and improved accessibility.

## 📁 Files in this folder

- `CustomTextField.jsx` - The main component implementation
- `CustomTextFieldDemo.jsx` - Interactive demo showcasing all features
- `index.js` - Export file for clean imports
- `README.md` - This documentation

## 🚀 Quick Start

```jsx
import { CustomTextField } from './components/CustomTextField';

function MyForm() {
  return (
    <CustomTextField
      label="Email"
      placeholder="Enter your email"
      type="email"
      required
    />
  );
}
```

## ✨ Features

- **External Labels**: Labels positioned outside the input field for better accessibility
- **Flexible Input Types**: Text, email, password, tel, url, number, search
- **Icon Support**: Leading and trailing icons with click handlers
- **Validation States**: Error and success states with custom messages
- **Password Toggle**: Built-in show/hide password functionality
- **Multiline Support**: Textarea support with configurable rows
- **Different Sizes**: Small, medium, and large size options
- **Accessibility**: Full ARIA support and keyboard navigation
- **Form Integration**: Seamless integration with form libraries

## 🎨 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Field label text |
| `placeholder` | `string` | - | Input placeholder text |
| `type` | `string` | `'text'` | Input type (text, email, password, etc.) |
| `value` | `string` | - | Controlled input value |
| `onChange` | `function` | - | Change handler function |
| `size` | `'small' \| 'medium' \| 'large'` | `'small'` | Input size |
| `margin` | `'none' \| 'dense' \| 'normal'` | `'dense'` | FormControl margin |
| `helperText` | `string` | - | Helper text below field |
| `error` | `boolean` | `false` | Shows error state |
| `errorText` | `string` | - | Error message text |
| `success` | `boolean` | `false` | Shows success state |
| `successText` | `string` | - | Success message text |
| `required` | `boolean` | `false` | Shows required indicator |
| `disabled` | `boolean` | `false` | Disables the input |
| `fullWidth` | `boolean` | `false` | Makes field full width |
| `startIcon` | `ReactNode` | - | Leading icon component |
| `endIcon` | `ReactNode` | - | Trailing icon component |
| `onStartIconClick` | `function` | - | Start icon click handler |
| `onEndIconClick` | `function` | - | End icon click handler |
| `multiline` | `boolean` | `false` | Enables textarea mode |
| `rows` | `number` | `1` | Number of rows (multiline only) |
| `maxRows` | `number` | - | Maximum rows (multiline only) |
| `minRows` | `number` | - | Minimum rows (multiline only) |

## 📝 Examples

### Basic Usage
```jsx
<TextField
  label="Name"
  placeholder="Enter your full name"
  required
/>
```

### With Validation
```jsx
<TextField
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={!!emailError}
  errorText={emailError}
  required
/>
```

### With Icons
```jsx
<TextField
  label="Search"
  placeholder="Search..."
  startIcon={<SearchIcon />}
  endIcon={<ClearIcon />}
  onEndIconClick={handleClear}
/>
```

### Password Field
```jsx
<TextField
  label="Password"
  type="password"
  placeholder="Enter your password"
  startIcon={<LockIcon />}
  // Password toggle is automatically handled
/>
```

### Multiline TextArea
```jsx
<TextField
  label="Bio"
  placeholder="Tell us about yourself..."
  multiline
  rows={3}
  maxRows={6}
  helperText="You can write multiple lines here"
/>
```

### Success State
```jsx
<TextField
  label="Username"
  value={username}
  success={isUsernameAvailable}
  successText="Username is available!"
/>
```

## 🎯 Demo

Run the application and navigate to the TextField demo to see all features in action:

```bash
npm run dev
```

Then visit http://localhost:5173 to see the interactive demo.

## 🔧 Customization

The component uses MUI's theming system, so you can customize colors, spacing, and typography through your theme configuration.

## ♿ Accessibility

- **External Labels**: Labels are properly associated with inputs using `htmlFor` and `id`
- **ARIA Support**: Full ARIA label and description support
- **Error Announcements**: Screen readers announce error messages
- **Keyboard Navigation**: Full keyboard support for all interactions
- **Focus Management**: Proper focus handling for icons and inputs
- **Color Contrast**: Compliant with WCAG guidelines

## 🔄 Differences from MUI TextField

This component differs from MUI's standard TextField in several ways:

1. **External Labels**: Uses FormLabel outside the input instead of floating labels
2. **Better Control**: More granular control over label positioning and styling
3. **Consistent Spacing**: Predictable spacing between label and input
4. **Accessibility**: Improved accessibility with explicit label associations

## 🤝 Contributing

When modifying this component:
1. Update the demo to showcase new features
2. Test with screen readers
3. Ensure responsive behavior
4. Update this README if adding new props
