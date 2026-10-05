import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Search,
  Phone,
  ExternalLink,
  Shield,
  Car,
  Heart,
  Sparkles,
  Menu,
  X,
  Tag,
  DollarSign,
  FileText,
  Info,
  HelpCircle,
  MapPin,
  User,
} from 'lucide-react';
import SpinnyLogo from './SpinnyLogo';
import ShortlistIcon from './ShortlistIcon';
import AccountIcon from './AccountIcon';
import MobileNavDrawer from './MobileNavDrawer';

export default function Header({
  selectedCity,
  onOpenCityModal,
  onOpenSearchModal,
  onOpenAccountModal,
  onOpenShortlist,
  shortlistCount = 0,
}) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchPlaceholderIdx, setSearchPlaceholderIdx] = useState(0);

  const searchKeywords = ['model', 'budget', 'brand', 'body type'];

  useEffect(() => {
    const interval = setInterval(() => {
      setSearchPlaceholderIdx(prev => (prev + 1) % searchKeywords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      style={{
        backgroundColor: 'var(--ds-header-bg)',
        width: '100%',
        position: 'relative',
        zIndex: 100,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* ========================================================
          DESKTOP HEADER (Screens > 768px)
         ======================================================== */}
      <div
        className="desktop-only"
        style={{
          maxWidth: '1360px',
          height: '82px',
          marginInline: 'auto',
          paddingInline: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        {/* Left Side: Logo, City Selector, Search Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1 1 auto', minWidth: 0 }}>
          {/* Spinny Logo */}
          <div style={{ flexShrink: 0, marginRight: '4px' }}>
            <SpinnyLogo height={38} />
          </div>

          {/* Select City Button */}
          <button
            onClick={onOpenCityModal}
            aria-label="Select city"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px',
              height: '46px',
              paddingInline: '18px',
              borderRadius: '32px',
              border: '1.5px solid var(--ds-border-white-translucent)',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              backgroundColor: 'transparent',
              transition: 'all 0.15s ease-in-out',
              flexShrink: 0,
            }}
            onMouseOver={e => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.borderColor = 'var(--ds-border-white-translucent)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <span>{selectedCity || 'Select city'}</span>
            <ChevronDown size={14} color="rgba(255, 255, 255, 0.85)" strokeWidth={2.2} />
          </button>

          {/* Search Bar */}
          <div
            onClick={onOpenSearchModal}
            role="button"
            tabIndex={0}
            aria-label="Search cars"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              height: '46px',
              paddingInline: '16px',
              borderRadius: '32px',
              backgroundColor: 'var(--ds-search-bg)',
              color: '#ffffff',
              cursor: 'pointer',
              width: '100%',
              maxWidth: '300px',
              position: 'relative',
              transition: 'background-color 0.15s ease',
              flexShrink: 1,
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = 'var(--ds-search-bg-hover)')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = 'var(--ds-search-bg)')}
          >
            <Search size={16} color="#ffffff" strokeWidth={2.2} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px' }}>
              <span style={{ color: 'var(--ds-text-white-muted)' }}>Search by</span>
              <span
                key={searchPlaceholderIdx}
                className="animate-fade-in"
                style={{ color: '#ffffff', fontWeight: 500 }}
              >
                {searchKeywords[searchPlaceholderIdx]}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Buy car, Sell car, More, Shortlisted, Account, Call us at */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {/* Buy car ▾ */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('buy')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '10px 14px',
                color: '#ffffff',
                fontSize: '14.5px',
                fontWeight: 600,
                borderRadius: '8px',
                transition: 'opacity 0.15s ease',
              }}
              onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseOut={e => (e.currentTarget.style.opacity = '1')}
            >
              <span>Buy car</span>
              <ChevronDown
                size={14}
                style={{
                  transform: activeDropdown === 'buy' ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s',
                }}
              />
            </button>

            {/* Buy Car Dropdown Panel */}
            {activeDropdown === 'buy' && (
              <div
                className="animate-fade-in"
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  width: '380px',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: 'var(--ds-shadow-dropdown)',
                  padding: '20px',
                  color: '#222222',
                  zIndex: 50,
                }}
              >
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '8px' }}>
                    Popular Categories
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                    {['Hatchbacks', 'Sedans', 'SUVs', 'Luxury Cars', 'Cars under 5 Lakh', 'Automatic Cars'].map(item => (
                      <a
                        key={item}
                        href="#featured-cars"
                        style={{
                          padding: '8px 10px',
                          borderRadius: '8px',
                          fontSize: '13.5px',
                          fontWeight: 500,
                          color: '#333',
                          backgroundColor: '#f8f9fa',
                          transition: 'background 0.15s',
                        }}
                        onMouseOver={e => (e.currentTarget.style.backgroundColor = 'var(--ds-primary-pink-light)')}
                        onMouseOut={e => (e.currentTarget.style.backgroundColor = '#f8f9fa')}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: '12px', borderTop: '1px solid #f0f0f0' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '8px' }}>
                    Spinny Assured Benefits
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12.5px', color: '#555' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--ds-primary-pink)' }}>✓</span> 200-Point Quality Inspection
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--ds-primary-pink)' }}>✓</span> 1-Year Comprehensive Warranty
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--ds-primary-pink)' }}>✓</span> 5-Day Money-Back Guarantee
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sell car ▾ */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('sell')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '10px 14px',
                color: '#ffffff',
                fontSize: '14.5px',
                fontWeight: 600,
                borderRadius: '8px',
                transition: 'opacity 0.15s ease',
              }}
              onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseOut={e => (e.currentTarget.style.opacity = '1')}
            >
              <span>Sell car</span>
              <ChevronDown
                size={14}
                style={{
                  transform: activeDropdown === 'sell' ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s',
                }}
              />
            </button>

            {/* Sell Car Dropdown */}
            {activeDropdown === 'sell' && (
              <div
                className="animate-fade-in"
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  width: '280px',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: 'var(--ds-shadow-dropdown)',
                  padding: '16px',
                  color: '#222222',
                  zIndex: 50,
                }}
              >
                <div style={{ padding: '8px 4px' }}>
                  <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#2e054e', marginBottom: '4px' }}>
                    Instant Car Valuation
                  </div>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '12px' }}>
                    Sell your car from home in 3 simple steps at best price guaranteed.
                  </div>
                  <button
                    onClick={() => alert('Spinny Sell Car: Get instant online valuation at zero fee!')}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--ds-primary-pink)',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: 700,
                      padding: '10px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    Get Car Price
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* More ▾ */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('more')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '10px 14px',
                color: '#ffffff',
                fontSize: '14.5px',
                fontWeight: 600,
                borderRadius: '8px',
                transition: 'opacity 0.15s ease',
              }}
              onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseOut={e => (e.currentTarget.style.opacity = '1')}
            >
              <span>More</span>
              <ChevronDown
                size={14}
                style={{
                  transform: activeDropdown === 'more' ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s',
                }}
              />
            </button>

            {/* More Dropdown */}
            {activeDropdown === 'more' && (
              <div
                className="animate-fade-in"
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  width: '260px',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: 'var(--ds-shadow-dropdown)',
                  padding: '14px',
                  color: '#222222',
                  zIndex: 50,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                {['Spinny Park', 'Used Car Loan', 'Car Insurance', 'Spinny Post Blog', 'About Us', 'Contact Us'].map(item => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '13.5px',
                      fontWeight: 500,
                      color: '#333',
                      transition: 'background 0.15s',
                    }}
                    onMouseOver={e => (e.currentTarget.style.backgroundColor = '#f4f4f7')}
                    onMouseOut={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Shortlisted */}
          <button
            onClick={onOpenShortlist}
            aria-label="Shortlisted cars"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px 14px',
              color: '#ffffff',
              cursor: 'pointer',
              position: 'relative',
              transition: 'transform 0.15s ease',
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div style={{ position: 'relative' }}>
              <ShortlistIcon size={20} />
              {shortlistCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-8px',
                    backgroundColor: 'var(--ds-primary-pink)',
                    color: '#fff',
                    fontSize: '10px',
                    fontWeight: 700,
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {shortlistCount}
                </span>
              )}
            </div>
            <span style={{ fontSize: '13px', fontWeight: 600, marginTop: '2px', whiteSpace: 'nowrap' }}>
              Shortlisted
            </span>
          </button>

          {/* Account ▾ */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('account')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={onOpenAccountModal}
              aria-label="Account menu"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px 14px',
                color: '#ffffff',
                cursor: 'pointer',
                position: 'relative',
                transition: 'transform 0.15s ease',
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <AccountIcon size={20} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginTop: '2px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap' }}>Account</span>
                <ChevronDown size={11} strokeWidth={2.4} />
              </div>
            </button>

            {/* Account dropdown */}
            {activeDropdown === 'account' && (
              <div
                className="animate-fade-in"
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  width: '240px',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: 'var(--ds-shadow-dropdown)',
                  padding: '16px',
                  color: '#222222',
                  zIndex: 50,
                }}
              >
                <button
                  onClick={onOpenAccountModal}
                  style={{
                    width: '100%',
                    height: '40px',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--ds-primary-pink)',
                    color: '#ffffff',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Login / Sign Up
                </button>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px' }}>
                  <a href="#" style={{ padding: '6px 8px', borderRadius: '6px', color: '#444' }}>My Bookings</a>
                  <a href="#" style={{ padding: '6px 8px', borderRadius: '6px', color: '#444' }}>My Orders</a>
                  <a href="#" style={{ padding: '6px 8px', borderRadius: '6px', color: '#444' }}>Sell Requests</a>
                  <a href="#" style={{ padding: '6px 8px', borderRadius: '6px', color: '#444' }}>Help & Support</a>
                </div>
              </div>
            )}
          </div>

          {/* Call us at 727-727-7275 */}
          <a
            href="tel:7277277275"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              paddingLeft: '14px',
              borderLeft: '1px solid var(--ds-border-white-translucent)',
              color: '#ffffff',
              marginLeft: '4px',
              transition: 'opacity 0.15s ease',
            }}
            onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseOut={e => (e.currentTarget.style.opacity = '1')}
          >
            <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 500 }}>
              Call us at
            </span>
            <span style={{ fontSize: '14.5px', fontWeight: 700, whiteSpace: 'nowrap', letterSpacing: '0.2px' }}>
              727-727-7275
            </span>
          </a>
        </div>
      </div>

      {/* ========================================================
          MOBILE COMPACT HEADER (Screens <= 768px)
         ======================================================== */}
      <div
        className="mobile-only"
        style={{
          width: '100%',
          paddingInline: '14px',
          paddingBlock: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '42px',
          }}
        >
          {/* Left: Menu Hamburger + Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              <Menu size={24} />
            </button>
            <SpinnyLogo height={28} />
          </div>

          {/* Right: City selector + Search + Heart + Account */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* City selector pill */}
            <button
              onClick={onOpenCityModal}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '5px 10px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 500,
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                whiteSpace: 'nowrap',
              }}
            >
              <MapPin size={11} color="#ed264f" />
              <span>{selectedCity ? selectedCity.split(' ')[0] : 'City'}</span>
              <ChevronDown size={12} />
            </button>

            {/* Search Icon */}
            <button
              onClick={onOpenSearchModal}
              aria-label="Search"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              <Search size={16} />
            </button>

            {/* Shortlist Heart */}
            <button
              onClick={onOpenShortlist}
              aria-label="Shortlist"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                position: 'relative',
              }}
            >
              <Heart size={16} />
              {shortlistCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-3px',
                    right: '-3px',
                    backgroundColor: '#ed264f',
                    color: '#fff',
                    fontSize: '9px',
                    fontWeight: 700,
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {shortlistCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Capsule */}
        <div
          onClick={onOpenSearchModal}
          style={{
            marginTop: '8px',
            height: '40px',
            borderRadius: '24px',
            backgroundColor: 'rgba(0, 0, 0, 0.28)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            paddingInline: '14px',
            gap: '8px',
            cursor: 'pointer',
          }}
        >
          <Search size={15} color="#ed264f" />
          <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>
            Search by car, model, budget...
          </span>
        </div>
      </div>

      {/* ========================================================
          MOBILE NAVIGATION DRAWER (Matching all 3 reference screenshots)
         ======================================================== */}
      <MobileNavDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenAccountModal={onOpenAccountModal}
        onBrowseCars={() => {
          const el = document.getElementById('featured-cars');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenSell={() => alert('Spinny Sell Car: Get instant valuation at zero fee!')}
      />
    </header>
  );
}
