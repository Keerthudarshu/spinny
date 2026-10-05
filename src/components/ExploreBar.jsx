import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, X, Check } from 'lucide-react';

// Exact brand and model hierarchy matching Spinny's actual structure
const MAKE_MODEL_DATA = [
  {
    name: 'Maruti Suzuki',
    models: ['Baleno', 'Swift', 'Wagon R', 'Dzire', 'Alto 800'],
  },
  {
    name: 'Hyundai',
    models: ['i20', 'Creta', 'Grand i10', 'Elite i20', 'Grand i10 Nios'],
  },
  {
    name: 'Tata',
    models: ['Nexon', 'Tiago', 'Punch', 'Altroz', 'Tigor'],
  },
  {
    name: 'Honda',
    models: ['City', 'Amaze', 'WR-V', 'Jazz', 'Civic'],
  },
  {
    name: 'Mahindra',
    models: ['XUV700', 'Thar', 'Scorpio', 'XUV300', 'Bolero'],
  },
  {
    name: 'Toyota',
    models: ['Innova Crysta', 'Fortuner', 'Glanza', 'Urban Cruiser', 'Yaris'],
  },
  {
    name: 'Renault',
    models: ['Kwid', 'Triber', 'Kiger', 'Duster'],
  },
  {
    name: 'Kia',
    models: ['Seltos', 'Sonet', 'Carens', 'Carnival'],
  },
];

// Price brackets matching Spinny's official options
const PRICE_OPTIONS = [
  'Under 3 Lakh',
  '3 - 4 Lakh',
  '4 - 5 Lakh',
  '5 - 6 Lakh',
  '6 - 8 Lakh',
  '8 - 10 Lakh',
  'Above 10 Lakh',
];

// Manufacturing Year options matching Spinny
const YEAR_OPTIONS = [
  '2024 & above',
  '2022 & above',
  '2020 & above',
  '2018 & above',
  '2016 & above',
  '2014 & above',
  '2012 & above',
  '2010 & above',
];

// Fuel options without icons or stickers
const FUEL_OPTIONS = [
  'Petrol',
  'Diesel',
  'CNG',
  'Electric',
  'Hybrid',
];

// KM Driven options matching Spinny
const KM_OPTIONS = [
  '10,000 kms or less',
  '30,000 kms or less',
  '50,000 kms or less',
  '75,000 kms or less',
  '1,00,000 kms or less',
  '1,25,000 kms or less',
  '1,50,000 kms or less',
  '1,75,000 kms or less',
];

// Body Type options without stickers or icons
const BODY_TYPE_OPTIONS = [
  'Hatchback',
  'Sedan',
  'SUV',
  'MUV',
];

// Transmission options without icons
const TRANSMISSION_OPTIONS = [
  {
    name: 'Automatic',
    subtypes: 'AMT, CVT, TC, DCT',
  },
  {
    name: 'Manual',
    subtypes: 'Regular, iMT',
  },
];

