# AtomicTextField

A simple demonstration of how to achieve external labels using MUI's built-in components without creating custom components.

## 🎯 Purpose

This example shows that you can achieve the "labeled input with external label" effect using MUI's existing components:
- `FormControl`
- `FormLabel` 
- `OutlinedInput`
- `FormHelperText`

## 📝 Code Example

```jsx
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

export default function BasicTextFields() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <FormControl margin="dense">
        <FormLabel id="outlined-label-id" sx={{ mb: 1 }}>
          Label (Outlined)
        </FormLabel>
        <OutlinedInput placeholder="Placeholder" size="small" />
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>
    </Box>
  );
}
```

## ✨ Benefits

- **No Custom Components**: Uses only MUI's built-in components
- **Simple**: Minimal code, easy to understand
- **Maintainable**: Leverages MUI's tested and maintained components
- **Flexible**: Easy to customize using MUI's theming system

## 🎨 Key Components Used

- **FormControl**: Container for form elements
- **FormLabel**: External label positioned above input
- **OutlinedInput**: The actual input field
- **FormHelperText**: Helper text below the input
