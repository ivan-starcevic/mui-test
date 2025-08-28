import React from 'react';

/**
 * CssPropViewer
 * Props:
 * - component: React component or intrinsic tag string (e.g., 'button')
 * - props: props to pass to the rendered component
 * - cssProps: array of CSS property names to display, e.g., ['padding', 'font-size']
 * - title: optional label for this viewer instance
 */
export default function CssPropViewer({ component, props = {}, cssProps = [], title }) {
  const elementRef = React.useRef(null);
  const [values, setValues] = React.useState([]);

  React.useLayoutEffect(() => {
    if (!elementRef.current) return;
    const el = elementRef.current;
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

    const getPaddingShorthand = (styleLike) => {
      const t = styleLike.paddingTop || '';
      const r = styleLike.paddingRight || '';
      const b = styleLike.paddingBottom || '';
      const l = styleLike.paddingLeft || '';
      if (!t && !r && !b && !l) return '';
      const T = t || '0px';
      const R = r || '0px';
      const B = b || '0px';
      const L = l || '0px';
      if (T === R && R === B && B === L) return T;
      if (T === B && R === L) return `${T} ${R}`;
      if (R === L) return `${T} ${R} ${B}`;
      return `${T} ${R} ${B} ${L}`;
    };

    const authored = el.style; // inline authored styles only

    const results = cssProps.map((prop) => {
      let authoredVal = '';
      let computedVal = '';
      if (prop === 'padding') {
        authoredVal = authored.padding || getPaddingShorthand(authored);
        computedVal = computed.padding || getPaddingShorthand(computed);
      } else if (prop === 'font-size') {
        authoredVal = authored.fontSize || toRemIfPx(computed.fontSize) || '';
        computedVal = computed.fontSize || '';
      } else {
        const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        authoredVal = authored[camel] || '';
        computedVal = computed.getPropertyValue(prop) || '';
      }
      return { prop, authored: authoredVal, computed: computedVal };
    });

    setValues(results);
  }, [component, props, cssProps]);

  const Comp = component;
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 24,
      alignItems: 'center',
      border: '1px solid rgba(0,0,0,0.12)',
      borderRadius: 12,
      padding: 16,
      background: 'rgba(0,0,0,0.02)'
    }}>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <Comp ref={elementRef} {...props} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {title ? (
          <div style={{ fontWeight: 600, marginBottom: 4 }}>{title}</div>
        ) : null}
        {values.map(({ prop, authored, computed }) => {
          if (!authored && (!computed || computed === '0px')) return null;
          return (
            <div key={prop} style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <Badge>{prop.toUpperCase()}</Badge>
              {authored ? <Label name="authored" value={authored} /> : null}
              {computed && computed !== '0px' ? <Label name="computed" value={computed} /> : null}
            </div>
          );
        })}
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


