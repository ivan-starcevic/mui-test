import * as React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/**
 * PageHeading
 * - Full-width outer container with 32px padding
 * - Inner container for content
 * - Breadcrumbs on top
 * - Below: two-column row (left grows, right hugs content)
 */
export default function PageHeading({
  title = 'Page title',
  description,
  breadcrumbs = [
    { label: 'Home', href: '#' },
    { label: 'Section', href: '#' },
    { label: 'Current' },
  ],
  rightActions,
}) {
  return (
    <Box sx={{ width: '100%', p: 4 }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          {breadcrumbs.map((item, idx) =>
            item.href ? (
              <Link key={idx} color="inherit" underline="hover" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <Typography key={idx} color="text.primary">
                {item.label}
              </Typography>
            )
          )}
        </Breadcrumbs>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Typography variant="h4" noWrap>{title}</Typography>
            {description ? (
              <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
                {description}
              </Typography>
            ) : null}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
            {rightActions ? (
              rightActions
            ) : (
              <>
                <Button variant="outlined" color="inherit">Secondary action</Button>
                <Button variant="contained">Primary action</Button>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}


