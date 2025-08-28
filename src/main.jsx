import React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import CssPropViewer from "./CssPropViewer.jsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <Container sx={{ p: 4, display: 'grid', gap: 24 }}>
      <CssPropViewer
        title="IconButton default"
        component={IconButton}
        props={{ color: 'primary', children: <DeleteIcon /> }}
        cssProps={["font-size", "padding"]}
      />

      <CssPropViewer
        title={'IconButton size="small" with Star (fontSize="inherit")'}
        component={IconButton}
        props={{ color: 'secondary', size: 'small' }}
        childrenComponent={StarIcon}
        childrenProps={{ fontSize: 'inherit' }}
        cssProps={["font-size", "padding"]}
      />

      <CssPropViewer
        title={'IconButton size="small" with Star (fontSize="small")'}
        component={IconButton}
        props={{ color: 'secondary', size: 'small' }}
        childrenComponent={StarIcon}
        childrenProps={{ fontSize: 'small' }}
        cssProps={["font-size", "padding"]}
      />

      <CssPropViewer
        title={'IconButton size="large" with inline styles'}
        component={IconButton}
        props={{ sx: { fontSize: '1.5rem', p: 2 } }}
        childrenComponent={DeleteIcon}
        cssProps={["font-size", "padding"]}
      />
    </Container>
  </React.StrictMode>
);
