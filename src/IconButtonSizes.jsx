import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function IconButtonSizes() {
  const buttonRef = React.useRef(null);
  const [metrics, setMetrics] = React.useState({
    paddingTop: '',
    paddingRight: '',
    paddingBottom: '',
    paddingLeft: '',
    fontSize: '',
  });

  React.useLayoutEffect(() => {
    if (!buttonRef.current) return;
    const computed = window.getComputedStyle(buttonRef.current);
    setMetrics({
      paddingTop: computed.paddingTop || '',
      paddingRight: computed.paddingRight || '',
      paddingBottom: computed.paddingBottom || '',
      paddingLeft: computed.paddingLeft || '',
      fontSize: computed.fontSize || '',
    });
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',
        gap: 24,
        width: '100%',
        minHeight: '50vh',
      }}
    >
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <IconButton ref={buttonRef} color="primary" aria-label="icon button">
          <DeleteIcon />
        </IconButton>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Label name="font-size" value={metrics.fontSize} condition={!!metrics.fontSize} />
        <Label name="padding-top" value={metrics.paddingTop} condition={!!metrics.paddingTop && metrics.paddingTop !== '0px'} />
        <Label name="padding-right" value={metrics.paddingRight} condition={!!metrics.paddingRight && metrics.paddingRight !== '0px'} />
        <Label name="padding-bottom" value={metrics.paddingBottom} condition={!!metrics.paddingBottom && metrics.paddingBottom !== '0px'} />
        <Label name="padding-left" value={metrics.paddingLeft} condition={!!metrics.paddingLeft && metrics.paddingLeft !== '0px'} />
      </div>
    </div>
  );
}

function Label({ name, value, condition = true }) {
  if (!condition) return null;
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
        width: 'fit-content',
      }}
    >
      <strong style={{ textTransform: 'uppercase' }}>{name}</strong>{' '}
      <span>{value}</span>
    </div>
  );
}


