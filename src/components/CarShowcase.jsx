import React from 'react';
import { Heart, ShieldCheck, MapPin, Gauge, Fuel, Cog } from 'lucide-react';

const INITIAL_CARS = [
  {
    id: 1,
    name: '2021 Maruti Suzuki Swift ZXi',
    variant: '1.2 Petrol • Manual',
    fuel: 'Petrol',
    transmission: 'Manual',
    year: '2021',
    km: '28,450 km',
    price: '₹6.15 Lakh',
    rawPrice: 615000,
    emi: '₹12,420/mo',
    city: 'Delhi NCR',
    bodyType: 'Hatchback',
    image: 'https://spn-mda.spinny.com/img/giW528qWQC6UbjBmchAbsA/raw/file.jpg',
    assured: true,
  },
  {
    id: 2,
    name: '2022 Hyundai Creta SX (O)',
    variant: '1.5 Petrol • Automatic',
    fuel: 'Petrol',
    transmission: 'Automatic',
    year: '2022',
    km: '19,200 km',
    price: '₹14.85 Lakh',
    rawPrice: 1485000,
    emi: '₹28,650/mo',
    city: 'Delhi NCR',
    bodyType: 'SUV',
    image: 'https://spn-mda.spinny.com/img/ma9%2B%2BgB3T8aH3GgKQyim0w/raw/file.jpg',
    assured: true,
  },
  {
    id: 3,
    name: '2020 Tata Nexon XZ+ (O)',
    variant: '1.2 Turbo • Manual',
    fuel: 'Petrol',
    transmission: 'Manual',
    year: '2020',
    km: '34,100 km',
    price: '₹8.40 Lakh',
    rawPrice: 840000,
    emi: '₹16,800/mo',
    city: 'Delhi NCR',
    bodyType: 'SUV',
    image: 'https://spn-mda.spinny.com/img/uPn97zFcQd6ZAu6cneU5eA/raw/file.jpg',
    assured: true,
  },
  {
    id: 4,
    name: '2021 Honda City ZX',
    variant: '1.5 i-VTEC • Automatic CVT',
    fuel: 'Petrol',
    transmission: 'Automatic',
    year: '2021',
    km: '23,600 km',
    price: '₹11.20 Lakh',
    rawPrice: 1120000,
    emi: '₹22,100/mo',
    city: 'Delhi NCR',
    bodyType: 'Sedan',
    image: 'https://spn-mda.spinny.com/img/RHbazsmXR7OBQ4fxEsMT9A/raw/file.jpg',
    assured: true,
  },
];

export default function CarShowcase({
  selectedCity,
  selectedFilters = {},
  onToggleShortlist,
  shortlistedIds = [],
}) {
  return (
    <section id="cars" style={{ maxWidth: '1360px', marginInline: 'auto', padding: '40px 24px 80px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#1a1a1a', letterSpacing: '-0.3px' }}>
            Featured Spinny Assured Cars in {selectedCity || 'Your City'}
          </h2>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>
            1-year warranty • 5-day money back guarantee • Fixed price assurance
          </p>
        </div>
        <button
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--ds-primary-pink)',
            border: '1.5px solid var(--ds-primary-pink)',
            padding: '8px 20px',
            borderRadius: '9999px',
            transition: 'all 0.15s ease',
          }}
          onMouseOver={e => {
            e.currentTarget.style.backgroundColor = 'var(--ds-primary-pink)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--ds-primary-pink)';
          }}
        >
          View all {selectedCity || ''} cars →
        </button>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {INITIAL_CARS.map(car => {
          const isShortlisted = shortlistedIds.includes(car.id);
          return (
            <div
              key={car.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.06)',
                border: '1px solid #ebebeb',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.12)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.06)';
              }}
            >
              {/* Image banner */}
              <div style={{ position: 'relative', width: '100%', height: '180px', backgroundColor: '#f0f0f4' }}>
                <img
                  src={car.image}
                  alt={car.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />

                {/* Assured Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#2e054e',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <ShieldCheck size={14} color="var(--ds-primary-pink)" />
                  SPINNY ASSURED®
                </div>

                {/* Heart Button */}
                <button
                  onClick={() => onToggleShortlist(car)}
                  aria-label="Shortlist this car"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                    color: isShortlisted ? 'var(--ds-primary-pink)' : '#666',
                    transition: 'transform 0.15s ease',
                  }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <Heart
                    size={18}
                    fill={isShortlisted ? 'var(--ds-primary-pink)' : 'none'}
                    strokeWidth={2}
                  />
                </button>
              </div>

              {/* Details */}
              <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>
                  {car.name}
                </h3>
                <p style={{ fontSize: '12.5px', color: '#777', marginBottom: '14px' }}>
                  {car.variant}
                </p>

                {/* Specs pills */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#444',
                      backgroundColor: '#f6f7f9',
                      padding: '4px 8px',
                      borderRadius: '6px',
                    }}
                  >
                    {car.km}
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#444',
                      backgroundColor: '#f6f7f9',
                      padding: '4px 8px',
                      borderRadius: '6px',
                    }}
                  >
                    {car.fuel}
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#444',
                      backgroundColor: '#f6f7f9',
                      padding: '4px 8px',
                      borderRadius: '6px',
                    }}
                  >
                    {car.transmission}
                  </span>
                </div>

                {/* Price & CTA */}
                <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#1a1a1a' }}>
                      {car.price}
                    </div>
                    <div style={{ fontSize: '11.5px', color: '#888' }}>
                      EMI from {car.emi}
                    </div>
                  </div>

                  <button
                    style={{
                      backgroundColor: 'var(--ds-primary-pink)',
                      color: '#fff',
                      fontSize: '13px',
                      fontWeight: 700,
                      padding: '8px 16px',
                      borderRadius: '9999px',
                      transition: 'background 0.15s',
                    }}
                    onMouseOver={e => (e.currentTarget.style.backgroundColor = 'var(--ds-primary-pink-hover)')}
                    onMouseOut={e => (e.currentTarget.style.backgroundColor = 'var(--ds-primary-pink)')}
                  >
                    Book Test Drive
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
