import React, { useState } from 'react';
import { Search, X, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

const TRENDING_MODELS = [
  { name: 'Maruti Suzuki Swift', type: 'Hatchback', price: '₹4.2 Lakh onw.' },
  { name: 'Hyundai Creta', type: 'SUV', price: '₹7.8 Lakh onw.' },
  { name: 'Maruti Suzuki Baleno', type: 'Hatchback', price: '₹5.1 Lakh onw.' },
  { name: 'Honda City', type: 'Sedan', price: '₹5.9 Lakh onw.' },
  { name: 'Tata Nexon', type: 'Compact SUV', price: '₹6.5 Lakh onw.' },
  { name: 'Kia Seltos', type: 'SUV', price: '₹9.4 Lakh onw.' },
  { name: 'Hyundai i20', type: 'Hatchback', price: '₹4.8 Lakh onw.' },
  { name: 'Maruti Brezza', type: 'SUV', price: '₹6.2 Lakh onw.' },
];

const POPULAR_BUDGETS = [
  'Under ₹3 Lakh',
  '₹3 - 5 Lakh',
  '₹5 - 8 Lakh',
  '₹8 - 12 Lakh',
  'Above ₹12 Lakh',
];

export default function SearchModal({ isOpen, onClose, onSearchSelect }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredModels = TRENDING_MODELS.filter(m =>
    m.name.toLowerCase().includes(query.toLowerCase().trim()) ||
    m.type.toLowerCase().includes(query.toLowerCase().trim())
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
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '80px',
        paddingInline: '16px',
      }}
      onClick={onClose}
    >
      <div
        className="animate-fade-in"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '640px',
          boxShadow: 'var(--ds-shadow-modal)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '80vh',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid #ebebeb',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <Search size={20} color="var(--ds-primary-pink)" />
          <input
            type="text"
            placeholder="Search by make, model, body type or budget..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              width: '100%',
              fontSize: '16px',
              fontWeight: 500,
              color: '#222',
            }}
            autoFocus
          />
          {query ? (
            <button onClick={() => setQuery('')} style={{ color: '#888' }}>
              <X size={18} />
            </button>
          ) : (
            <button
              onClick={onClose}
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#666',
                backgroundColor: '#f1f1f1',
                padding: '5px 10px',
                borderRadius: '8px',
              }}
            >
              ESC
            </button>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '20px 24px', overflowY: 'auto' }}>
          {/* Quick Budgets */}
          {!query && (
            <div style={{ marginBottom: '22px' }}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#888',
                  textTransform: 'uppercase',
                  letterSpacing: '0.6px',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Sparkles size={14} color="var(--ds-primary-pink)" />
                Browse by Budget
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {POPULAR_BUDGETS.map(b => (
                  <button
                    key={b}
                    onClick={() => {
                      onSearchSelect(b);
                      onClose();
                    }}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '20px',
                      backgroundColor: '#f6f7f9',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#333',
                      border: '1px solid #e5e7eb',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.backgroundColor = 'var(--ds-primary-pink-light)';
                      e.currentTarget.style.borderColor = 'var(--ds-primary-pink)';
                      e.currentTarget.style.color = 'var(--ds-primary-pink)';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.backgroundColor = '#f6f7f9';
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.color = '#333';
                    }}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Trending Models */}
          <div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#888',
                textTransform: 'uppercase',
                letterSpacing: '0.6px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <TrendingUp size={14} color="var(--ds-primary-pink)" />
              {query ? 'Matching Cars' : 'Trending Cars'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {filteredModels.map(model => (
                <button
                  key={model.name}
                  onClick={() => {
                    onSearchSelect(model.name);
                    onClose();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    textAlign: 'left',
                    transition: 'background 0.15s ease',
                  }}
                  onMouseOver={e => (e.currentTarget.style.backgroundColor = '#f8f8fb')}
                  onMouseOut={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: '#f3e8f7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--ds-header-bg)',
                        fontWeight: 700,
                        fontSize: '12px',
                      }}
                    >
                      {model.name[0]}
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#1a1a1a' }}>
                        {model.name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#777' }}>
                        {model.type} • {model.price}
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={16} color="#aaa" />
                </button>
              ))}

              {filteredModels.length === 0 && (
                <div style={{ textAlign: 'center', padding: '24px 0', color: '#888', fontSize: '14px' }}>
                  No cars found for "{query}". Try searching for Swift, Creta, or Baleno.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
