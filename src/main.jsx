import React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import IconButtonSizes from "./IconButtonSizes.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <Container sx={{ p: 4 }}>
      <IconButtonSizes />
    </Container>
  </React.StrictMode>
);
