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
    authoredPaddingTop: '',
    authoredPaddingRight: '',
    authoredPaddingBottom: '',
    authoredPaddingLeft: '',
    authoredFontSize: '',
  });

  React.useLayoutEffect(() => {
    if (!buttonRef.current) return;
    const el = buttonRef.current;
    const computed = window.getComputedStyle(el);
    const rootComputed = window.getComputedStyle(document.documentElement);
    const rootPx = parseFloat(rootComputed.fontSize || '16') || 16;

    const toRemIfPx = (value) => {
      if (!value) return '';
      const match = /^([\d.]+)px$/.exec(value);
      if (!match) return '';
      const px = parseFloat(match[1]);
      const rem = px / rootPx;
      return `${Number(rem.toFixed(3))}rem`;
    };

    const authored = el.style; // inline authored styles only
    setMetrics({
      paddingTop: computed.paddingTop || '',
      paddingRight: computed.paddingRight || '',
      paddingBottom: computed.paddingBottom || '',
      paddingLeft: computed.paddingLeft || '',
      fontSize: computed.fontSize || '',
      authoredPaddingTop: authored.paddingTop || '',
      authoredPaddingRight: authored.paddingRight || '',
      authoredPaddingBottom: authored.paddingBottom || '',
      authoredPaddingLeft: authored.paddingLeft || '',
      authoredFontSize: authored.fontSize || toRemIfPx(computed.fontSize),
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
        <Row name="font-size" authored={metrics.authoredFontSize} computed={metrics.fontSize} />
        <Row name="padding-top" authored={metrics.authoredPaddingTop} computed={metrics.paddingTop} />
        <Row name="padding-right" authored={metrics.authoredPaddingRight} computed={metrics.paddingRight} />
        <Row name="padding-bottom" authored={metrics.authoredPaddingBottom} computed={metrics.paddingBottom} />
        <Row name="padding-left" authored={metrics.authoredPaddingLeft} computed={metrics.paddingLeft} />
      </div>
    </div>
  );
}

function Row({ name, authored, computed }) {
  const hasComputed = !!computed && computed !== '0px';
  const hasAuthored = !!authored;
  if (!hasComputed && !hasAuthored) return null;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
      <Badge>{name.toUpperCase()}</Badge>
      {hasAuthored && <Label name="authored" value={authored} />}
      {hasComputed && <Label name="computed" value={computed} />}
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

function Badge({ children }) {
  return (
    <span
      style={{
        padding: '4px 8px',
        borderRadius: 999,
        background: 'rgba(25,118,210,0.08)',
        color: '#1976d2',
        border: '1px solid rgba(25,118,210,0.24)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: 0.4,
      }}
    >
      {children}
    </span>
  );
}

