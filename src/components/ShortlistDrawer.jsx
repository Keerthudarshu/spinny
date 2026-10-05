import React from 'react';
import { X, Heart, ArrowRight } from 'lucide-react';
import ShortlistIcon from './ShortlistIcon';

export default function ShortlistDrawer({ isOpen, onClose, shortlistedItems = [] }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(3px)',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={onClose}
    >
      <div
        className="animate-fade-in"
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          maxWidth: '420px',
          height: '100%',
          boxShadow: 'var(--ds-shadow-modal)',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid #ebebeb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--ds-primary-pink-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ds-primary-pink)',
              }}
            >
              <Heart size={18} fill="var(--ds-primary-pink)" />
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
                Your Shortlist
              </h3>
              <p style={{ fontSize: '12px', color: '#777' }}>
                {shortlistedItems.length} cars saved
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#f1f1f1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#555',
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: shortlistedItems.length === 0 ? 'center' : 'flex-start',
            alignItems: shortlistedItems.length === 0 ? 'center' : 'stretch',
            textAlign: shortlistedItems.length === 0 ? 'center' : 'left',
          }}
        >
          {shortlistedItems.length === 0 ? (
            <div>
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: '#f8e9ed',
                  color: 'var(--ds-primary-pink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <Heart size={36} strokeWidth={1.5} />
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#222', marginBottom: '6px' }}>
                No cars shortlisted yet
              </h4>
              <p style={{ fontSize: '13px', color: '#777', maxWidth: '280px', margin: '0 auto 24px', lineHeight: 1.5 }}>
                Tap the heart icon on any Spinny car card to save it for easy comparison and booking.
              </p>
              <button
                onClick={onClose}
                style={{
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--ds-primary-pink)',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Explore Cars
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div>
              {shortlistedItems.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '12px',
                    border: '1px solid #eee',
                    marginBottom: '12px',
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600 }}>{item.name}</h4>
                    <p style={{ fontSize: '13px', color: '#666' }}>{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
