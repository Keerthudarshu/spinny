import React, { useState } from 'react';
import { Heart, ChevronRight, ChevronLeft, ShieldCheck, MapPin, Compass } from 'lucide-react';

const FEATURED_CARS = [
  {
    id: 101,
    name: '2019 Mahindra TUV300',
    variant: 'T4 Plus',
    price: '₹6.16 Lakh',
    emi: 'EMI ₹10,626/m*',
    km: '45K km',
    fuel: 'Diesel',
    trans: 'Manual',
    reg: 'DL12',
    hub: 'Mantri Mall, Malleshwaram',
    hubType: 'HUB',
    badgeText: 'High quality, less driven',
    category: 'Assured',
    image: 'https://spn-mda.spinny.com/img/89a5OBqdTBSuPVUpztS2_w/raw/file.jpg',
    fallbackImg: '/assets/cars/sp_car_0.png',
  },
  {
    id: 102,
    name: '2014 Honda City',
    variant: 'VX',
    price: '₹3.59 Lakh',
    emi: 'EMI ₹9,892/m*',
    km: '87K km',
    fuel: 'Petrol',
    trans: 'Manual',
    reg: 'UP65',
    hub: 'Kalpi Road, Fazalganj',
    hubType: 'PARK',
    badgeText: 'Performance & 3 more reasons to buy',
    category: 'budget',
    hasGreenDot: true,
    image: 'https://spn-mda.spinny.com/img/ypGsQ2IWRN2Y73qD6JtYuA/raw/file.jpg',
    fallbackImg: '/assets/cars/sp_car_1.png',
  },
  {
    id: 103,
    name: '2019 Hyundai Creta',
    variant: 'SX 1.6 AT CRDi',
    price: '₹9.90 Lakh',
    emi: 'EMI ₹16,927/m*',
    km: '83.5K km',
    fuel: 'Diesel',
    trans: 'Automatic',
    reg: 'HR51',
    hub: 'Mantri Mall, Malleshwaram',
    hubType: 'HUB',
    badgeText: 'Performance',
    category: 'budget',
    hasGreenDot: true,
    isDraped: true,
    image: null,
  },
  {
    id: 104,
    name: '2019 Tata Harrier',
    variant: 'XZ',
    price: '₹12.45 Lakh',
    emi: 'EMI ₹24,180/m*',
    km: '69K km',
    fuel: 'Diesel',
    trans: 'Manual',
    reg: 'DL08',
    hub: 'Mantri Mall, Malleshwaram',
    hubType: 'HUB',
    badgeText: 'Performance & 1 more reason to buy',
    category: 'Assured',
    hasGreenDot: true,
    image: 'https://spn-mda.spinny.com/img/uPn97zFcQd6ZAu6cneU5eA/raw/file.jpg',
    fallbackImg: '/assets/cars/sp_car_2.png',
  },
  {
    id: 105,
    name: '2021 Maruti Suzuki Baleno',
    variant: 'Alpha 1.2 Dualjet',
    price: '₹7.15 Lakh',
    emi: 'EMI ₹13,450/m*',
    km: '31K km',
    fuel: 'Petrol',
    trans: 'Manual',
    reg: 'DL04',
    hub: 'Crown Interiorz Mall, Faridabad',
    hubType: 'HUB',
    badgeText: 'Top model, Single owner',
    category: 'Assured',
    hasGreenDot: true,
    image: '/assets/cars/sp_car_3.png',
  },
];

