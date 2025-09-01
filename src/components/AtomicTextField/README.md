# External Labels Demo

This folder contains a single demo component that showcases how to create form fields with external labels using Material-UI components.

## File: `ExternalLabelsDemo.jsx`

A complete, self-contained demo that demonstrates three different input variants with external labels:

1. **Outlined Input** - Uses `OutlinedInput` with external `FormLabel`
2. **Filled Input** - Uses `FilledInput` with `hiddenLabel` prop and external `FormLabel`
3. **Standard Input** - Uses `Input` with CSS overrides and external `FormLabel`

## How to Use

### Import and Display the Demo

```jsx
import ExternalLabelsDemo from './src/components/AtomicTextField/ExternalLabelsDemo.jsx';

function App() {
  return (
    <div>
      <h1>MUI External Labels Example</h1>
      <ExternalLabelsDemo />
    </div>
  );
}
```

### Use Individual Components

You can also extract individual form controls from the demo:

```jsx
import { FormControl, FormLabel, OutlinedInput, FormHelperText } from '@mui/material';

function MyForm() {
  return (
    <FormControl variant="outlined">
      <FormLabel htmlFor="my-input">My Label</FormLabel>
      <OutlinedInput id="my-input" name="my-input" />
      <FormHelperText>Helper text</FormHelperText>
    </FormControl>
  );
}
```

## Key Features

- **External Labels**: Labels positioned outside input fields
- **Accessibility**: Proper `id` and `htmlFor` attributes
- **Consistent Spacing**: CSS overrides for uniform appearance
- **Three Variants**: Outlined, Filled, and Standard input styles
- **Self-Contained**: All necessary imports and styling included

## Browser Compatibility

This demo works with all modern browsers and includes proper accessibility features for screen readers.
