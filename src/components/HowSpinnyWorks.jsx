import React, { useState } from 'react';
import { Play, ChevronRight, Check } from 'lucide-react';

const SELL_STEPS = [
  {
    step: 1,
    title: 'Instant online estimate',
    desc: 'Fill in a few details about your car for an instant quote',
    ctaText: 'Get quote',
    svg: '/assets/how_it_works/step1_choose.svg',
  },
  {
    step: 2,
    title: 'Free evaluation',
    desc: 'Schedule the evaluation at your convenience, from the comfort of your home or work',
    ctaText: 'Schedule evaluation',
    svg: '/assets/how_it_works/step2_testdrive.svg',
  },
  {
    step: 3,
    title: 'Instant payment',
    desc: 'Get paid immediately directly into your bank account before handing over the keys',
    ctaText: 'Sell car',
    svg: '/assets/how_it_works/step3_delivery.svg',
  },
];

export default function HowSpinnyWorks() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section
      style={{
        backgroundColor: '#260442',
        padding: '52px 20px 60px',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1240px', marginInline: 'auto' }}>
        {/* Title */}
        <h2
          style={{
            fontSize: '26px',
            fontWeight: 800,
            textAlign: 'center',
            color: '#ffffff',
            letterSpacing: '-0.3px',
            marginBottom: '36px',
          }}
        >
          Selling your car made simple
        </h2>

        {/* 3 Step Cards - One-by-one slide on mobile, 3-col on desktop */}
        <div
          className="mobile-slide-carousel"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '36px',
          }}
        >
          {SELL_STEPS.map((s, idx) => (
            <div
              key={idx}
              className="mobile-slide-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '24px 20px 22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#2e054e',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                position: 'relative',
                minHeight: '340px',
              }}
            >
              <div>
                {/* Step Circle Badge */}
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#561381',
                    color: '#ffffff',
                    fontSize: '17px',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  {s.step}
                </div>

                {/* Illustration Circle */}
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    backgroundColor: '#f5effb',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={s.svg}
                    alt={s.title}
                    style={{ width: '85%', height: '85%', objectFit: 'contain' }}
                  />
                </div>

                {/* Step Title & Description */}
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#2e054e',
                    textAlign: 'center',
                    marginBottom: '10px',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: '13.5px',
                    color: '#555555',
                    textAlign: 'center',
                    lineHeight: 1.5,
                  }}
                >
                  {s.desc}
                </p>
              </div>

              {/* Bottom CTA Link */}
              <div
                onClick={() => alert(`Spinny Selling: ${s.ctaText}`)}
                style={{
                  marginTop: '20px',
                  paddingTop: '14px',
                  borderTop: '1px solid #f0f0f4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  color: '#561381',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <span>{s.ctaText}</span>
                <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons: Watch the film & Learn more */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '36px',
          }}
        >
          <button
            onClick={() => setIsVideoModalOpen(true)}
            style={{
              backgroundColor: '#ffffff',
              color: '#2e054e',
              fontSize: '14.5px',
              fontWeight: 700,
              padding: '12px 28px',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
            }}
          >
            <span>Watch the film</span>
            <Play size={12} fill="#2e054e" />
          </button>

          <a
            href="#sell"
            style={{
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              opacity: 0.9,
            }}
          >
            <span>Learn More</span>
            <ChevronRight size={14} />
          </a>
        </div>

        {/* SellRight by Spinny Bottom Trust Line */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.14)',
            paddingTop: '24px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '10px',
            }}
          >
            <span style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '0.4px' }}>
              Sell<span style={{ color: '#00d9a5' }}>Right</span>
            </span>
            <span
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: '#00d9a5',
                color: '#260442',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Check size={12} strokeWidth={3} />
            </span>
            <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>
              by Spinny
            </span>
          </div>

          <p
            style={{
              fontSize: '14px',
              fontStyle: 'italic',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '12px',
            }}
          >
            The best experience for your car. Simple selling experience.
          </p>

          <div
            style={{
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.65)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px 16px',
            }}
          >
            <span>Best Price Assurance</span>
            <span>•</span>
            <span>Instant Payment</span>
            <span>•</span>
            <span>Free RC Transfer</span>
            <span>•</span>
            <span>Free evaluation</span>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          onClick={() => setIsVideoModalOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 100000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '680px',
              backgroundColor: '#000000',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                title="Selling with Spinny"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <button
              onClick={() => setIsVideoModalOpen(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                color: '#fff',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
