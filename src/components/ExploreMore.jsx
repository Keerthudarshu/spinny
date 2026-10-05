import React from 'react';
import { IndianRupee, ArrowUpRight, Radio, Ticket } from 'lucide-react';

const SERVICES = [
  {
    id: 'loan',
    title: 'Loan',
    subtitle: 'Get your car financed today',
    cta: 'Check eligibility',
    badgeIcon: '₹',
    renderGraphic: () => (
      <div style={{ position: 'relative', width: '130px', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', width: '124px', height: '124px', borderRadius: '50%', border: '1.5px solid rgba(168, 85, 247, 0.28)' }} />
        <div style={{ position: 'absolute', width: '92px', height: '92px', borderRadius: '50%', border: '1.5px solid rgba(168, 85, 247, 0.45)' }} />
        <div style={{ position: 'absolute', width: '60px', height: '60px', borderRadius: '50%', border: '1.5px solid rgba(168, 85, 247, 0.65)' }} />
        <span style={{ fontSize: '38px', fontWeight: 800, color: 'rgba(216, 180, 254, 0.85)' }}>₹</span>
      </div>
    ),
  },
  {
    id: 'buyback',
    title: 'Buyback',
    subtitle: 'Commit less, drive more',
    cta: 'Explore buyback',
    badgeIcon: '⮥',
    renderGraphic: () => (
      <div style={{ position: 'relative', width: '130px', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Layered upward/right arrows */}
        <svg width="110" height="110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 80V35L48 15L75 42L60 42L60 80H25Z" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="2.5" />
          <path d="M35 75V42L48 28L65 46L54 46L54 75H35Z" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="2.5" />
          <path d="M43 70V48L48 42L58 52L50 52L50 70H43Z" fill="rgba(216, 180, 254, 0.85)" />
        </svg>
      </div>
    ),
  },
  {
    id: 'fastag',
    title: 'FASTag',
    subtitle: 'Tap > Recharge > Go',
    cta: 'Recharge FASTag',
    badgeIcon: '⊡',
    renderGraphic: () => (
      <div style={{ position: 'relative', width: '130px', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Rotated diamond with toll gate & car */}
        <div
          style={{
            position: 'absolute',
            width: '88px',
            height: '88px',
            borderRadius: '18px',
            border: '2px solid rgba(168, 85, 247, 0.45)',
            transform: 'rotate(45deg)',
          }}
        />
        <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 28V14M8 14L28 6M8 14H12" stroke="rgba(216, 180, 254, 0.85)" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M18 28V24H28V28M20 24L22 18H26L28 24" stroke="rgba(216, 180, 254, 0.85)" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="21" cy="28" r="2" fill="rgba(216, 180, 254, 0.85)" />
          <circle cx="27" cy="28" r="2" fill="rgba(216, 180, 254, 0.85)" />
        </svg>
      </div>
    ),
  },
  {
    id: 'challan',
    title: 'Challan',
    subtitle: 'Clear fines, Drive easy',
    cta: 'Check Challan',
    badgeIcon: '🗎',
    renderGraphic: () => (
      <div style={{ position: 'relative', width: '130px', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Ticket shape outline */}
        <svg width="100" height="74" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 12C8 9.8 9.8 8 12 8H68C70.2 8 72 9.8 72 12V24C68.5 24 66 26.5 66 30C66 33.5 68.5 36 72 36V48C72 50.2 70.2 52 68 52H12C9.8 52 8 50.2 8 48V36C11.5 36 14 33.5 14 30C14 26.5 11.5 24 8 24V12Z"
            stroke="rgba(168, 85, 247, 0.45)"
            strokeWidth="2.5"
            strokeDasharray="4 2"
          />
          <circle cx="40" cy="30" r="8" stroke="rgba(216, 180, 254, 0.85)" strokeWidth="2" />
        </svg>
      </div>
    ),
  },
];

export default function ExploreMore({ onServiceClick }) {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '56px 24px 64px',
        borderBottom: '1px solid #ededf2',
      }}
    >
      <div style={{ maxWidth: '1240px', marginInline: 'auto' }}>
        {/* Title with lines */}
        <div className="spinny-section-header">
          <div className="spinny-section-header-line" />
          <h2 className="spinny-section-title">
            Explore More
          </h2>
          <div className="spinny-section-header-line reverse" />
        </div>

        {/* 4 Deep Purple Service Cards */}
        <div
          className="mobile-slide-carousel"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
        >
          {SERVICES.map(srv => (
            <div
              key={srv.id}
              className="mobile-slide-card"
              style={{
                backgroundColor: '#240638',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(36, 6, 56, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '24px 20px 0',
                transition: 'all 0.22s ease',
                position: 'relative',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(36, 6, 56, 0.35)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(36, 6, 56, 0.25)';
              }}
            >
              {/* Header Icon & Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '6px',
                    backgroundColor: '#ed264f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '13px',
                    fontWeight: 800,
                    transform: 'rotate(45deg)',
                  }}
                >
                  <span style={{ transform: 'rotate(-45deg)', display: 'block' }}>{srv.badgeIcon}</span>
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.3px' }}>
                  {srv.title}
                </h3>
              </div>

              {/* Subtitle */}
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '18px' }}>
                {srv.subtitle}
              </p>

              {/* Center Neon Graphic */}
              <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {srv.renderGraphic()}
              </div>

              {/* Bottom Pink CTA Button */}
              <button
                onClick={() => onServiceClick && onServiceClick(srv)}
                style={{
                  width: 'calc(100% + 40px)',
                  marginInline: '-20px',
                  backgroundColor: '#ed264f',
                  color: '#ffffff',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  padding: '13px 16px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.15s ease',
                  marginTop: '16px',
                }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = '#d81a42')}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = '#ed264f')}
              >
                {srv.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
