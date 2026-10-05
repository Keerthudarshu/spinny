import React, { useState } from 'react';
import { Search, X, MapPin, Check } from 'lucide-react';

const POPULAR_CITIES = [
  { name: 'Delhi NCR', isPopular: true, count: '3,450+ cars' },
  { name: 'Bangalore', isPopular: true, count: '2,890+ cars' },
  { name: 'Mumbai', isPopular: true, count: '2,420+ cars' },
  { name: 'Hyderabad', isPopular: true, count: '1,980+ cars' },
  { name: 'Pune', isPopular: true, count: '1,650+ cars' },
  { name: 'Chennai', isPopular: true, count: '1,320+ cars' },
  { name: 'Kolkata', isPopular: true, count: '890+ cars' },
  { name: 'Ahmedabad', isPopular: true, count: '1,120+ cars' },
  { name: 'Jaipur', isPopular: false, count: '740+ cars' },
  { name: 'Chandigarh', isPopular: false, count: '650+ cars' },
  { name: 'Lucknow', isPopular: false, count: '580+ cars' },
  { name: 'Kochi', isPopular: false, count: '490+ cars' },
  { name: 'Coimbatore', isPopular: false, count: '410+ cars' },
  { name: 'Indore', isPopular: false, count: '380+ cars' },
  { name: 'Surat', isPopular: false, count: '420+ cars' },
];

export default function CityModal({ isOpen, onClose, selectedCity, onSelectCity }) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredCities = POPULAR_CITIES.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
      onClick={onClose}
    >
      <div
        className="animate-fade-in"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '680px',
          boxShadow: 'var(--ds-shadow-modal)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '24px 28px 16px',
            borderBottom: '1px solid #ebebeb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a', letterSpacing: '-0.3px' }}>
              Select your city
            </h2>
            <p style={{ fontSize: '13px', color: '#6e6e6e', marginTop: '4px' }}>
              Find Spinny Hubs, test drives & verified cars in your city
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f5f5f5',
              color: '#444',
              transition: 'background 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#eaeaea')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          >
            <X size={18} />
          </button>
        </div>

        {/* Search bar */}
        <div style={{ padding: '16px 28px 10px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#f7f7f9',
              borderRadius: '14px',
              padding: '12px 16px',
              border: '1.5px solid #e2e4e8',
            }}
          >
            <Search size={18} color="#777" />
            <input
              type="text"
              placeholder="Search by city name..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                fontSize: '15px',
                color: '#222',
              }}
              autoFocus
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} style={{ color: '#888' }}>
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* City List */}
        <div
          style={{
            padding: '10px 28px 24px',
            overflowY: 'auto',
          }}
        >
          <div style={{ fontSize: '12px', fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '12px' }}>
            Popular Cities
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
              gap: '12px',
            }}
          >
            {filteredCities.map(city => {
              const isSelected = selectedCity === city.name;
              return (
                <button
                  key={city.name}
                  onClick={() => {
                    onSelectCity(city.name);
                    onClose();
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    backgroundColor: isSelected ? 'var(--ds-primary-pink-light)' : '#f9f9fb',
                    border: isSelected ? '1.5px solid var(--ds-primary-pink)' : '1px solid #ebebeb',
                    textAlign: 'left',
                    transition: 'all 0.18s ease',
                    position: 'relative',
                  }}
                  onMouseOver={e => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#f1f1f5';
                      e.currentTarget.style.borderColor = '#d4d4dc';
                    }
                  }}
                  onMouseOut={e => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#f9f9fb';
                      e.currentTarget.style.borderColor = '#ebebeb';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: isSelected ? 'var(--ds-primary-pink)' : '#222' }}>
                      {city.name}
                    </span>
                    {isSelected && <Check size={14} color="var(--ds-primary-pink)" strokeWidth={2.5} />}
                  </div>
                  <span style={{ fontSize: '11px', color: isSelected ? 'var(--ds-primary-pink)' : '#888', marginTop: '3px' }}>
                    {city.count}
                  </span>
                </button>
              );
            })}
          </div>

          {filteredCities.length === 0 && (
            <div style={{ textAlign: 'center', padding: '36px 0', color: '#888' }}>
              <MapPin size={32} style={{ margin: '0 auto 8px', opacity: 0.5 }} />
              <p style={{ fontSize: '15px' }}>No cities found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
