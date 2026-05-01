'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const TECH = [
  // Row 1
  { name: 'Amazon',      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',                               tag: 'E-Commerce',   color: '#FF9900' },
  { name: 'Flipkart',    img: 'https://www.vectorlogo.zone/logos/flipkart/flipkart-icon.svg',                                        tag: 'E-Commerce',   color: '#2874F0' },
  { name: 'Myntra',      img: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Myntra_logo.svg',                                      tag: 'Fashion',      color: '#FF3F6C' },
  { name: 'Google Play', img: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Google_Play_Logo_%282023%29.svg',                 tag: 'Mobile',       color: '#01875F' },
  { name: 'App Store',   img: 'https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg',                         tag: 'Mobile',       color: '#0D84E8' },
  { name: 'Meta',        img: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',                    tag: 'Social',       color: '#0866FF' },
  { name: 'Amazon AWS',  img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',                    tag: 'Cloud',        color: '#FF9900' },
  // Row 2
  { name: 'OpenAI',      img: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',                                tag: 'AI / ML',      color: '#10A37F' },
  { name: 'Vercel',      img: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg',                           tag: 'Deployment',   color: '#555555' },
  { name: 'Stripe',      img: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',                 tag: 'Payments',     color: '#635BFF' },
  { name: 'MongoDB',     img: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg',                                     tag: 'Database',     color: '#4DB33D' },
  { name: 'Firebase',    img: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg',                              tag: 'Backend',      color: '#FFA000' },
  { name: 'Docker',      img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',          tag: 'DevOps',       color: '#099CEC' },
  { name: 'Slack',       img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',                             tag: 'Communication',color: '#E01E5A' },
];

// Which cards connect to each other [fromIndex, toIndex]
const CONNECTIONS: [number, number][] = [
  [0, 1], [1, 2], [3, 4], [5, 6],
  [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13],
  [0, 9], [2, 8], [4, 11], [6, 13], [1, 12], [3, 10], [5, 7],
];

const TAG_STYLES: Record<string, { bg: string; color: string }> = {
  'E-Commerce':    { bg: '#FFF0D6', color: '#B85C00' },
  'Fashion':       { bg: '#FFD6EE', color: '#A01858' },
  'Mobile':        { bg: '#D6F5E8', color: '#1A7A48' },
  'Social':        { bg: '#D6EAFF', color: '#1246A0' },
  'Cloud':         { bg: '#FFF4D6', color: '#9A6000' },
  'AI / ML':       { bg: '#EAE8FF', color: '#3A2EA0' },
  'Deployment':    { bg: '#EBEBEB', color: '#333333' },
  'Payments':      { bg: '#EAE0FF', color: '#4A28A0' },
  'Database':      { bg: '#D6F0D6', color: '#1A6A1A' },
  'Backend':       { bg: '#FFF0D6', color: '#A05000' },
  'DevOps':        { bg: '#D6F0F8', color: '#005A7A' },
  'Communication': { bg: '#FFD6E8', color: '#A00040' },
};

type Point = { x: number; y: number };

function buildPath(p1: Point, p2: Point): string {
  const mdx = (p1.x + p2.x) / 2;
  const mdy = (p1.y + p2.y) / 2;
  const perpX = -(p2.y - p1.y) * 0.22;
  const perpY = (p2.x - p1.x) * 0.22;
  return `M ${p1.x} ${p1.y} Q ${mdx + perpX} ${mdy + perpY} ${p2.x} ${p2.y}`;
}

const SCATTER_DOTS = [
  { rx: 0.04, ry: 0.18, c: '#E06000', r: 5 },
  { rx: 0.96, ry: 0.15, c: '#C00060', r: 5 },
  { rx: 0.02, ry: 0.62, c: '#00A0C0', r: 5 },
  { rx: 0.98, ry: 0.55, c: '#E0B000', r: 4 },
  { rx: 0.12, ry: 0.88, c: '#60C000', r: 4 },
  { rx: 0.88, ry: 0.85, c: '#6000C0', r: 4 },
  { rx: 0.48, ry: 0.05, c: '#E04000', r: 3 },
  { rx: 0.52, ry: 0.95, c: '#0060C0', r: 3 },
  { rx: 0.25, ry: 0.08, c: '#E04060', r: 3 },
  { rx: 0.75, ry: 0.92, c: '#40C060', r: 3 },
];

export default function TrustedIntegrations() {
  const areaRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 520 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const measure = () => {
      if (areaRef.current) {
        setSize({ w: areaRef.current.offsetWidth, h: 520 });
        setReady(true);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { w: W, h: H } = size;
  const pad = W * 0.12;
  const usable = W - pad * 2;
  const y1 = H * 0.26, y2 = H * 0.74;
  const cx = W / 2, cy = H / 2;

  const positions: Point[] = [
    ...Array.from({ length: 7 }, (_, i) => ({ x: pad + (usable / 6) * i, y: y1 })),
    ...Array.from({ length: 7 }, (_, i) => ({ x: pad + (usable / 6) * i, y: y2 })),
  ];

  const allColors = TECH.map(t => t.color);

  return (
    <section
      style={{
        background: '#F0EBE3',
        padding: '48px 0 24px',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            border: '1px solid #C9B89A',
            borderRadius: 999,
            padding: '5px 18px',
            fontSize: 10,
            letterSpacing: '0.2em',
            color: '#9A8670',
            fontWeight: 700,
            background: 'rgba(255,255,255,0.45)',
            marginBottom: 14,
            textTransform: 'uppercase' as const,
          }}
        >
          Trusted Integrations
        </div>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 800,
            color: '#1A1410',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            fontFamily: 'Georgia, serif',
          }}
        >
          The{' '}
          <em
            style={{
              fontStyle: 'italic',
              position: 'relative',
              display: 'inline-block',
            }}
          >
            Technology
            <span
              style={{
                position: 'absolute',
                bottom: -3,
                left: 0,
                right: 0,
                height: 3,
                background: '#C8922A',
                borderRadius: 2,
                display: 'block',
              }}
            />
          </em>{' '}
          We Power.
        </h2>
        <p style={{ marginTop: 12, fontSize: 15, color: '#7A6E60', lineHeight: 1.65 }}>
          We work with the best platforms and tools to build scalable,
          <br />
          secure and future-ready digital products.
        </p>
      </div>

      {/* Canvas */}
      <div ref={areaRef} style={{ position: 'relative', width: '100%', height: H }}>
        {ready && (
          <>
            {/* SVG Lines + Animated Dots */}
            <svg
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none', zIndex: 1 }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="ti-glow" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="2.5" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <style>{`
                  @keyframes ti-dash { to { stroke-dashoffset: -36; } }
                  @keyframes ti-pulse {
                    0%, 100% { opacity: 0.5; r: 70; }
                    50%       { opacity: 0.9; r: 74; }
                  }
                `}</style>
              </defs>

              {/* 4-layer concentric rings around center Z logo */}
              {[
                { r: 160, stroke: 'rgba(160,150,200,0.18)', sw: 1.2, dash: 'none' },
                { r: 130, stroke: 'rgba(160,150,200,0.25)', sw: 1.4, dash: 'none' },
                { r: 100, stroke: 'rgba(160,150,200,0.35)', sw: 1.6, dash: 'none' },
                { r:  70, stroke: 'rgba(160,150,200,0.50)', sw: 2,   dash: 'none' },
              ].map(({ r, stroke, sw, dash }, i) => (
                <circle
                  key={`ring-${i}`}
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke={stroke}
                  strokeWidth={sw}
                  strokeDasharray={dash}
                />
              ))}

              {/* Scatter decorative dots */}
              {/* {SCATTER_DOTS.map((d, i) => (
                <circle key={i} cx={d.rx * W} cy={d.ry * H} r={d.r} fill={d.c} opacity={0.65} />
              ))} */}

              {/* Chevron decorations */}
              {/* {[
                { x: pad + usable * 0.26, y: y1 - 22 },
                { x: pad + usable * 0.55, y: y1 - 22 },
                { x: pad + usable * 0.26, y: y2 + 16 },
              ].map((ch, i) => (
                <text key={i} x={ch.x} y={ch.y} fontSize={10} fill="#bbb" fontFamily="monospace" letterSpacing={2}>
                  {'>>>>'}
                </text>
              ))} */}

              {/* Connection lines */}
              {CONNECTIONS.map(([a, b], i) => {
                const color = allColors[i % allColors.length];
                const d = buildPath(positions[a], positions[b]);
                const pid = `ti-p${i}`;
                const dur = (6 + (i % 7) * 0.8).toFixed(1);
                const del = ((i * 0.7) % 5).toFixed(1);
                const dur2 = (parseFloat(dur) * 1.6).toFixed(1);
                const del2 = (parseFloat(del) + parseFloat(dur) * 0.6).toFixed(1);
                const dashDur = (parseFloat(dur) * 1.2).toFixed(1);
                return (
                  <g key={i}>
                    <path
                      id={pid}
                      d={d}
                      fill="none"
                      stroke={color}
                      strokeWidth={1.3}
                      strokeDasharray="7 11"
                      opacity={0.38}
                      style={{ animation: `ti-dash ${dashDur}s ${del}s linear infinite` }}
                    />
                    {/* Forward dot */}
                    <circle r={5} fill={color} filter="url(#ti-glow)" opacity={0.92}>
                      <animateMotion dur={`${dur}s`} begin={`${del}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1">
                        <mpath href={`#${pid}`} />
                      </animateMotion>
                    </circle>
                    <circle r={2.2} fill="#fff" opacity={0.9}>
                      <animateMotion dur={`${dur}s`} begin={`${del}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1">
                        <mpath href={`#${pid}`} />
                      </animateMotion>
                    </circle>
                    {/* Reverse dot */}
                    <circle r={3.5} fill={color} filter="url(#ti-glow)" opacity={0.55}>
                      <animateMotion
                        dur={`${dur2}s`}
                        begin={`${del2}s`}
                        repeatCount="indefinite"
                        keyPoints="1;0"
                        keyTimes="0;1"
                        calcMode="spline"
                        keySplines="0.4 0 0.6 1"
                      >
                        <mpath href={`#${pid}`} />
                      </animateMotion>
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* Tech Cards */}
            {TECH.map((tech, i) => {
              const p = positions[i];
              const tagStyle = TAG_STYLES[tech.tag] ?? { bg: '#eee', color: '#333' };
              const delay = (0.3 + i * 0.12).toFixed(2);
              return (
                <div
                  key={tech.name}
                  style={{
                    position: 'absolute',
                    left: p.x,
                    top: p.y,
                    transform: 'translate(-50%, -50%)',
                    width: 108,
                    height: 108,
                    background: 'rgba(255,255,255,0.9)',
                    border: '1px solid rgba(255,255,255,0.97)',
                    borderRadius: 22,
                    boxShadow: '0 2px 18px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 5,
                    backdropFilter: 'blur(12px)',
                    zIndex: 2,
                    cursor: 'default',
                    animation: `ti-cardIn 0.8s ${delay}s cubic-bezier(.22,1,.36,1) both`,
                  }}
                >
                  <img
                    src={tech.img}
                    alt={tech.name}
                    style={{ width: 38, height: 38, objectFit: 'contain' }}
                  />
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: '#1E1A16', textAlign: 'center', letterSpacing: '-0.01em' }}>
                    {tech.name}
                  </span>
                  <span
                    style={{
                      fontSize: 8.5,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      padding: '2px 8px',
                      borderRadius: 999,
                      textTransform: 'uppercase',
                      background: tagStyle.bg,
                      color: tagStyle.color,
                    }}
                  >
                    {tech.tag}
                  </span>
                </div>
              );
            })}

            {/* Center brand hub */}
            <div
              style={{
                position: 'absolute',
                left: cx,
                top: cy,
                transform: 'translate(-50%, -50%)',
                width: 82,
                height: 82,
                background: '#FFFFFF',
                borderRadius: 22,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
                animation: 'ti-popIn 0.9s 2.4s cubic-bezier(.22,1,.36,1) both',
              }}
            >
              <Image
                src="/images/zonet/logo-icon.png"
                alt="Zonet Tech"
                width={42}
                height={42}
                className='object-contain'

              />
            </div>

            {/* Keyframes injected once */}
            <style>{`
              @keyframes ti-cardIn {
                from { opacity: 0; transform: translate(-50%, -50%) scale(0.65); }
                to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
              }
              @keyframes ti-popIn {
                from { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
                to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
              }
            `}</style>
          </>
        )}
      </div>
    </section>
  );
}