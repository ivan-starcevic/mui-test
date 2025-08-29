# FormField Component

A flexible and customizable form field component that replaces MUI's TextField with separate Input and Label components, following the Joy-UI approach for better control and styling.

## 📁 Files in this folder

- `FormField.jsx` - The main component implementation
- `FormFieldDemo.jsx` - Interactive demo showcasing all features
- `index.js` - Export file for clean imports
- `README.md` - This documentation

## 🚀 Quick Start

```jsx
import { FormField } from './components/FormField';

function MyForm() {
  return (
    <FormField
      label="Email"
      placeholder="Enter your email"
      type="email"
      required
    />
  );
}
```

## ✨ Features

- **Flexible Input Types**: Text, email, password, tel, url, number, search
- **Rich Label Options**: Required indicators, helper text, error states
- **Icon Support**: Leading and trailing icons with click handlers
- **Validation States**: Error and success states with custom messages
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Full ARIA support and keyboard navigation

## 🎨 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Field label text |
| `placeholder` | `string` | - | Input placeholder text |
| `type` | `string` | `'text'` | Input type (text, email, password, etc.) |
| `value` | `string` | - | Controlled input value |
| `onChange` | `function` | - | Change handler function |
| `required` | `boolean` | `false` | Shows required indicator |
| `error` | `boolean` | `false` | Shows error state |
| `errorText` | `string` | - | Error message text |
| `success` | `boolean` | `false` | Shows success state |
| `successText` | `string` | - | Success message text |
| `helperText` | `string` | - | Helper text below field |
| `startIcon` | `ReactNode` | - | Leading icon component |
| `endIcon` | `ReactNode` | - | Trailing icon component |
| `onStartIconClick` | `function` | - | Start icon click handler |
| `onEndIconClick` | `function` | - | End icon click handler |
| `disabled` | `boolean` | `false` | Disables the input |
| `fullWidth` | `boolean` | `false` | Makes field full width |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Field size |
| `variant` | `'outlined' \| 'filled' \| 'standard'` | `'outlined'` | Input variant |

## 📝 Examples

### Basic Usage
```jsx
<FormField
  label="Name"
  placeholder="Enter your full name"
  required
/>
```

### With Validation
```jsx
<FormField
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
<FormField
  label="Password"
  type="password"
  startIcon={<LockIcon />}
  endIcon={showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
  onEndIconClick={() => setShowPassword(!showPassword)}
/>
```

### Success State
```jsx
<FormField
  label="Username"
  value={username}
  success={isUsernameAvailable}
  successText="Username is available!"
/>
```

## 🎯 Demo

Run the application and navigate to the FormField demo to see all features in action:

```bash
npm run dev
```

Then visit http://localhost:5173 to see the interactive demo.

## 🔧 Customization

The component uses MUI's theming system, so you can customize colors, spacing, and typography through your theme configuration.

## ♿ Accessibility

- Full ARIA label support
- Error announcements for screen readers
- Keyboard navigation support
- Focus management
- Color contrast compliance

## 🤝 Contributing

When modifying this component:
1. Update the demo to showcase new features
2. Test with screen readers
3. Ensure responsive behavior
4. Update this README if adding new props
