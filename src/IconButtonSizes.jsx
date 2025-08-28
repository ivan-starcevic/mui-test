import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function IconButtonSizes() {
  const buttonRef = React.useRef(null);
  const [metrics, setMetrics] = React.useState({
    width: '',
    height: '',
    minWidth: '',
    minHeight: '',
  });

  React.useLayoutEffect(() => {
    if (!buttonRef.current) return;
    const computed = window.getComputedStyle(buttonRef.current);
    setMetrics({
      width: computed.width || '',
      height: computed.height || '',
      minWidth: computed.minWidth || '',
      minHeight: computed.minHeight || '',
    });
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '60vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <IconButton ref={buttonRef} color="primary" aria-label="center icon button">
        <DeleteIcon />
      </IconButton>

      <div style={{ position: 'absolute', top: 16, textAlign: 'center' }}>
        <Label name="height" value={metrics.height} />
      </div>
      <div style={{ position: 'absolute', bottom: 16, textAlign: 'center' }}>
        <Label name="min-height" value={metrics.minHeight} />
      </div>
      <div style={{ position: 'absolute', left: 16, textAlign: 'left' }}>
        <Label name="width" value={metrics.width} />
      </div>
      <div style={{ position: 'absolute', right: 16, textAlign: 'right' }}>
        <Label name="min-width" value={metrics.minWidth} />
      </div>
    </div>
  );
}

function Label({ name, value }) {
  return (
    <div
      style={{
        padding: '6px 10px',
        borderRadius: 8,
        background: 'rgba(0,0,0,0.06)',
        border: '1px solid rgba(0,0,0,0.12)',
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        fontSize: 12,
        color: '#111',
        backdropFilter: 'blur(2px)',
      }}
    >
      <strong style={{ textTransform: 'uppercase' }}>{name}</strong>{' '}
      <span>{value || 'n/a'}</span>
    </div>
  );
}


