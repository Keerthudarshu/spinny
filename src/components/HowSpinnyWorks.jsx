import React, { useState } from 'react';
import { Play } from 'lucide-react';

const STEPS = [
  {
    step: 1,
    title: 'Choose from the best pre-owned cars',
    subtitle: '20,000+ fully inspected cars online',
    svg: '/assets/how_it_works/step1_choose.svg',
  },
  {
    step: 2,
    title: 'Take a test drive at your home or a Spinny Hub',
    subtitle: 'Sanitized cars for every test drive',
    svg: '/assets/how_it_works/step2_testdrive.svg',
  },
  {
    step: 3,
    title: 'Online Payment. Doorstep Delivery.',
    subtitle: 'And 5-day money back guarantee',
    svg: '/assets/how_it_works/step3_delivery.svg',
  },
];

export default function HowSpinnyWorks() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section
      style={{
        backgroundColor: '#fbfbfd',
        padding: '56px 24px 64px',
        borderBottom: '1px solid #ededf2',
      }}
    >
      <div style={{ maxWidth: '1240px', marginInline: 'auto' }}>
        {/* Title with decorative horizontal divider line */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '8px' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'transparent' }} />
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 800,
              color: '#2e054e',
              letterSpacing: '-0.3px',
              whiteSpace: 'nowrap',
            }}
          >
            How Spinny® Works
          </h2>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#e2d9ec' }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            textAlign: 'center',
            fontSize: '15px',
            color: '#6c6577',
            marginBottom: '48px',
          }}
        >
          You won't just love our cars, you'll love the way you buy them.
        </p>

        {/* 3 Step Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '36px',
            marginBottom: '44px',
          }}
        >
          {STEPS.map((s, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Illustration */}
              <div
                style={{
                  height: '190px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <img
                  src={s.svg}
                  alt={s.title}
                  style={{
                    maxHeight: '180px',
                    maxWidth: '240px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    transition: 'transform 0.25s ease',
                  }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}
                />
              </div>

              {/* Title & Subtitle */}
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#2e054e',
                  marginBottom: '8px',
                  lineHeight: 1.35,
                  maxWidth: '300px',
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: '13.5px',
                  color: '#6e6a78',
                  lineHeight: 1.4,
                  maxWidth: '280px',
                }}
              >
                {s.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Actions: Watch how it works & Learn more */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <button
            onClick={() => setIsVideoModalOpen(true)}
            style={{
              backgroundColor: '#440274',
              color: '#ffffff',
              fontSize: '14.5px',
              fontWeight: 700,
              padding: '12px 30px',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(68, 2, 116, 0.25)',
              transition: 'all 0.18s ease',
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = '#380160';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = '#440274';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Watch how it works</span>
            <div
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Play size={10} fill="#440274" color="#440274" style={{ marginLeft: '1px' }} />
            </div>
          </button>

          <a
            href="#learn"
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#440274',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.15s ease',
            }}
            onMouseOver={e => (e.currentTarget.style.opacity = '0.75')}
            onMouseOut={e => (e.currentTarget.style.opacity = '1')}
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '820px',
              backgroundColor: '#000',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                title="How Spinny Works Video"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
