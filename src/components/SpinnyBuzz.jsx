import React from 'react';
import { ChevronRight } from 'lucide-react';

const BUZZ_ARTICLES = [
  {
    id: 1,
    source: 'Economic Times',
    title: '76% first time car buyers with Spinny',
    image: '/assets/buzz/buzz_1.jpg',
  },
  {
    id: 2,
    source: 'Yourstory',
    title: 'Earning trust with no shortcuts, no price negotiations',
    image: '/assets/buzz/buzz_2.jpg',
  },
  {
    id: 3,
    source: 'Financial Express',
    title: 'Full-stack concept explained with benefits',
    image: '/assets/buzz/buzz_3.jpg',
  },
  {
    id: 4,
    source: 'AFAQS',
    title: 'Sachin and Sara Tendulkar share bond with their dogs in new Spinny ad',
    image: '/assets/buzz/buzz_4.jpg',
  },
];

export default function SpinnyBuzz() {
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
            Spinny Buzz
          </h2>
          <div className="spinny-section-header-line reverse" />
        </div>

        {/* 4 Media Cards Grid */}
        <div style={{ position: 'relative' }}>
          <div
            className="mobile-slide-carousel"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
          >
            {BUZZ_ARTICLES.map(article => (
              <div
                key={article.id}
                className="mobile-slide-card"
                style={{
                  height: '320px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)',
                  cursor: 'pointer',
                  transition: 'all 0.22s ease',
                  backgroundColor: '#1b0231',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 14px 30px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.12)';
                }}
              >
                {/* Background Photo */}
                <img
                  src={article.image}
                  alt={article.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                {/* Dark gradient overlay for text readability */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.88) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px 20px',
                  }}
                >
                  {/* Source Tag with > */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.85)',
                      marginBottom: '8px',
                    }}
                  >
                    <span>{article.source}</span>
                    <ChevronRight size={14} />
                  </div>

                  {/* Headline */}
                  <h3
                    style={{
                      fontSize: '16.5px',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.35,
                      letterSpacing: '-0.2px',
                    }}
                  >
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Floating Chevron Button */}
          <button
            aria-label="Next articles"
            style={{
              position: 'absolute',
              top: '50%',
              right: '-18px',
              transform: 'translateY(-50%)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid #e8e8e8',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 20,
            }}
          >
            <ChevronRight size={18} color="#333" strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </section>
  );
}
