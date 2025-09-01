import React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import CustomTextFieldDemo from "./components/CustomTextField/CustomTextFieldDemo.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <Container sx={{ p: 4, display: 'grid', gap: 4 }}>
      <CustomTextFieldDemo />
    </Container>
  </React.StrictMode>
);
