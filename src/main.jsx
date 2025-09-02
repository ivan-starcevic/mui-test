import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import ExternalLabelTextFieldDemo from './components/ExternalLabelTextField/ExternalLabelTextFieldDemo.jsx'

// Create a basic MUI theme
const theme = createTheme()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ExternalLabelTextFieldDemo />
    </ThemeProvider>
  </React.StrictMode>,
)