import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const BODY_TYPES = [
  { id: 'hatchback', label: 'Hatchback', iconPath: 'M4 14l2-6h12l2 6M6 14h12M7 16a2 2 0 100-4 2 2 0 000 4zM17 16a2 2 0 100-4 2 2 0 000 4z' },
  { id: 'sedan', label: 'Sedan', iconPath: 'M3 14l3-5h12l3 5M6 14h12M6 16a2 2 0 100-4 2 2 0 000 4zM18 16a2 2 0 100-4 2 2 0 000 4z' },
  { id: 'suv', label: 'SUV', hasRoofRack: true, iconPath: 'M3 15l2-7h14l2 7M5 15h14M7 17a2 2 0 100-4 2 2 0 000 4zM17 17a2 2 0 100-4 2 2 0 000 4z' },
  { id: 'muv', label: 'MUV', iconPath: 'M2 15l2-8h16l2 8M4 15h16M7 17a2 2 0 100-4 2 2 0 000 4zM17 17a2 2 0 100-4 2 2 0 000 4z' },
  { id: 'lux_sedan', label: 'Luxury Sedan', iconPath: 'M2 14l4-6h12l4 6M6 14h12M6 16a2 2 0 100-4 2 2 0 000 4zM18 16a2 2 0 100-4 2 2 0 000 4z' },
  { id: 'lux_suv', label: 'Luxury SUV', iconPath: 'M2 15l3-8h14l3 8M5 15h14M7 17a2 2 0 100-4 2 2 0 000 4zM17 17a2 2 0 100-4 2 2 0 000 4z' },
];

const CARS_BY_TYPE = {
  hatchback: [
    { name: 'Maruti Suzuki Baleno', price: '₹2.78 Lakh', color: '#d97706', img: '/assets/cars/sp_car_0.png' },
    { name: 'Renault Kwid', price: '₹1.73 Lakh', color: '#dc2626', img: '/assets/cars/sp_car_4.png' },
    { name: 'Hyundai Grand i10', price: '₹2.07 Lakh', color: '#881337', img: '/assets/cars/sp_car_5.png' },
    { name: 'Maruti Suzuki Swift', price: '₹1.97 Lakh', color: '#1d4ed8', img: '/assets/cars/sp_car_6.png' },
  ],
  sedan: [
    { name: 'Honda City', price: '₹3.59 Lakh', color: '#7f1d1d', img: '/assets/cars/sp_car_1.png' },
    { name: 'Hyundai Verna', price: '₹4.20 Lakh', color: '#334155', img: '/assets/cars/sp_car_7.png' },
    { name: 'Maruti Suzuki Ciaz', price: '₹4.10 Lakh', color: '#1e293b', img: '/assets/cars/sp_car_8.png' },
    { name: 'Skoda Rapid', price: '₹3.85 Lakh', color: '#0f172a', img: '/assets/cars/sp_car_9.png' },
  ],
  suv: [
    { name: 'Hyundai Creta', price: '₹6.90 Lakh', color: '#3b82f6', img: '/assets/cars/sp_car_2.png' },
    { name: 'Tata Nexon', price: '₹5.40 Lakh', color: '#0284c7', img: '/assets/cars/sp_car_3.png' },
    { name: 'Mahindra Thar', price: '₹9.80 Lakh', color: '#b91c1c', img: '/assets/cars/sp_car_0.png' },
    { name: 'Kia Seltos', price: '₹7.50 Lakh', color: '#e11d48', img: '/assets/cars/sp_car_4.png' },
  ],
  muv: [
    { name: 'Maruti Suzuki Ertiga', price: '₹5.20 Lakh', color: '#475569', img: '/assets/cars/sp_car_5.png' },
    { name: 'Toyota Innova Crysta', price: '₹11.50 Lakh', color: '#64748b', img: '/assets/cars/sp_car_6.png' },
    { name: 'Renault Triber', price: '₹4.15 Lakh', color: '#ca8a04', img: '/assets/cars/sp_car_7.png' },
    { name: 'Mahindra Marazzo', price: '₹6.30 Lakh', color: '#52525b', img: '/assets/cars/sp_car_8.png' },
  ],
  lux_sedan: [
    { name: 'BMW 3 Series', price: '₹18.50 Lakh', color: '#1e3a8a', img: '/assets/cars/sp_car_9.png' },
    { name: 'Mercedes-Benz C-Class', price: '₹21.00 Lakh', color: '#334155', img: '/assets/cars/sp_car_1.png' },
    { name: 'Audi A4', price: '₹16.90 Lakh', color: '#0f172a', img: '/assets/cars/sp_car_2.png' },
    { name: 'Jaguar XE', price: '₹19.50 Lakh', color: '#7f1d1d', img: '/assets/cars/sp_car_3.png' },
  ],
  lux_suv: [
    { name: 'BMW X1', price: '₹22.50 Lakh', color: '#0369a1', img: '/assets/cars/sp_car_0.png' },
    { name: 'Audi Q3', price: '₹20.80 Lakh', color: '#1e293b', img: '/assets/cars/sp_car_4.png' },
    { name: 'Mercedes-Benz GLA', price: '₹23.40 Lakh', color: '#475569', img: '/assets/cars/sp_car_5.png' },
    { name: 'Volvo XC60', price: '₹25.00 Lakh', color: '#0284c7', img: '/assets/cars/sp_car_6.png' },
  ],
};

