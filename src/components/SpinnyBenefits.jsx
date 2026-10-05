import React, { useState } from 'react';
import { Play, ChevronRight, ShieldCheck, Award, RotateCcw, BadgePercent } from 'lucide-react';

const BUY_BENEFITS = [
  {
    title: '200-Points Inspection',
    desc: 'Every car is carefully handpicked after a thorough quality inspection.',
    image: '/assets/benefits/inspection.jpg',
    badge: '/assets/benefits/inspection_badge.svg',
    fallbackBadgeIcon: <ShieldCheck size={26} color="#ffffff" strokeWidth={2.2} />,
  },
  {
    title: 'Warranty included',
    desc: 'Our way of being there for you through your car ownership journey.',
    image: '/assets/benefits/warranty.jpg',
    badge: '/assets/benefits/warranty_badge.svg',
    fallbackBadgeIcon: <Award size={26} color="#ffffff" strokeWidth={2.2} />,
  },
  {
    title: '5-Day Money Back',
    desc: 'All our cars come with a no-questions-asked 5-day money back guarantee.',
    image: '/assets/benefits/money_back.jpg',
    badge: '/assets/benefits/money_back_badge.svg',
    fallbackBadgeIcon: <RotateCcw size={26} color="#ffffff" strokeWidth={2.2} />,
  },
  {
    title: 'Fixed Price Assurance',
    desc: 'No more endless negotiations or haggling. With Spinny, you get the best deal upfront and right away.',
    image: '/assets/benefits/fixed_price.jpg',
    badge: '/assets/benefits/fixed_price_badge.svg',
    fallbackBadgeIcon: <BadgePercent size={26} color="#ffffff" strokeWidth={2.2} />,
  },
];

const SELL_BENEFITS = [
  {
    title: 'Instant Online Quote',
    desc: 'Get an accurate, market-tested price estimate for your car in just 10 seconds.',
    image: '/assets/benefits/inspection.jpg',
    badge: '/assets/benefits/fixed_price_badge.svg',
    fallbackBadgeIcon: <BadgePercent size={26} color="#ffffff" strokeWidth={2.2} />,
  },
  {
    title: 'Free Doorstep Evaluation',
    desc: 'Our certified evaluation expert inspects your car right at your home or office.',
    image: '/assets/benefits/warranty.jpg',
    badge: '/assets/benefits/inspection_badge.svg',
    fallbackBadgeIcon: <ShieldCheck size={26} color="#ffffff" strokeWidth={2.2} />,
  },
  {
    title: 'Same Day Payment',
    desc: 'Get paid immediately via secure bank transfer before handing over the keys.',
    image: '/assets/benefits/money_back.jpg',
    badge: '/assets/benefits/money_back_badge.svg',
    fallbackBadgeIcon: <Award size={26} color="#ffffff" strokeWidth={2.2} />,
  },
  {
    title: 'Free RC Transfer',
    desc: 'We manage complete RTO paperwork and RC transfer with zero hassle for you.',
    image: '/assets/benefits/fixed_price.jpg',
    badge: '/assets/benefits/warranty_badge.svg',
    fallbackBadgeIcon: <RotateCcw size={26} color="#ffffff" strokeWidth={2.2} />,
  },
];

export default function SpinnyBenefits({ onBrowseCars }) {
  const [activeTab, setActiveTab] = useState('buy'); // 'buy' | 'sell'
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const benefits = activeTab === 'buy' ? BUY_BENEFITS : SELL_BENEFITS;

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '52px 24px 60px',
        borderBottom: '1px solid #f0f0f4',
      }}
    >
      <div style={{ maxWidth: '1240px', marginInline: 'auto' }}>
        {/* Toggle Pills on top: Buy car / Sell car */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
          <div
            style={{
              display: 'inline-flex',
              backgroundColor: '#f5effa',
              borderRadius: '9999px',
              padding: '4px',
              gap: '4px',
            }}
          >
            <button
              onClick={() => setActiveTab('buy')}
              style={{
                padding: '9px 34px',
                borderRadius: '9999px',
                backgroundColor: activeTab === 'buy' ? '#440274' : 'transparent',
                color: activeTab === 'buy' ? '#ffffff' : '#440274',
                fontSize: '14.5px',
                fontWeight: 600,
                transition: 'all 0.2s ease',
              }}
            >
              Buy car
            </button>
            <button
              onClick={() => setActiveTab('sell')}
              style={{
                padding: '9px 34px',
                borderRadius: '9999px',
                backgroundColor: activeTab === 'sell' ? '#440274' : 'transparent',
                color: activeTab === 'sell' ? '#ffffff' : '#440274',
                fontSize: '14.5px',
                fontWeight: 600,
                transition: 'all 0.2s ease',
              }}
            >
              Sell car
            </button>
          </div>
        </div>

        {/* Section Heading */}
        <h2
          style={{
            textAlign: 'center',
            fontSize: '32px',
            fontWeight: 800,
            color: '#2e054e',
            letterSpacing: '-0.4px',
            marginBottom: '44px',
          }}
        >
          Spinny benefits
        </h2>

        {/* 4 Benefit Cards Grid */}
        <div
          className="mobile-slide-carousel"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="animate-fade-in mobile-slide-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Photo with rounded corners and icon badge overlay */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1.08 / 1',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
                  backgroundColor: '#f3e8f7',
                }}
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Center SVG badge overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(0, 0, 0, 0.45)',
                    backdropFilter: 'blur(6px)',
                    border: '1.5px solid rgba(255, 255, 255, 0.65)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <img
                    src={benefit.badge}
                    alt=""
                    style={{ width: '32px', height: '32px' }}
                    onError={e => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Title & Description */}
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#2e054e',
                  marginBottom: '10px',
                  letterSpacing: '-0.2px',
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontSize: '13.5px',
                  color: '#555555',
                  lineHeight: 1.5,
                  maxWidth: '260px',
                  marginInline: 'auto',
                }}
              >
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Actions Row: Watch the film, Browse cars, Learn more */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '8px',
          }}
        >
          {/* Watch the film */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#440274',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'opacity 0.15s ease',
            }}
            onMouseOver={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseOut={e => (e.currentTarget.style.opacity = '1')}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#440274',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              <Play size={14} fill="#ffffff" style={{ marginLeft: '2px' }} />
            </div>
            <span>Watch the film</span>
          </button>

          {/* Browse cars (or Sell car) CTA */}
          <button
            onClick={onBrowseCars}
            style={{
              backgroundColor: '#ed264f',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: 700,
              padding: '13px 48px',
              borderRadius: '9999px',
              boxShadow: '0 6px 20px rgba(237, 38, 79, 0.35)',
              cursor: 'pointer',
              transition: 'all 0.18s ease',
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = '#d81a42';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = '#ed264f';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {activeTab === 'buy' ? 'Browse cars' : 'Sell your car'}
          </button>

          {/* Learn more > */}
          <a
            href="#learn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              color: '#440274',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'opacity 0.15s ease',
            }}
            onMouseOver={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseOut={e => (e.currentTarget.style.opacity = '1')}
          >
            <span>Learn more</span>
            <ChevronRight size={16} strokeWidth={2.4} />
          </a>
        </div>
      </div>

      {/* Video film preview modal */}
      {isVideoModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0,0,0,0.8)',
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
              maxWidth: '800px',
              backgroundColor: '#000',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                title="Spinny Film"
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