export default function ExploreBar({ onFilterSelect, selectedFilters = {} }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeBrandTab, setActiveBrandTab] = useState('Maruti Suzuki');
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const containerRef = useRef(null);

  // Responsive screen listener
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown on click outside (desktop)
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (key) => {
    setOpenDropdown(prev => (prev === key ? null : key));
  };

  const applyFilter = (key, val) => {
    if (onFilterSelect) onFilterSelect(key, val);
    setOpenDropdown(null);
  };

  const clearFilter = (key, e) => {
    if (e) e.stopPropagation();
    if (onFilterSelect) onFilterSelect(key, null);
  };

  const navItems = [
    { key: 'price', label: 'Price Range' },
    { key: 'makeModel', label: 'Make and Model' },
    { key: 'year', label: 'Year' },
    { key: 'fuel', label: 'Fuel' },
    { key: 'km', label: 'KM Driven' },
    { key: 'bodyType', label: 'Body Type' },
    { key: 'transmission', label: 'Transmission' },
  ];

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: '#561381',
        width: '100%',
        minHeight: '48px',
        position: 'relative',
        zIndex: 50,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.18)',
        userSelect: 'none',
        overflow: isMobile ? 'hidden' : 'visible',
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          marginInline: 'auto',
          paddingInline: isMobile ? '12px' : '24px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          height: '48px',
          overflow: isMobile ? 'visible' : 'visible',
        }}
      >
        {/* Explore By label */}
        <div
          style={{
            color: 'rgba(255, 255, 255, 0.65)',
            fontSize: isMobile ? '12.5px' : '14px',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            marginRight: isMobile ? '12px' : '22px',
            flexShrink: 0,
          }}
        >
          Explore By
        </div>

        {/* Filter Tab Buttons */}
        <ul
          className="hide-scrollbar"
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            listStyle: 'none',
            gap: '6px',
            margin: 0,
            padding: 0,
            overflowX: isMobile ? 'auto' : 'visible',
            overflowY: 'visible',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            flex: 1,
          }}
        >
          {navItems.map(item => {
            const isOpen = openDropdown === item.key;
            const selectedVal = selectedFilters[item.key];

            return (
              <li
                key={item.key}
                style={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                <button
                  onClick={() => toggleDropdown(item.key)}
                  aria-expanded={isOpen}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    paddingInline: isMobile ? '11px' : '14px',
                    height: '34px',
                    borderRadius: '6px',
                    backgroundColor: isOpen ? '#561381' : 'transparent',
                    border: isOpen
                      ? '1.5px solid #ffffff'
                      : selectedVal
                      ? '1px solid rgba(255, 255, 255, 0.6)'
                      : '1.5px solid transparent',
                    color: '#ffffff',
                    fontSize: isMobile ? '13px' : '14px',
                    fontWeight: isOpen || selectedVal ? 600 : 500,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseOver={e => {
                    if (!isOpen && !selectedVal) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    }
                  }}
                  onMouseOut={e => {
                    if (!isOpen && !selectedVal) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <span>{selectedVal || item.label}</span>

                  {selectedVal ? (
                    <span
                      onClick={(e) => clearFilter(item.key, e)}
                      title="Clear filter"
                      style={{
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: '3px',
                      }}
                    >
                      <X size={10} color="#ffffff" strokeWidth={2.5} />
                    </span>
                  ) : isOpen ? (
                    <ChevronUp size={13} color="#ffffff" strokeWidth={2.4} />
                  ) : (
                    <ChevronDown size={13} color="#ffffff" strokeWidth={2.4} />
                  )}
                </button>

                {/* ========================================================
                    DESKTOP DROPDOWNS (Screens > 768px)
                   ======================================================== */}
                {!isMobile && isOpen && item.key === 'price' && (
                  <div
                    className="animate-fade-in"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 4px)',
                      left: 0,
                      backgroundColor: '#561381',
                      borderRadius: '16px',
                      boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
                      padding: '20px 24px',
                      color: '#ffffff',
                      zIndex: 100,
                      minWidth: '280px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Budget
                      </span>
                      {selectedVal && (
                        <button
                          onClick={() => applyFilter('price', null)}
                          style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer' }}
                        >
                          Clear
                        </button>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {PRICE_OPTIONS.map(opt => {
                        const isChosen = selectedVal === opt;
                        return (
                          <div
                            key={opt}
                            onClick={() => applyFilter('price', opt)}
                            style={{
                              padding: '10px 14px',
                              borderRadius: '8px',
                              backgroundColor: isChosen ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                              color: '#ffffff',
                              fontSize: '14.5px',
                              fontWeight: isChosen ? 700 : 500,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              transition: 'background-color 0.15s ease',
                            }}
                            onMouseOver={e => {
                              if (!isChosen) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                            onMouseOut={e => {
                              if (!isChosen) e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                          >
                            <span>{opt}</span>
                            {isChosen && <span style={{ fontSize: '12px' }}>✓</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Make and Model (Desktop clone with width 530px and hidden scrollbar) */}
                {!isMobile && isOpen && item.key === 'makeModel' && (
                  <div
                    className="animate-fade-in hide-scrollbar"
                    onWheel={e => {
                      if (e.deltaY !== 0) {
                        e.currentTarget.scrollLeft += e.deltaY;
                      }
                    }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 4px)',
                      left: 0,
                      width: '530px',
                      maxWidth: '90vw',
                      backgroundColor: '#561381',
                      borderRadius: '16px',
                      boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
                      padding: '24px 28px 28px',
                      color: '#ffffff',
                      zIndex: 100,
                      display: 'flex',
                      gap: '36px',
                      overflowX: 'auto',
                      overflowY: 'hidden',
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      WebkitOverflowScrolling: 'touch',
                    }}
                  >
                    {MAKE_MODEL_DATA.map(brand => (
                      <div
                        key={brand.name}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          minWidth: '135px',
                          flexShrink: 0,
                        }}
                      >
                        <div
                          onClick={() => applyFilter('makeModel', brand.name)}
                          style={{
                            fontSize: '16px',
                            fontWeight: 700,
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '18px',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            transition: 'opacity 0.15s ease',
                          }}
                          onMouseOver={e => (e.currentTarget.style.opacity = '0.8')}
                          onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                        >
                          <span>{brand.name}</span>
                          <ChevronRight size={15} strokeWidth={2.5} color="#ffffff" />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                          {brand.models.map(model => {
                            const isChosen = selectedVal === model || selectedVal === `${brand.name} ${model}`;
                            return (
                              <div
                                key={model}
                                onClick={() => applyFilter('makeModel', `${brand.name} ${model}`)}
                                style={{
                                  fontSize: '15px',
                                  fontWeight: isChosen ? 700 : 500,
                                  color: isChosen ? '#ffffff' : 'rgba(255, 255, 255, 0.92)',
                                  cursor: 'pointer',
                                  whiteSpace: 'nowrap',
                                  textDecoration: isChosen ? 'underline' : 'none',
                                  transition: 'all 0.15s ease',
                                }}
                                onMouseOver={e => {
                                  e.currentTarget.style.color = '#ffffff';
                                  e.currentTarget.style.transform = 'translateX(2px)';
                                }}
                                onMouseOut={e => {
                                  e.currentTarget.style.color = isChosen ? '#ffffff' : 'rgba(255, 255, 255, 0.92)';
                                  e.currentTarget.style.transform = 'translateX(0)';
                                }}
                              >
                                {model}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Year (Desktop) */}
                {!isMobile && isOpen && item.key === 'year' && (
                  <div
                    className="animate-fade-in"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 4px)',
                      left: 0,
                      backgroundColor: '#561381',
                      borderRadius: '16px',
                      boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
                      padding: '20px 24px',
                      color: '#ffffff',
                      zIndex: 100,
                      minWidth: '240px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Manufacturing Year
                      </span>
                      {selectedVal && (
                        <button
                          onClick={() => applyFilter('year', null)}
                          style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer' }}
                        >
                          Clear
                        </button>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {YEAR_OPTIONS.map(yr => {
                        const isChosen = selectedVal === yr;
                        return (
                          <div
                            key={yr}
                            onClick={() => applyFilter('year', yr)}
                            style={{
                              padding: '10px 14px',
                              borderRadius: '8px',
                              backgroundColor: isChosen ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                              color: '#ffffff',
                              fontSize: '14.5px',
                              fontWeight: isChosen ? 700 : 500,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              transition: 'background-color 0.15s ease',
                            }}
                            onMouseOver={e => {
                              if (!isChosen) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                            onMouseOut={e => {
                              if (!isChosen) e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                          >
                            <span>{yr}</span>
                            {isChosen && <span style={{ fontSize: '12px' }}>✓</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Fuel (Desktop) */}
                {!isMobile && isOpen && item.key === 'fuel' && (
                  <div
                    className="animate-fade-in"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 4px)',
                      left: 0,
                      backgroundColor: '#561381',
                      borderRadius: '16px',
                      boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
                      padding: '20px 24px',
                      color: '#ffffff',
                      zIndex: 100,
                      minWidth: '220px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Fuel Type
                      </span>
                      {selectedVal && (
                        <button
                          onClick={() => applyFilter('fuel', null)}
                          style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer' }}
                        >
                          Clear
                        </button>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {FUEL_OPTIONS.map(f => {
                        const isChosen = selectedVal === f;
                        return (
                          <div
                            key={f}
                            onClick={() => applyFilter('fuel', f)}
                            style={{
                              padding: '10px 14px',
                              borderRadius: '8px',
                              backgroundColor: isChosen ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                              color: '#ffffff',
                              fontSize: '14.5px',
                              fontWeight: isChosen ? 700 : 500,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              transition: 'background-color 0.15s ease',
                            }}
                            onMouseOver={e => {
                              if (!isChosen) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                            onMouseOut={e => {
                              if (!isChosen) e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                          >
                            <span>{f}</span>
                            {isChosen && <span style={{ fontSize: '12px' }}>✓</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* KM Driven (Desktop) */}
                {!isMobile && isOpen && item.key === 'km' && (
                  <div
                    className="animate-fade-in"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 4px)',
                      left: 0,
                      backgroundColor: '#561381',
                      borderRadius: '16px',
                      boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
                      padding: '20px 24px',
                      color: '#ffffff',
                      zIndex: 100,
                      minWidth: '260px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Kilometer Driven
                      </span>
                      {selectedVal && (
                        <button
                          onClick={() => applyFilter('km', null)}
                          style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer' }}
                        >
                          Clear
                        </button>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {KM_OPTIONS.map(km => {
                        const isChosen = selectedVal === km;
                        return (
                          <div
                            key={km}
                            onClick={() => applyFilter('km', km)}
                            style={{
                              padding: '10px 14px',
                              borderRadius: '8px',
                              backgroundColor: isChosen ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                              color: '#ffffff',
                              fontSize: '14.5px',
                              fontWeight: isChosen ? 700 : 500,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              transition: 'background-color 0.15s ease',
                            }}
                            onMouseOver={e => {
                              if (!isChosen) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                            onMouseOut={e => {
                              if (!isChosen) e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                          >
                            <span>{km}</span>
                            {isChosen && <span style={{ fontSize: '12px' }}>✓</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Body Type (Desktop) */}
                {!isMobile && isOpen && item.key === 'bodyType' && (
                  <div
                    className="animate-fade-in"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 4px)',
                      right: 0,
                      backgroundColor: '#561381',
                      borderRadius: '16px',
                      boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
                      padding: '20px 24px',
                      color: '#ffffff',
                      zIndex: 100,
                      minWidth: '220px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Body Type
                      </span>
                      {selectedVal && (
                        <button
                          onClick={() => applyFilter('bodyType', null)}
                          style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer' }}
                        >
                          Clear
                        </button>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {BODY_TYPE_OPTIONS.map(bt => {
                        const isChosen = selectedVal === bt;
                        return (
                          <div
                            key={bt}
                            onClick={() => applyFilter('bodyType', bt)}
                            style={{
                              padding: '10px 14px',
                              borderRadius: '8px',
                              backgroundColor: isChosen ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                              color: '#ffffff',
                              fontSize: '14.5px',
                              fontWeight: isChosen ? 700 : 500,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              transition: 'background-color 0.15s ease',
                            }}
                            onMouseOver={e => {
                              if (!isChosen) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                            onMouseOut={e => {
                              if (!isChosen) e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                          >
                            <span>{bt}</span>
                            {isChosen && <span style={{ fontSize: '12px' }}>✓</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Transmission (Desktop) */}
                {!isMobile && isOpen && item.key === 'transmission' && (
                  <div
                    className="animate-fade-in"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 4px)',
                      right: 0,
                      backgroundColor: '#561381',
                      borderRadius: '16px',
                      boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
                      padding: '20px 24px',
                      color: '#ffffff',
                      zIndex: 100,
                      minWidth: '240px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Transmission
                      </span>
                      {selectedVal && (
                        <button
                          onClick={() => applyFilter('transmission', null)}
                          style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer' }}
                        >
                          Clear
                        </button>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {TRANSMISSION_OPTIONS.map(tr => {
                        const isChosen = selectedVal === tr.name;
                        return (
                          <div
                            key={tr.name}
                            onClick={() => applyFilter('transmission', tr.name)}
                            style={{
                              padding: '10px 14px',
                              borderRadius: '8px',
                              backgroundColor: isChosen ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                              color: '#ffffff',
                              cursor: 'pointer',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '2px',
                              transition: 'background-color 0.15s ease',
                            }}
                            onMouseOver={e => {
                              if (!isChosen) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                            onMouseOut={e => {
                              if (!isChosen) e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <span style={{ fontSize: '15px', fontWeight: isChosen ? 700 : 600 }}>{tr.name}</span>
                              {isChosen && <span style={{ fontSize: '12px' }}>✓</span>}
                            </div>
                            <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.65)' }}>{tr.subtypes}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* ========================================================
          MOBILE BOTTOM SHEET FILTER MODAL (Screens <= 768px)
         ======================================================== */}
      {isMobile && openDropdown && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10001,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          {/* Dark backdrop */}
          <div
            onClick={() => setOpenDropdown(null)}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(3px)',
            }}
          />

          {/* Bottom Sheet Card */}
          <div
            className="animate-slide-up"
            style={{
              position: 'relative',
              backgroundColor: '#561381',
              color: '#ffffff',
              borderRadius: '24px 24px 0 0',
              padding: '16px 20px 24px',
              maxHeight: '80vh',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.5)',
              zIndex: 10,
              overflow: 'hidden',
            }}
          >
            {/* Drag Handle */}
            <div
              style={{
                width: '40px',
                height: '4px',
                borderRadius: '2px',
                backgroundColor: 'rgba(255, 255, 255, 0.35)',
                margin: '0 auto 14px',
              }}
            />

            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '14px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
                marginBottom: '14px',
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>
                {navItems.find(n => n.key === openDropdown)?.label}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {selectedFilters[openDropdown] && (
                  <button
                    onClick={(e) => clearFilter(openDropdown, e)}
                    style={{ fontSize: '13px', fontWeight: 600, color: '#ffb3c0', cursor: 'pointer' }}
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={() => setOpenDropdown(null)}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Scrollable Content inside Sheet */}
            <div className="hide-scrollbar" style={{ overflowY: 'auto', flex: 1, paddingBottom: '16px' }}>
              {/* 1. Make and Model on Mobile */}
              {openDropdown === 'makeModel' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {/* Brand Selector Pills */}
                  <div
                    className="hide-scrollbar"
                    style={{
                      display: 'flex',
                      gap: '8px',
                      overflowX: 'auto',
                      paddingBottom: '8px',
                    }}
                  >
                    {MAKE_MODEL_DATA.map(brand => {
                      const isActive = activeBrandTab === brand.name;
                      return (
                        <button
                          key={brand.name}
                          onClick={() => setActiveBrandTab(brand.name)}
                          style={{
                            padding: '8px 14px',
                            borderRadius: '20px',
                            backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.14)',
                            color: isActive ? '#561381' : '#ffffff',
                            fontSize: '13.5px',
                            fontWeight: 700,
                            whiteSpace: 'nowrap',
                            cursor: 'pointer',
                            flexShrink: 0,
                          }}
                        >
                          {brand.name}
                        </button>
                      );
                    })}
                  </div>

                  {/* Models for active brand */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div
                      onClick={() => applyFilter('makeModel', activeBrandTab)}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        backgroundColor: selectedFilters.makeModel === activeBrandTab ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                        color: '#ffffff',
                        fontSize: '15px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                      }}
                    >
                      <span>All {activeBrandTab} Cars</span>
                      {selectedFilters.makeModel === activeBrandTab && <Check size={16} />}
                    </div>

                    {MAKE_MODEL_DATA.find(b => b.name === activeBrandTab)?.models.map(model => {
                      const fullName = `${activeBrandTab} ${model}`;
                      const isChosen = selectedFilters.makeModel === fullName || selectedFilters.makeModel === model;
                      return (
                        <div
                          key={model}
                          onClick={() => applyFilter('makeModel', fullName)}
                          style={{
                            padding: '12px 14px',
                            borderRadius: '10px',
                            backgroundColor: isChosen ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                            color: '#ffffff',
                            fontSize: '14.5px',
                            fontWeight: isChosen ? 700 : 500,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                          }}
                        >
                          <span>{model}</span>
                          {isChosen && <Check size={16} />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 2. Price Range on Mobile */}
              {openDropdown === 'price' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {PRICE_OPTIONS.map(opt => {
                    const isChosen = selectedFilters.price === opt;
                    return (
                      <div
                        key={opt}
                        onClick={() => applyFilter('price', opt)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '10px',
                          backgroundColor: isChosen ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                          color: '#ffffff',
                          fontSize: '15px',
                          fontWeight: isChosen ? 700 : 500,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          cursor: 'pointer',
                        }}
                      >
                        <span>{opt}</span>
                        {isChosen && <Check size={16} />}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* 3. Year on Mobile */}
              {openDropdown === 'year' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {YEAR_OPTIONS.map(yr => {
                    const isChosen = selectedFilters.year === yr;
                    return (
                      <div
                        key={yr}
                        onClick={() => applyFilter('year', yr)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '10px',
                          backgroundColor: isChosen ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                          color: '#ffffff',
                          fontSize: '15px',
                          fontWeight: isChosen ? 700 : 500,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          cursor: 'pointer',
                        }}
                      >
                        <span>{yr}</span>
                        {isChosen && <Check size={16} />}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* 4. Fuel on Mobile */}
              {openDropdown === 'fuel' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {FUEL_OPTIONS.map(f => {
                    const isChosen = selectedFilters.fuel === f;
                    return (
                      <div
                        key={f}
                        onClick={() => applyFilter('fuel', f)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '10px',
                          backgroundColor: isChosen ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                          color: '#ffffff',
                          fontSize: '15px',
                          fontWeight: isChosen ? 700 : 500,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          cursor: 'pointer',
                        }}
                      >
                        <span>{f}</span>
                        {isChosen && <Check size={16} />}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* 5. KM Driven on Mobile */}
              {openDropdown === 'km' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {KM_OPTIONS.map(km => {
                    const isChosen = selectedFilters.km === km;
                    return (
                      <div
                        key={km}
                        onClick={() => applyFilter('km', km)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '10px',
                          backgroundColor: isChosen ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                          color: '#ffffff',
                          fontSize: '15px',
                          fontWeight: isChosen ? 700 : 500,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          cursor: 'pointer',
                        }}
                      >
                        <span>{km}</span>
                        {isChosen && <Check size={16} />}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* 6. Body Type on Mobile */}
              {openDropdown === 'bodyType' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {BODY_TYPE_OPTIONS.map(bt => {
                    const isChosen = selectedFilters.bodyType === bt;
                    return (
                      <div
                        key={bt}
                        onClick={() => applyFilter('bodyType', bt)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '10px',
                          backgroundColor: isChosen ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                          color: '#ffffff',
                          fontSize: '15px',
                          fontWeight: isChosen ? 700 : 500,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          cursor: 'pointer',
                        }}
                      >
                        <span>{bt}</span>
                        {isChosen && <Check size={16} />}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* 7. Transmission on Mobile */}
              {openDropdown === 'transmission' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {TRANSMISSION_OPTIONS.map(tr => {
                    const isChosen = selectedFilters.transmission === tr.name;
                    return (
                      <div
                        key={tr.name}
                        onClick={() => applyFilter('transmission', tr.name)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '10px',
                          backgroundColor: isChosen ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                          color: '#ffffff',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '15px', fontWeight: isChosen ? 700 : 600 }}>{tr.name}</div>
                          <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)' }}>{tr.subtypes}</div>
                        </div>
                        {isChosen && <Check size={16} />}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
