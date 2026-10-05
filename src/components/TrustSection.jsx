import React from 'react';
import { ShieldCheck, RotateCcw, Award, FileCheck } from 'lucide-react';

const PERKS = [
  {
    icon: <ShieldCheck size={28} color="var(--ds-primary-pink)" />,
    title: '200-Point Inspection',
    desc: 'Thorough inspection by experts covering engine, transmission, body and interiors.',
  },
  {
    icon: <Award size={28} color="var(--ds-primary-pink)" />,
    title: '1-Year Warranty',
    desc: 'Comprehensive 1-year warranty covering major components for total peace of mind.',
  },
  {
    icon: <RotateCcw size={28} color="var(--ds-primary-pink)" />,
    title: '5-Day Money Back',
    desc: '100% refund with zero questions asked if you change your mind within 5 days.',
  },
  {
    icon: <FileCheck size={28} color="var(--ds-primary-pink)" />,
    title: 'Fixed Price Assurance',
    desc: 'Transparent, fair pricing with zero hidden fees and free doorstep RC transfer.',
  },
];

export default function TrustSection() {
  return (
    <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '36px 24px' }}>
      <div
        style={{
          maxWidth: '1360px',
          marginInline: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '28px',
        }}
      >
        {PERKS.map((perk, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '16px',
                backgroundColor: 'var(--ds-primary-pink-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {perk.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>
                {perk.title}
              </h3>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.45 }}>
                {perk.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
