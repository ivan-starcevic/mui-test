import * as React from 'react';
import Box from '@mui/material/Box';

/**
 * ResponsiveTester
 * - Bordered container with a draggable right handle to shrink/expand width
 * - Place any children inside to test responsiveness
 */
export default function ResponsiveTester({
  initialWidth = 600,
  minWidth = 240,
  maxWidth = 1200,
  height = 'auto',
  children,
}) {
  const containerRef = React.useRef(null);
  const [width, setWidth] = React.useState(initialWidth);
  const isDraggingRef = React.useRef(false);

  const clamp = (value) => Math.max(minWidth, Math.min(maxWidth, value));

  React.useEffect(() => {
    const handleMove = (e) => {
      if (!isDraggingRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const delta = e.clientX - rect.left; // new desired width
      setWidth(clamp(delta));
    };
    const stopDrag = () => {
      isDraggingRef.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', stopDrag);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', stopDrag);
    };
  }, [minWidth, maxWidth]);

  const onHandleMouseDown = () => {
    isDraggingRef.current = true;
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
      <Box
        ref={containerRef}
        sx={{
          position: 'relative',
          width,
          height,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          backgroundColor: 'background.paper',
          overflow: 'hidden',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.02)',
          transition: isDraggingRef.current ? 'none' : 'width 120ms ease',
        }}
      >
        <Box sx={{ p: 2 }}>{children}</Box>

        {/* Right drag handle */}
        <Box
          onMouseDown={onHandleMouseDown}
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            width: 10,
            cursor: 'ew-resize',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:before': {
              content: '""',
              display: 'block',
              width: 2,
              height: 24,
              borderRadius: 1,
              backgroundColor: 'divider',
            },
            '&:hover:before': {
              backgroundColor: 'text.disabled',
            },
          }}
        />

        {/* Width indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 8,
            right: 12,
            px: 1,
            py: 0.25,
            borderRadius: 1,
            bgcolor: 'rgba(0,0,0,0.06)',
            border: '1px solid',
            borderColor: 'divider',
            fontSize: 12,
            color: 'text.secondary',
          }}
        >
          {Math.round(width)}px
        </Box>
      </Box>
    </Box>
  );
}