export default function FeaturedCars({ onToggleShortlist, shortlistedIds = [] }) {
  const [activeTab, setActiveTab] = useState('best_buys');
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleNext = () => {
    setScrollIndex(prev => Math.min(prev + 1, FEATURED_CARS.length - 4));
  };

  const handlePrev = () => {
    setScrollIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '56px 24px 64px',
        borderBottom: '1px solid #ededf2',
      }}
    >
      <div style={{ maxWidth: '1240px', marginInline: 'auto' }}>
        {/* Title with decorative lines on both sides */}
        <div className="spinny-section-header" style={{ marginBottom: '24px' }}>
          <div className="spinny-section-header-line" />
          <h2 className="spinny-section-title">
            Featured Spinny cars
          </h2>
          <div className="spinny-section-header-line reverse" />
        </div>

        {/* Toggle Pills: Best buys for you / Newly added */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}>
          <div
            style={{
              display: 'inline-flex',
              backgroundColor: '#f5effa',
              borderRadius: '10px',
              padding: '4px',
              gap: '4px',
            }}
          >
            <button
              onClick={() => setActiveTab('best_buys')}
              style={{
                padding: '8px 22px',
                borderRadius: '8px',
                backgroundColor: activeTab === 'best_buys' ? '#440274' : 'transparent',
                color: activeTab === 'best_buys' ? '#ffffff' : '#440274',
                fontSize: '13.5px',
                fontWeight: 600,
                transition: 'all 0.18s ease',
              }}
            >
              Best buys for you
            </button>
            <button
              onClick={() => setActiveTab('newly_added')}
              style={{
                padding: '8px 22px',
                borderRadius: '8px',
                backgroundColor: activeTab === 'newly_added' ? '#440274' : 'transparent',
                color: activeTab === 'newly_added' ? '#ffffff' : '#440274',
                fontSize: '13.5px',
                fontWeight: 600,
                transition: 'all 0.18s ease',
              }}
            >
              Newly added
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div style={{ position: 'relative', marginBottom: '40px' }}>
          <div
            className="spinny-responsive-cars-grid mobile-slide-carousel"
          >
            {FEATURED_CARS.map(car => {
              const isShortlisted = shortlistedIds.includes(car.id);
              return (
                <div
                  key={car.id}
                  className="mobile-slide-card"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #ebebeb',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  {/* Car Image Area */}
                  <div
                    style={{
                      height: '160px',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      padding: '16px',
                    }}
                  >
                    {/* Shortlist Heart Button */}
                    <button
                      onClick={() => onToggleShortlist && onToggleShortlist(car)}
                      aria-label="Shortlist car"
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        zIndex: 10,
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
                        color: isShortlisted ? '#ed264f' : '#666666',
                        transition: 'transform 0.15s',
                      }}
                      onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                      onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <Heart size={16} fill={isShortlisted ? '#ed264f' : 'none'} strokeWidth={2} />
                    </button>

                    {/* Draped cloth car or standard photo */}
                    {car.isDraped ? (
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          backgroundColor: '#2e054e',
                          borderRadius: '12px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '12px',
                          textAlign: 'center',
                          backgroundImage: 'radial-gradient(circle at 50% 30%, #520b86 0%, #2e054e 100%)',
                        }}
                      >
                        {/* Purple curtain car illustration */}
                        <div
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            color: '#ffffff',
                            lineHeight: 1.3,
                            marginBottom: '4px',
                          }}
                        >
                          Preview unavailable.
                        </div>
                        <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.8)' }}>
                          Click to view details
                        </div>
                      </div>
                    ) : (
                      <img
                        src={car.image || car.fallbackImg}
                        alt={car.name}
                        style={{
                          maxHeight: '120px',
                          maxWidth: '92%',
                          objectFit: 'contain',
                        }}
                        onError={e => {
                          if (car.fallbackImg) e.currentTarget.src = car.fallbackImg;
                        }}
                      />
                    )}
                  </div>

                  {/* Car Content */}
                  <div style={{ padding: '14px 16px 12px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Title & Price */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                      <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', letterSpacing: '-0.2px' }}>
                        {car.name}
                      </h3>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a' }}>
                        {car.price}
                      </div>
                    </div>

                    {/* Variant & EMI */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{ fontSize: '12px', color: '#777' }}>
                        {car.variant}
                      </span>
                      <span style={{ fontSize: '11.5px', color: '#888' }}>
                        {car.emi}
                      </span>
                    </div>

                    {/* Tag Pills */}
                    <div style={{ display: 'flex', gap: '6px', marginBottom: '10px', flexWrap: 'wrap' }}>
                      {[car.km, car.fuel, car.trans, car.reg].map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '11px',
                            color: '#555',
                            backgroundColor: '#f6f7f9',
                            padding: '3px 6px',
                            borderRadius: '4px',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Hub Location */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', color: '#777', marginBottom: '12px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 700, color: '#440274' }}>
                        {car.hubType} •
                      </span>
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {car.hub}
                      </span>
                    </div>

                    {/* Bottom Strip Divider */}
                    <div
                      style={{
                        marginTop: 'auto',
                        paddingTop: '10px',
                        borderTop: '1px solid #f2f2f4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        {car.hasGreenDot && (
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00a368' }} />
                        )}
                        <span style={{ fontSize: '11px', color: '#555' }}>
                          {car.badgeText}
                        </span>
                      </div>

                      {/* Spinny Assured or Budget Badge */}
                      {car.category === 'Assured' ? (
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            color: '#440274',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px',
                          }}
                        >
                          <ShieldCheck size={12} color="#ed264f" />
                          Assured
                        </span>
                      ) : (
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            color: '#0072b2',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px',
                          }}
                        >
                          ● budget
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Floating Chevron Button */}
          {scrollIndex < FEATURED_CARS.length - 4 && (
            <button
              onClick={handleNext}
              aria-label="Next cars"
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
          )}

          {scrollIndex > 0 && (
            <button
              onClick={handlePrev}
              aria-label="Previous cars"
              style={{
                position: 'absolute',
                top: '50%',
                left: '-18px',
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
              <ChevronLeft size={18} color="#333" strokeWidth={2.4} />
            </button>
          )}
        </div>

        {/* View all Spinny cars button */}
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
            View all Spinny cars
          </button>
        </div>
      </div>
    </section>
  );
}
