import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

export default function AtomicTextField() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <FormControl margin="dense">
        <FormLabel id="outlined-label-id" sx={{ mb: 1 }}>
          Label (Outlined)
        </FormLabel>
        <OutlinedInput placeholder="Placeholder" size="small" />
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>
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
