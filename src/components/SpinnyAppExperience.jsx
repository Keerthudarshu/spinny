import React from 'react';
import { ArrowUp, Phone, Apple, Smartphone } from 'lucide-react';

export default function SpinnyAppExperience() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#ffffff', paddingTop: '16px' }}>
      {/* 1. App Card (Matching Reference Image 5) */}
      <div style={{ paddingInline: '16px', maxWidth: '720px', marginInline: 'auto', marginBottom: '24px' }}>
        <div
          style={{
            backgroundColor: '#9aa9fc',
            borderRadius: '24px',
            padding: '24px 20px 28px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(154, 169, 252, 0.35)',
            color: '#ffffff',
          }}
        >
          {/* Top Row: Title + Floating "Top ↑" Button */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.2px', marginBottom: '4px' }}>
                Discover the full Spinny experience
              </h3>
              <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 500 }}>
                Faster, easier, better
              </p>
            </div>

            {/* Floating Top Pill Button */}
            <button
              onClick={scrollToTop}
              style={{
                backgroundColor: '#ffffff',
                color: '#555555',
                fontSize: '12px',
                fontWeight: 700,
                padding: '6px 14px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                whiteSpace: 'nowrap',
              }}
            >
              <span>Top</span>
              <ArrowUp size={13} strokeWidth={2.5} />
            </button>
          </div>

          {/* Illustration: Meditating Girl + Cat + Car Window (SVG Artwork) */}
          <div
            style={{
              height: '190px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              marginBlock: '12px',
            }}
          >
            <svg viewBox="0 0 340 180" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Window frame on the right */}
              <rect x="190" y="20" width="105" height="120" rx="4" fill="#ffffff" stroke="#4c1d95" strokeWidth="2.5" />
              <line x1="190" y1="80" x2="295" y2="80" stroke="#4c1d95" strokeWidth="2" />
              <line x1="242" y1="20" x2="242" y2="140" stroke="#4c1d95" strokeWidth="2" />

              {/* Gift Car outside the window */}
              <rect x="200" y="88" width="70" height="26" rx="6" fill="#e2e8f0" stroke="#4c1d95" strokeWidth="1.5" />
              {/* Car Wheels */}
              <circle cx="215" cy="114" r="6" fill="#4c1d95" />
              <circle cx="255" cy="114" r="6" fill="#4c1d95" />
              {/* Red Ribbon on Car */}
              <path d="M235 76 C230 68 220 72 225 80 C230 88 235 88 235 88 Z" fill="#ef4444" />
              <path d="M235 76 C240 68 250 72 245 80 C240 88 235 88 235 88 Z" fill="#ef4444" />
              <circle cx="235" cy="80" r="3.5" fill="#b91c1c" />

              {/* Cat silhouette on window ledge */}
              <path d="M220 140 C220 125 235 125 235 140 Z" fill="#3b0764" />
              <polygon points="222,126 226,120 228,127" fill="#3b0764" />
              <polygon points="228,127 232,120 234,126" fill="#3b0764" />
              <path d="M220 135 C210 135 212 155 220 155" stroke="#3b0764" strokeWidth="3" fill="none" strokeLinecap="round" />

              {/* Plant pot next to window */}
              <rect x="268" y="125" width="18" height="15" fill="#f87171" stroke="#4c1d95" strokeWidth="1.5" rx="1" />
              <path d="M277 125 Q285 105 288 112" stroke="#15803d" strokeWidth="2" fill="none" />
              <path d="M277 125 Q268 110 272 118" stroke="#15803d" strokeWidth="2" fill="none" />

              {/* Meditating Girl in foreground */}
              {/* Hair */}
              <path d="M75 75 Q60 90 75 115 Q85 125 95 120 Q105 125 115 120 Q130 115 115 80 Q105 50 85 55 Z" fill="#6d28d9" />
              {/* Head */}
              <circle cx="95" cy="75" r="14" fill="#fed7aa" />
              {/* Eyes closed serene */}
              <path d="M89 74 Q92 77 95 74" stroke="#4c1d95" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M96 74 Q99 77 102 74" stroke="#4c1d95" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              {/* Smile */}
              <path d="M93 81 Q96 84 99 81" stroke="#4c1d95" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              {/* Torso / Top */}
              <path d="M80 89 Q95 86 110 89 L115 120 L75 120 Z" fill="#ffffff" stroke="#4c1d95" strokeWidth="1.5" />
              {/* Pink patterns on top */}
              <rect x="85" y="94" width="6" height="6" stroke="#f43f5e" strokeWidth="1" fill="none" rx="1" />
              <rect x="100" y="98" width="6" height="6" stroke="#f43f5e" strokeWidth="1" fill="none" rx="1" />
              {/* Crossed legs / Yoga lotus */}
              <path d="M60 135 C60 122 80 120 95 120 C110 120 130 122 130 135 C130 148 60 148 60 135 Z" fill="#581c87" />
              {/* Yellow feet in lotus */}
              <ellipse cx="70" cy="132" rx="10" ry="7" fill="#fb923c" />
              <ellipse cx="120" cy="132" rx="10" ry="7" fill="#fb923c" />
              {/* Arms and Hands in mudra */}
              <path d="M80 95 L58 118 Q55 125 62 125" stroke="#fed7aa" strokeWidth="4.5" strokeLinecap="round" fill="none" />
              <path d="M110 95 L132 118 Q135 125 128 125" stroke="#fed7aa" strokeWidth="4.5" strokeLinecap="round" fill="none" />

              {/* Phone on floor */}
              <rect x="145" y="140" width="22" height="12" rx="2" fill="#ffffff" stroke="#4c1d95" strokeWidth="1.5" transform="rotate(-15 145 140)" />
            </svg>
          </div>

          {/* Button: Get the Spinny App */}
          <button
            onClick={() => alert('Download Spinny App: Available on Apple App Store & Google Play Store')}
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              color: '#2e054e',
              fontSize: '15px',
              fontWeight: 800,
              padding: '13px',
              borderRadius: '14px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
            }}
          >
            <Apple size={18} fill="#2e054e" />
            <span>Get the Spinny App</span>
          </button>
        </div>
      </div>

      {/* 2. Official Spinny Helpline Bottom Strip (Deep Purple #260442) */}
      <div
        style={{
          backgroundColor: '#260442',
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Spinny Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              backgroundColor: '#ed264f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '17px',
            }}
          >
            S
          </div>
          <span style={{ color: '#ffffff', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.3px' }}>
            Spinny
          </span>
        </div>

        {/* Call Helpline Pill Button */}
        <a
          href="tel:7277277275"
          style={{
            backgroundColor: '#ed264f',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: 700,
            padding: '9px 18px',
            borderRadius: '9999px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(237, 38, 79, 0.35)',
          }}
        >
          <Phone size={14} fill="#ffffff" />
          <span>727-727-7275</span>
        </a>
      </div>
    </div>
  );
}