export default function ExploreByBodyType({ onSelectCar }) {
  const [activeType, setActiveType] = useState('hatchback');

  const cars = CARS_BY_TYPE[activeType] || CARS_BY_TYPE.hatchback;
  const activeLabel = BODY_TYPES.find(b => b.id === activeType)?.label || 'hatchbacks';

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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '28px' }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(68, 2, 116, 0.2) 100%)' }} />
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 800,
              color: '#2e054e',
              letterSpacing: '-0.3px',
              whiteSpace: 'nowrap',
            }}
          >
            Explore by Body Type
          </h2>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(68, 2, 116, 0.2) 0%, transparent 100%)' }} />
        </div>

        {/* Body Type Tab Selector with Silhouette Icons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          {BODY_TYPES.map(bt => {
            const isActive = activeType === bt.id;
            return (
              <button
                key={bt.id}
                onClick={() => setActiveType(bt.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  backgroundColor: isActive ? '#440274' : 'transparent',
                  color: isActive ? '#ffffff' : '#440274',
                  cursor: 'pointer',
                  minWidth: '92px',
                  transition: 'all 0.18s ease',
                }}
                onMouseOver={e => {
                  if (!isActive) e.currentTarget.style.backgroundColor = '#f6f0fb';
                }}
                onMouseOut={e => {
                  if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {/* Car Silhouette SVG Icon */}
                <svg
                  width="44"
                  height="26"
                  viewBox="0 0 44 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginBottom: '6px' }}
                >
                  {/* Roof rack for SUV */}
                  {bt.hasRoofRack && (
                    <rect x="14" y="2" width="16" height="2" rx="1" fill={isActive ? '#ffffff' : '#440274'} />
                  )}
                  {/* Car Body outline */}
                  <path
                    d={
                      bt.id === 'sedan' || bt.id === 'lux_sedan'
                        ? 'M4 17L8 9C9 7 11 6 13 6H31C33 6 35 7 36 9L40 17H4M4 17H40'
                        : bt.id === 'suv' || bt.id === 'lux_suv'
                        ? 'M4 17L7 7C8 5 9 5 12 5H32C35 5 36 5 37 7L40 17H4M4 17H40'
                        : 'M4 17L8 8C9 6 11 6 14 6H29C32 6 34 8 36 11L40 17H4M4 17H40'
                    }
                    stroke={isActive ? '#ffffff' : '#440274'}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Wheels */}
                  <circle cx="11" cy="18" r="3.5" stroke={isActive ? '#ffffff' : '#440274'} strokeWidth="1.8" />
                  <circle cx="33" cy="18" r="3.5" stroke={isActive ? '#ffffff' : '#440274'} strokeWidth="1.8" />
                </svg>

                <span style={{ fontSize: '13px', fontWeight: isActive ? 700 : 500, whiteSpace: 'nowrap' }}>
                  {bt.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* 4 Car Model Cards */}
        <div style={{ position: 'relative', marginBottom: '40px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
          >
            {cars.map((car, idx) => (
              <div
                key={idx}
                className="animate-fade-in"
                onClick={() => onSelectCar && onSelectCar(car)}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #ebebeb',
                  overflow: 'hidden',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.2s ease',
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
                {/* Car cutout image */}
                <div
                  style={{
                    height: '110px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <img
                    src={car.img}
                    alt={car.name}
                    style={{
                      maxHeight: '95px',
                      maxWidth: '90%',
                      objectFit: 'contain',
                    }}
                    onError={e => {
                      e.currentTarget.src = '/assets/cars/baleno_orange.png';
                    }}
                  />
                </div>

                {/* Model Name */}
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>
                  {car.name}
                </h3>

                {/* Price */}
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a' }}>
                  {car.price} <span style={{ fontSize: '12px', fontWeight: 500, color: '#777' }}>onwards</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Floating Chevron Button */}
          <button
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
        </div>

        {/* View all {type} button */}
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
            View all {activeLabel.toLowerCase()}
          </button>
        </div>
      </div>
    </section>
  );
}
