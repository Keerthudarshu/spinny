import React, { useState } from 'react';
import { Sparkles, X, ChevronRight, Check } from 'lucide-react';

const SAMPLE_CARS = [
  { name: 'Swift', bg: '#e8f5e9', img: '/assets/cars/sp_car_6.png' },
  { name: 'Duster', bg: '#f3e8f7', img: '/assets/cars/sp_car_0.png' },
  { name: 'Thar', bg: '#f1f5f9', img: '/assets/cars/sp_car_2.png' },
  { name: 'Polo', bg: '#ede9fe', img: '/assets/cars/sp_car_3.png' },
  { name: 'City', bg: '#fce7f3', img: '/assets/cars/sp_car_1.png' },
  { name: 'Compass', bg: '#e0f2fe', img: '/assets/cars/sp_car_4.png' },
  { name: 'Seltos', bg: '#fee2e2', img: '/assets/cars/sp_car_5.png' },
  { name: 'Baleno', bg: '#e8f5e9', img: '/assets/cars/sp_car_0.png' },
];

export default function FindMyCarQuestionnaire({ onFindCars }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [budget, setBudget] = useState('Under ₹5 Lakh');
  const [bodyType, setBodyType] = useState('Hatchback');
  const [fuel, setFuel] = useState('Petrol');

  const handleApply = () => {
    setIsModalOpen(false);
    if (onFindCars) onFindCars({ budget, bodyType, fuel });
  };

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '36px 20px 44px',
        borderBottom: '1px solid #f0f0f4',
      }}
    >
      <div style={{ maxWidth: '960px', marginInline: 'auto', textAlign: 'center' }}>
        {/* Car Cards Grid / Carousel with pastel backgrounds (Matching Reference Image 1) */}
        <div
          className="mobile-slide-carousel hide-scrollbar"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '14px',
            marginBottom: '28px',
          }}
        >
          {SAMPLE_CARS.map((car, idx) => (
            <div
              key={idx}
              className="mobile-slide-card-compact"
              style={{
                backgroundColor: car.bg,
                borderRadius: '16px',
                height: '110px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.2s ease',
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img
                src={car.img}
                alt={car.name}
                style={{
                  maxHeight: '75px',
                  maxWidth: '92%',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: 'clamp(20px, 4vw, 26px)',
            fontWeight: 800,
            color: '#2e054e',
            letterSpacing: '-0.3px',
            maxWidth: '460px',
            marginInline: 'auto',
            lineHeight: 1.35,
            marginBottom: '20px',
          }}
        >
          Answer a few questions to find a car that fits your needs.
        </h2>

        {/* Red CTA Pill Button */}
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            style={{
              backgroundColor: '#ed264f',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: 700,
              padding: '13px 44px',
              borderRadius: '9999px',
              boxShadow: '0 6px 20px rgba(237, 38, 79, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              border: 'none',
              transition: 'all 0.18s ease',
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = '#d81b43';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = '#ed264f';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Sparkles size={16} />
            <span>Find my car</span>
          </button>
        </div>
      </div>

      {/* Interactive Modal to Answer Questions */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              width: '100%',
              maxWidth: '480px',
              padding: '24px',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.25)',
              animation: 'fadeIn 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#2e054e' }}>
                Find Your Ideal Car
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#f5effa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#440274',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Question 1: Budget */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ fontSize: '13px', fontWeight: 700, color: '#666666', display: 'block', marginBottom: '8px' }}>
                What is your budget?
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Under ₹5 Lakh', '₹5 - 10 Lakh', '₹10 - 15 Lakh', '₹15 Lakh+'].map(b => (
                  <button
                    key={b}
                    onClick={() => setBudget(b)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      border: budget === b ? '1.5px solid #561381' : '1px solid #e0e0e0',
                      backgroundColor: budget === b ? '#f5effa' : '#ffffff',
                      color: budget === b ? '#561381' : '#333333',
                      fontSize: '13px',
                      fontWeight: budget === b ? 700 : 500,
                      cursor: 'pointer',
                    }}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Body Type */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ fontSize: '13px', fontWeight: 700, color: '#666666', display: 'block', marginBottom: '8px' }}>
                Preferred Body Type
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Hatchback', 'Sedan', 'SUV', 'MUV'].map(bt => (
                  <button
                    key={bt}
                    onClick={() => setBodyType(bt)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      border: bodyType === bt ? '1.5px solid #561381' : '1px solid #e0e0e0',
                      backgroundColor: bodyType === bt ? '#f5effa' : '#ffffff',
                      color: bodyType === bt ? '#561381' : '#333333',
                      fontSize: '13px',
                      fontWeight: bodyType === bt ? 700 : 500,
                      cursor: 'pointer',
                    }}
                  >
                    {bt}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Fuel Type */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '13px', fontWeight: 700, color: '#666666', display: 'block', marginBottom: '8px' }}>
                Fuel Type
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Petrol', 'Diesel', 'CNG', 'Electric'].map(f => (
                  <button
                    key={f}
                    onClick={() => setFuel(f)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      border: fuel === f ? '1.5px solid #561381' : '1px solid #e0e0e0',
                      backgroundColor: fuel === f ? '#f5effa' : '#ffffff',
                      color: fuel === f ? '#561381' : '#333333',
                      fontSize: '13px',
                      fontWeight: fuel === f ? 700 : 500,
                      cursor: 'pointer',
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleApply}
              style={{
                width: '100%',
                backgroundColor: '#ed264f',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 700,
                padding: '12px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <span>Show Matching Cars</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
