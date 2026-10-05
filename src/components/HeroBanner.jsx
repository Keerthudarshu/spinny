import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Car } from 'lucide-react';

const SLIDES = [
  {
    id: 0,
    image: '/assets/hero_slide_0.jpg',
    fallbackUrl: 'https://mda.spinny.com/sp-file-system/public/2026-10-01/ca873288ec9247a29ef630ba1ae5a903/raw/file.jpg',
    ctaText: 'View all cars',
    ctaLink: '#cars',
    title: 'Festival of Spinny - Navratri Special',
  },
  {
    id: 1,
    image: '/assets/hero_slide_1.jpg',
    fallbackUrl: 'https://mda.spinny.com/sp-file-system/public/2026-08-25/b1c915ca6c894112af215a62c7c1a333/raw/file.jpg',
    ctaText: 'Sell your Car',
    ctaLink: '#sell',
    title: 'Sell your car for the right price',
  },
  {
    id: 2,
    image: '/assets/hero_slide_2.jpg',
    fallbackUrl: 'https://mda.spinny.com/sp-file-system/public/2026-08-20/9f78e674c5b74b12a5b582659f6399d2/raw/file.jpg',
    ctaText: 'Check Eligibility',
    ctaLink: '#loan',
    title: 'Smart way to loan - Zero down payment options',
  },
  {
    id: 3,
    image: '/assets/hero_slide_3.jpg',
    fallbackUrl: 'https://mda.spinny.com/sp-file-system/public/2026-08-20/42fc0892ed5a4d1ca153e0dd9dc5257a/raw/file.jpg',
    ctaText: 'Explore cars',
    ctaLink: '#challans',
    title: 'All Challans All Clear',
  },
];

export default function HeroBanner({ onCtaClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto slide effect
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % SLIDES.length);
  };

  // Touch swipe support for mobile/tablet
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#2e054e',
        overflow: 'hidden',
        userSelect: 'none',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Aspect Ratio Container (matches Spinny on desktop and mobile) */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(380px, 45vw, 490px)',
          overflow: 'hidden',
        }}
      >
        {/* Slides Track */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              style={{
                minWidth: '100%',
                height: '100%',
                position: 'relative',
                backgroundImage: `url(${slide.image}), url(${slide.fallbackUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Desktop Content overlay container */}
              <div
                className="desktop-only"
                style={{
                  position: 'relative',
                  zIndex: 10,
                  maxWidth: '1360px',
                  height: '100%',
                  marginInline: 'auto',
                  paddingInline: 'clamp(20px, 12vw, 160px)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  paddingBottom: 'clamp(24px, 4.2vw, 58px)',
                }}
              >
                {/* CTA Button */}
                <button
                  onClick={() => onCtaClick && onCtaClick(slide)}
                  aria-label={`${slide.ctaText} button`}
                  style={{
                    backgroundColor: 'var(--ds-primary-pink)',
                    color: '#ffffff',
                    fontSize: 'clamp(14px, 1.1vw, 16px)',
                    fontWeight: 700,
                    height: 'clamp(42px, 3.4vw, 50px)',
                    paddingInline: 'clamp(24px, 2.5vw, 36px)',
                    borderRadius: '9999px',
                    boxShadow: '0 8px 24px rgba(237, 38, 79, 0.45)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    letterSpacing: '0.2px',
                    transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.backgroundColor = 'var(--ds-primary-pink-hover)';
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(237, 38, 79, 0.6)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.backgroundColor = 'var(--ds-primary-pink)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(237, 38, 79, 0.45)';
                  }}
                >
                  {slide.ctaText}
                </button>
              </div>

              {/* Mobile Content overlay (matching Reference Image 2) */}
              <div
                className="mobile-only"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 25%, rgba(0,0,0,0.85) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px 20px',
                  color: '#ffffff',
                  textAlign: 'center',
                  zIndex: 10,
                }}
              >
                <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                  Cars you love to buy
                </h2>
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '18px', maxWidth: '320px', marginInline: 'auto', lineHeight: 1.4 }}>
                  Trusted by over 1 Lakh Customers. Choose from 5000+ spinny assured cars.
                </p>
                <button
                  onClick={() => onCtaClick && onCtaClick(slide)}
                  style={{
                    width: '100%',
                    height: '48px',
                    borderRadius: '10px',
                    backgroundColor: '#ed264f',
                    color: '#ffffff',
                    fontSize: '15px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 6px 20px rgba(237, 38, 79, 0.4)',
                    cursor: 'pointer',
                  }}
                >
                  <Car size={18} />
                  <span>{slide.ctaText || 'Buy car'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Navigation Arrows */}
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          style={{
            position: 'absolute',
            top: '50%',
            left: 'clamp(10px, 1.5vw, 24px)',
            transform: 'translateY(-50%)',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: '1px solid #e8e8e8',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#333333',
            cursor: 'pointer',
            zIndex: 20,
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.25)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.18)';
          }}
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next slide"
          style={{
            position: 'absolute',
            top: '50%',
            right: 'clamp(10px, 1.5vw, 24px)',
            transform: 'translateY(-50%)',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: '1px solid #e8e8e8',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#333333',
            cursor: 'pointer',
            zIndex: 20,
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.25)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.18)';
          }}
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>

        {/* Bottom-Right Pagination Dots Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: 'clamp(12px, 1.6vw, 22px)',
            right: 'clamp(16px, 2.5vw, 36px)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            padding: '4px 10px',
            borderRadius: '16px',
            backdropFilter: 'blur(4px)',
          }}
        >
          {SLIDES.map((_, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: isActive ? '20px' : '7px',
                  height: '7px',
                  borderRadius: isActive ? '4px' : '50%',
                  backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.55)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  padding: 0,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
