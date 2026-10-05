import React from 'react';
import {
  ChevronRight,
  Car,
  Tag,
  Shield,
  FileText,
  HelpCircle,
  Phone,
  RefreshCw,
  Wrench,
  Calculator,
  MapPin,
  Star,
  BookOpen,
  Info,
  DollarSign,
  Apple,
  X,
  FileCheck,
  Search,
} from 'lucide-react';

export default function MobileNavDrawer({
  isOpen,
  onClose,
  onOpenAccountModal,
  onBrowseCars,
  onOpenSell,
}) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
      }}
    >
      {/* 1. Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(3px)',
        }}
      />

      {/* 2. Drawer Panel (White, exact Spinny structure) */}
      <div
        style={{
          position: 'relative',
          width: '84vw',
          maxWidth: '340px',
          height: '100%',
          backgroundColor: '#ffffff',
          color: '#2e054e',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '4px 0 30px rgba(0, 0, 0, 0.35)',
          zIndex: 10,
          animation: 'slideInLeft 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Top Purple Banner: Mascot + Login/Signup > (Matching Screenshot 1) */}
        <div
          onClick={() => {
            onClose();
            if (onOpenAccountModal) onOpenAccountModal();
          }}
          style={{
            backgroundColor: '#3b0764',
            padding: '18px 20px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Mascot SVG from Screenshot 1 */}
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: '#7c3aed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
              }}
            >
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                <path d="M20 3L36 19L20 35L4 19Z" fill="#a78bfa" />
                <circle cx="15" cy="18" r="3" fill="#ffffff" />
                <circle cx="15" cy="18" r="1.5" fill="#1e1b4b" />
                <circle cx="25" cy="18" r="3" fill="#ffffff" />
                <circle cx="25" cy="18" r="1.5" fill="#1e1b4b" />
                <path d="M16 24 Q20 28 24 24" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            <span style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.2px' }}>
              Login/Signup
            </span>
          </div>

          <ChevronRight size={20} color="#ffffff" strokeWidth={2.5} />
        </div>

        {/* Home Item directly below purple banner */}
        <div
          onClick={() => {
            onClose();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid #f0f0f4',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            flexShrink: 0,
            backgroundColor: '#ffffff',
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              backgroundColor: '#ed264f',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 900,
            }}
          >
            S
          </div>
          <span style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>Home</span>
        </div>

        {/* Scrollable Drawer Content (BUY, SELL, QUICK CHECKS) */}
        <div
          className="hide-scrollbar"
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* ========================================================
              SECTION 1: BUY (Matching Screenshot 1)
             ======================================================== */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#888888', letterSpacing: '0.6px', marginBottom: '10px' }}>
              BUY
            </div>

            {/* Subtitle: By category */}
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#2e054e', marginBottom: '12px' }}>
              By category
            </div>

            {/* 4 Category Cards in a row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '20px' }}>
              {/* Card 1: MAX */}
              <div
                onClick={() => {
                  onClose();
                  if (onBrowseCars) onBrowseCars();
                }}
                style={{
                  backgroundColor: '#fff0f2',
                  borderRadius: '12px',
                  padding: '10px 4px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: '1px solid #ffe4e6',
                }}
              >
                <div style={{ width: '20px', height: '20px', margin: '0 auto 4px', borderRadius: '4px', border: '1.5px solid #e11d48', color: '#e11d48', fontSize: '10px', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  S
                </div>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#e11d48', marginBottom: '6px' }}>MAX</div>
                <div style={{ fontSize: '10px', color: '#555555', lineHeight: 1.2 }}>Luxury<br />cars</div>
              </div>

              {/* Card 2: Assured+ */}
              <div
                onClick={() => {
                  onClose();
                  if (onBrowseCars) onBrowseCars();
                }}
                style={{
                  backgroundColor: '#f5effb',
                  borderRadius: '12px',
                  padding: '10px 4px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: '1px solid #ede9fe',
                }}
              >
                <div style={{ width: '20px', height: '20px', margin: '0 auto 4px', borderRadius: '4px', border: '1.5px solid #561381', color: '#561381', fontSize: '10px', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  S
                </div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#440274', marginBottom: '6px' }}>
                  Assured<span style={{ color: '#ed264f' }}>+</span>
                </div>
                <div style={{ fontSize: '10px', color: '#555555', lineHeight: 1.2 }}>Premium<br />benefits</div>
              </div>

              {/* Card 3: Assured */}
              <div
                onClick={() => {
                  onClose();
                  if (onBrowseCars) onBrowseCars();
                }}
                style={{
                  backgroundColor: '#f5effb',
                  borderRadius: '12px',
                  padding: '10px 4px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: '1px solid #ede9fe',
                }}
              >
                <div style={{ width: '20px', height: '20px', margin: '0 auto 4px', borderRadius: '4px', border: '1.5px solid #561381', color: '#561381', fontSize: '10px', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  S
                </div>
                <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#561381', marginBottom: '6px' }}>Assured</div>
                <div style={{ fontSize: '10px', color: '#555555', lineHeight: 1.2 }}>Quality<br />cars</div>
              </div>

              {/* Card 4: budget */}
              <div
                onClick={() => {
                  onClose();
                  if (onBrowseCars) onBrowseCars();
                }}
                style={{
                  backgroundColor: '#edf2fe',
                  borderRadius: '12px',
                  padding: '10px 4px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: '1px solid #dbeafe',
                }}
              >
                <div style={{ width: '20px', height: '20px', margin: '0 auto 4px', borderRadius: '4px', border: '1.5px solid #2563eb', color: '#2563eb', fontSize: '10px', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  S
                </div>
                <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#2563eb', marginBottom: '6px' }}>budget</div>
                <div style={{ fontSize: '10px', color: '#555555', lineHeight: 1.2 }}>Value<br />picks</div>
              </div>
            </div>

            {/* Subtitle: By body type */}
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#2e054e', marginBottom: '14px' }}>
              By body type
            </div>

            {/* 4 Car body types */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '16px' }}>
              {[
                { name: 'SUV', img: '/assets/cars/sp_car_2.png' },
                { name: 'MUV', img: '/assets/cars/sp_car_5.png' },
                { name: 'Hatchback', img: '/assets/cars/sp_car_0.png' },
                { name: 'Sedan', img: '/assets/cars/sp_car_1.png' },
              ].map((bt, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    onClose();
                    if (onBrowseCars) onBrowseCars();
                  }}
                  style={{ textAlign: 'center', cursor: 'pointer' }}
                >
                  <div style={{ height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '6px' }}>
                    <img src={bt.img} alt={bt.name} style={{ maxHeight: '34px', maxWidth: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#444444' }}>{bt.name}</div>
                </div>
              ))}
            </div>

            {/* View all cars > Pill Button */}
            <button
              onClick={() => {
                onClose();
                if (onBrowseCars) onBrowseCars();
              }}
              style={{
                width: '100%',
                backgroundColor: '#f1f1f4',
                color: '#2e054e',
                fontSize: '14px',
                fontWeight: 700,
                padding: '12px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                marginBottom: '24px',
              }}
            >
              <span>View all cars</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* ========================================================
              SECTION 2: SELL (Matching Screenshot 2)
             ======================================================== */}
          <div style={{ borderTop: '1px solid #f0f0f4', paddingTop: '16px', marginBottom: '20px' }}>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#888888', letterSpacing: '0.6px', marginBottom: '12px' }}>
              SELL
            </div>

            {[
              { label: 'Sell car', icon: Car, action: onOpenSell },
              { label: 'Scrap car', icon: Wrench, action: () => alert('Spinny Scrap Car') },
              { label: 'Car valuation', icon: Search, action: onOpenSell },
              { label: 'Finance', icon: DollarSign, href: '#loan' },
              { label: 'Exchange', icon: RefreshCw, isNew: true, action: onOpenSell },
              { label: 'Pro service', icon: Wrench, isNew: true, href: '#service' },
              { label: 'Insurance', icon: Shield, href: '#insurance' },
              { label: 'Check challan', icon: FileText, isNew: true, href: '#challan' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    onClose();
                    if (item.action) item.action();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '13px 4px',
                    borderBottom: '1px solid #f5f5f7',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#2e054e', fontSize: '14.5px', fontWeight: 600 }}>
                    <Icon size={19} color="#561381" strokeWidth={1.9} />
                    <span>{item.label}</span>
                  </div>

                  {item.isNew && (
                    <span
                      style={{
                        backgroundColor: '#561381',
                        color: '#ffffff',
                        fontSize: '10px',
                        fontWeight: 800,
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        letterSpacing: '0.4px',
                      }}
                    >
                      NEW
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* ========================================================
              SECTION 3: QUICK CHECKS (Matching Screenshot 3)
             ======================================================== */}
          <div style={{ borderTop: '1px solid #f0f0f4', paddingTop: '16px', marginBottom: '24px' }}>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#888888', letterSpacing: '0.6px', marginBottom: '12px' }}>
              QUICK CHECKS
            </div>

            {[
              { label: 'Check RTO details', icon: FileCheck },
              { label: 'Check RC status', icon: FileCheck },
              { label: 'PUC Certificate', icon: FileCheck },
              { label: 'Service cost calculator', icon: Calculator },
              { label: 'EMI calculator', icon: Calculator },
              { label: 'Spinny partners', icon: Star },
              { label: 'Car hub locations', icon: MapPin },
              { label: 'FAQs', icon: HelpCircle },
              { label: 'Customer reviews', icon: Star },
              { label: 'Blog', icon: BookOpen },
              { label: 'About us', icon: Info },
            ].map((qc, idx) => {
              const Icon = qc.icon;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    onClose();
                    alert(`Spinny: ${qc.label}`);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '13px 4px',
                    borderBottom: '1px solid #f5f5f7',
                    cursor: 'pointer',
                    gap: '14px',
                    color: '#2e054e',
                    fontSize: '14.5px',
                    fontWeight: 600,
                  }}
                >
                  <Icon size={19} color="#561381" strokeWidth={1.9} />
                  <span>{qc.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Bottom Sticky / Pinned Footer (Matching Screenshot 1, 2, 3) */}
        <div
          style={{
            padding: '14px 18px',
            backgroundColor: '#ffffff',
            borderTop: '1px solid #f0f0f4',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            flexShrink: 0,
          }}
        >
          {/* Helpline Box: Call us at 727-727-7275 */}
          <a
            href="tel:7277277275"
            style={{
              backgroundColor: '#faf5ff',
              borderRadius: '12px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              border: '1px solid #f3e8ff',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#561381',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Phone size={15} color="#ffffff" fill="#ffffff" />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#666666' }}>Need help?</div>
              <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#2e054e' }}>
                Call us at 727-727-7275
              </div>
            </div>
          </a>

          {/* Button: Get the Spinny App */}
          <button
            onClick={() => alert('Download Spinny App: Available on Apple App Store & Google Play Store')}
            style={{
              width: '100%',
              backgroundColor: '#f1f1f4',
              color: '#2e054e',
              fontSize: '13.5px',
              fontWeight: 700,
              padding: '11px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <Apple size={16} fill="#2e054e" />
            <span>Get the Spinny App</span>
          </button>
        </div>
      </div>
    </div>
  );
}
