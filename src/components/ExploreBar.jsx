import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, X } from 'lucide-react';

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
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
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
        overflow: 'visible',
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          marginInline: 'auto',
          paddingInline: '24px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          height: '48px',
          overflow: 'visible',
        }}
      >
        {/* Explore By label */}
        <div
          style={{
            color: 'rgba(255, 255, 255, 0.65)',
            fontSize: '14px',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            marginRight: '22px',
          }}
        >
          Explore By
        </div>

        {/* Filter Tab Buttons */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            listStyle: 'none',
            gap: '6px',
            margin: 0,
            padding: 0,
            overflow: 'visible',
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
                }}
              >
                <button
                  onClick={() => toggleDropdown(item.key)}
                  aria-expanded={isOpen}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    paddingInline: '14px',
                    height: '36px',
                    borderRadius: '6px',
                    backgroundColor: isOpen ? '#561381' : 'transparent',
                    border: isOpen
                      ? '1.5px solid #ffffff'
                      : selectedVal
                      ? '1px solid rgba(255, 255, 255, 0.6)'
                      : '1.5px solid transparent',
                    color: '#ffffff',
                    fontSize: '14px',
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
                        width: '16px',
                        height: '16px',
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
                    <ChevronUp size={14} color="#ffffff" strokeWidth={2.4} />
                  ) : (
                    <ChevronDown size={14} color="#ffffff" strokeWidth={2.4} />
                  )}
                </button>

                {/* ========================================================
                    1. Price Range Dropdown (Pure Deep Purple #561381)
                   ======================================================== */}
                {isOpen && item.key === 'price' && (
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

                {/* ========================================================
                    2. Make and Model Dropdown (Exact Clone of Screenshot)
                   ======================================================== */}
                {isOpen && item.key === 'makeModel' && (
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
                        {/* Brand Heading with Right Arrow */}
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

                        {/* Top 5 Models list */}
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

                {/* ========================================================
                    3. Year Dropdown (Pure Deep Purple #561381)
                   ======================================================== */}
                {isOpen && item.key === 'year' && (
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

                {/* ========================================================
                    4. Fuel Dropdown (No Icons/Stickers, Pure Deep Purple)
                   ======================================================== */}
                {isOpen && item.key === 'fuel' && (
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

                {/* ========================================================
                    5. KM Driven Dropdown (Pure Deep Purple #561381)
                   ======================================================== */}
                {isOpen && item.key === 'km' && (
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

                {/* ========================================================
                    6. Body Type Dropdown (No Stickers/Icons, Pure Deep Purple)
                   ======================================================== */}
                {isOpen && item.key === 'bodyType' && (
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

                {/* ========================================================
                    7. Transmission Dropdown (No Icons, Pure Deep Purple)
                   ======================================================== */}
                {isOpen && item.key === 'transmission' && (
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
    </div>
  );
}
