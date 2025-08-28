import React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import ResponsiveTester from "./ResponsiveTester.jsx";
import PageHeading from "./PageHeading.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <Container sx={{
      p: 4,
      display: 'grid',
      gap: 4,
      minHeight: '100vh',
      backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0 10px, transparent 10px 20px)'
    }}>

      <ResponsiveTester initialWidth={900} minWidth={320}>
        <PageHeading
          title="Responsive Page Heading"
          description="Drag the right handle to test how the heading adapts."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Components', href: '#' },
            { label: 'Page Heading' },
          ]}
        />
      </ResponsiveTester>
    </Container>
  </React.StrictMode>
);
