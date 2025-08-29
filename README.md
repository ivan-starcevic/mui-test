# MUI FormField Component

This project demonstrates a new `FormField` component that replaces MUI's `TextField` with separate `Input` and `Label` components, following the Joy-UI approach.

## Why FormField?

MUI's `TextField` component has received negative user feedback because it nests the label inside the input, which can cause layout and accessibility issues. The new `FormField` component addresses these concerns by:

- **Separating concerns**: Label and Input are separate components
- **Better accessibility**: Proper ARIA labeling and descriptions
- **Improved UX**: Cleaner layout and better visual hierarchy
- **Flexible styling**: Independent control over label and input styling

## Features

- ✅ **Multiple variants**: `outlined`, `filled`, `standard`
- ✅ **Different sizes**: `small`, `medium`, `large`
- ✅ **Form validation**: Error states and helper text
- ✅ **Accessibility**: Proper ARIA attributes and labeling
- ✅ **Custom styling**: Independent styling for labels and inputs
- ✅ **All input types**: Text, email, password, tel, url, etc.
- ✅ **Multiline support**: Textarea functionality
- ✅ **Adornments**: Start and end adornments (icons, buttons)
- ✅ **Form integration**: Works seamlessly with form libraries

## Usage

```jsx
import FormField from './FormField';

// Basic usage
<FormField
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
/>

// With validation
<FormField
  label="Password"
  type="password"
  error={!!errors.password}
  helperText={errors.password}
  required
/>

// With custom styling
<FormField
  label="Custom Input"
  labelProps={{
    sx: { color: 'primary.main', fontWeight: 'bold' }
  }}
  inputProps={{
    sx: { borderRadius: 3, backgroundColor: 'grey.50' }
  }}
/>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | The label text |
| `placeholder` | `string` | - | Input placeholder text |
| `helperText` | `string` | - | Helper text below the input |
| `error` | `boolean` | `false` | Whether to show error state |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `required` | `boolean` | `false` | Whether the field is required |
| `fullWidth` | `boolean` | `true` | Whether the input takes full width |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Input size |
| `variant` | `'outlined' \| 'filled' \| 'standard'` | `'outlined'` | Input variant |
| `type` | `string` | `'text'` | Input type (text, email, password, etc.) |
| `multiline` | `boolean` | `false` | Whether to render as textarea |
| `rows` | `number` | `1` | Number of rows for multiline input |
| `startAdornment` | `node` | - | Content to display before the input |
| `endAdornment` | `node` | - | Content to display after the input |
| `labelProps` | `object` | `{}` | Props to pass to FormLabel |
| `inputProps` | `object` | `{}` | Props to pass to Input component |
| `helperTextProps` | `object` | `{}` | Props to pass to FormHelperText |

### Event Handlers

| Prop | Type | Description |
|------|------|-------------|
| `onChange` | `function` | Called when input value changes |
| `onBlur` | `function` | Called when input loses focus |
| `onFocus` | `function` | Called when input gains focus |

## Installation

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser to see the demo

## Best Practices

1. **Use the `sx` prop for spacing**: Apply `sx={{ mb: 2 }}` on FormControl for consistent spacing
2. **Ensure accessibility**: Always provide meaningful labels and helper text
3. **Link IDs properly**: The component automatically generates and links IDs for accessibility
4. **Customize via theme**: Use theme customization for variants and error states instead of overrides
5. **Use appropriate input types**: Set the correct `type` prop for better UX and validation

## Migration from TextField

To migrate from MUI's `TextField` to `FormField`:

```jsx
// Before (TextField)
<TextField
  label="Email"
  variant="outlined"
  helperText="Enter your email"
/>

// After (FormField)
<FormField
  label="Email"
  variant="outlined"
  helperText="Enter your email"
/>
```

The API is designed to be as compatible as possible with `TextField` while providing the benefits of separated components.

## Contributing

Feel free to submit issues and enhancement requests!