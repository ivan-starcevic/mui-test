import React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import FormFieldDemo from "./components/FormField/FormFieldDemo.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <Container sx={{ p: 4, display: 'grid', gap: 4 }}>
      <FormFieldDemo />
    </Container>
  </React.StrictMode>
);
