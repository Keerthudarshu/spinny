import React from 'react';
import { ChevronRight } from 'lucide-react';

const CITIES = [
  {
    name: 'Delhi NCR',
    hubs: '11 hubs',
    cars: '1700+ cars',
    bg: '#ffd23f',
    textColor: '#1a1a1a',
    metaColor: '#333333',
    photo: '/assets/cities/delhi_qutub.jpg',
  },
  {
    name: 'Bangalore',
    hubs: '8 hubs',
    cars: '910+ cars',
    bg: '#7d8df5',
    textColor: '#ffffff',
    metaColor: 'rgba(255, 255, 255, 0.9)',
    photo: '/assets/cities/bangalore_palace.jpg',
  },
  {
    name: 'Hyderabad',
    hubs: '5 hubs',
    cars: '790+ cars',
    bg: '#260b3c',
    textColor: '#ffffff',
    metaColor: 'rgba(255, 255, 255, 0.85)',
    photo: '/assets/cities/hyderabad_charminar.jpg',
  },
  {
    name: 'Pune',
    hubs: '4 hubs',
    cars: '720+ cars',
    bg: '#46a37f',
    textColor: '#ffffff',
    metaColor: 'rgba(255, 255, 255, 0.9)',
    photo: '/assets/cities/pune_landmark.jpg',
  },
];

export default function CarsAcrossIndia({ onSelectCity }) {
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
            Cars across India
          </h2>
          <div className="spinny-section-header-line reverse" />
        </div>

        {/* City Cards Grid with Rotated Diamonds */}
        <div style={{ position: 'relative', marginBottom: '40px' }}>
          <div
            className="spinny-responsive-city-grid mobile-slide-carousel"
          >
            {CITIES.map((city, idx) => (
              <div
                key={idx}
                className="mobile-slide-card"
                onClick={() => onSelectCity && onSelectCity(city.name)}
                style={{
                  backgroundColor: city.bg,
                  borderRadius: '20px',
                  padding: '24px 20px',
                  height: '320px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.22s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.16)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
                }}
              >
                {/* City Title */}
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: city.textColor,
                    letterSpacing: '-0.2px',
                    marginTop: '4px',
                  }}
                >
                  {city.name}
                </h3>

                {/* Rotated 45-degree diamond container holding the photo */}
                <div
                  style={{
                    width: '130px',
                    height: '130px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '110px',
                      height: '110px',
                      borderRadius: '22px',
                      transform: 'rotate(45deg)',
                      overflow: 'hidden',
                      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.22)',
                      border: '2px solid rgba(255, 255, 255, 0.4)',
                      backgroundColor: '#e0e0e0',
                    }}
                  >
                    <img
                      src={city.photo}
                      alt={city.name}
                      style={{
                        width: '160%',
                        height: '160%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: '-30%',
                        left: '-30%',
                        transform: 'rotate(-45deg)',
                      }}
                      onError={e => {
                        e.currentTarget.style.opacity = '0.5';
                      }}
                    />
                  </div>
                </div>

                {/* Bottom Hubs & Cars Info */}
                <div
                  style={{
                    fontSize: '14px',
                    color: city.metaColor,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    letterSpacing: '0.1px',
                    marginBottom: '4px',
                  }}
                >
                  <strong style={{ color: city.textColor, fontWeight: 700 }}>
                    {city.hubs}
                  </strong>
                  <span>•</span>
                  <span>{city.cars}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Floating Chevron */}
          <button
            aria-label="Next cities"
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

        {/* View all locations button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={{
              backgroundColor: '#ffffff',
              color: '#440274',
              border: '1.5px solid #440274',
              fontSize: '14.5px',
              fontWeight: 600,
              padding: '11px 36px',
              borderRadius: '9999px',
              cursor: 'pointer',
              transition: 'all 0.18s ease',
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = '#440274';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#440274';
            }}
          >
            View all locations
          </button>
        </div>
      </div>
    </section>
  );
}
