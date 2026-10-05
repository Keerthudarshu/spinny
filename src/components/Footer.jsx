import React from 'react';
import { Phone } from 'lucide-react';
import SpinnyLogo from './SpinnyLogo';

export default function Footer({ onBrowseCars }) {
  return (
    <footer
      style={{
        backgroundColor: '#1e0430',
        color: '#ffffff',
        padding: '64px 24px 40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1240px', marginInline: 'auto' }}>
        {/* Main Grid: Left About & Actions + Right Navigation Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Left Column */}
          <div>
            {/* Spinny Logo */}
            <div style={{ marginBottom: '20px' }}>
              <SpinnyLogo height={36} />
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '13px',
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '12px',
                maxWidth: '420px',
              }}
            >
              Spinny is the most trusted way of buying and selling used cars. Choose from over 10K fully inspected second-hand car models. Select online and book a test drive at your home or at a Spinny Car Hub near you. Get a no-questions-asked* 5-day money back guarantee and a free one-year comprehensive service warranty with Assured Resale Value on every Spinny car.
            </p>

            <p style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.55)', marginBottom: '20px' }}>
              (*)subject to certain terms and conditions.
            </p>

            {/* Social Icons (Instagram, LinkedIn, Facebook, X) */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', color: 'rgba(255, 255, 255, 0.85)' }}>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" aria-label="X / Twitter" style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>


            {/* Corporate Info */}
            <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '4px' }}>
              © 2026 Valuedrive Technologies Limited. All rights reserved.
            </p>
            <p style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)', marginBottom: '28px' }}>
              CIN : U74999HR2019PLC077781
            </p>

            {/* 3 Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <a
                href="tel:7277277275"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#ed264f',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 700,
                  padding: '9px 18px',
                  borderRadius: '9999px',
                }}
              >
                <Phone size={14} fill="#ffffff" />
                <span>727-727-7275</span>
              </a>

              <button
                style={{
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  border: '1.5px solid rgba(255, 255, 255, 0.4)',
                  fontSize: '13px',
                  fontWeight: 600,
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  transition: 'border-color 0.15s',
                }}
                onMouseOver={e => (e.currentTarget.style.borderColor = '#ffffff')}
                onMouseOut={e => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)')}
              >
                Get Instant Quotes
              </button>

              <button
                onClick={onBrowseCars}
                style={{
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  border: '1.5px solid rgba(255, 255, 255, 0.4)',
                  fontSize: '13px',
                  fontWeight: 600,
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  transition: 'border-color 0.15s',
                }}
                onMouseOver={e => (e.currentTarget.style.borderColor = '#ffffff')}
                onMouseOut={e => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)')}
              >
                Browse Cars
              </button>
            </div>
          </div>

          {/* Right Navigation Link Columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '24px 32px',
            }}
          >
            {/* COMPANY */}
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.95)', letterSpacing: '0.8px', marginBottom: '14px' }}>
                COMPANY
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)' }}>
                {['Spinny Assured', 'Who we are', 'Careers', 'Blog', 'Customer reviews', 'Car hub locations', 'Popular car overview', 'FAQ', 'Sitemap'].map(l => (
                  <li key={l}><a href="#" style={{ color: 'inherit' }}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* OFFERINGS */}
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.95)', letterSpacing: '0.8px', marginBottom: '14px' }}>
                OFFERINGS
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)' }}>
                {['Buy car', 'Sell car', 'Used car loan', 'Car service', 'Car insurance', 'Challan', 'Spinny Partners', 'FASTag recharge', 'Autocar India'].map(l => (
                  <li key={l}><a href="#" style={{ color: 'inherit' }}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* E-CHALLAN */}
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.95)', letterSpacing: '0.8px', marginBottom: '14px' }}>
                E-CHALLAN
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)' }}>
                {['E Challan', 'E Challan UP', 'E Challan Kerala', 'E Challan Punjab', 'E Challan Rajasthan', 'E Challan Delhi', 'E Challan Karnataka', 'E Challan Telangana', 'E Challan Haryana', 'E Challan Ahmedabad'].map(l => (
                  <li key={l}><a href="#" style={{ color: 'inherit' }}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* PROCESSES */}
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.95)', letterSpacing: '0.8px', marginBottom: '14px' }}>
                PROCESSES
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)' }}>
                {['How buying works', 'Inspection process'].map(l => (
                  <li key={l}><a href="#" style={{ color: 'inherit' }}>{l}</a></li>
                ))}
              </ul>

              <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.95)', letterSpacing: '0.8px', marginTop: '18px', marginBottom: '14px' }}>
                POLICIES & TERMS
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)' }}>
                {['Privacy policy', 'Terms & conditions'].map(l => (
                  <li key={l}><a href="#" style={{ color: 'inherit' }}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* FINANCE & TOOLS */}
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.95)', letterSpacing: '0.8px', marginBottom: '14px' }}>
                FINANCE & TOOLS
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)' }}>
                {['Service cost calculator', 'EMI calculator'].map(l => (
                  <li key={l}><a href="#" style={{ color: 'inherit' }}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* CONTACT US */}
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.95)', letterSpacing: '0.8px', marginBottom: '14px' }}>
                CONTACT US
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)' }}>
                {['Trade with us', 'Connect with us'].map(l => (
                  <li key={l}><a href="#" style={{ color: 'inherit' }}>{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* City Skyline Silhouette SVG Illustration */}
        <div style={{ position: 'relative', width: '100%', height: '80px', opacity: 0.15, marginBottom: '24px' }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 80" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80V50H40V30H80V50H120V20H150V40H190V60H220V15H260V55H300V35H340V55H380V10H410V45H450V60H500V25H530V50H580V35H620V60H670V15H700V40H740V60H780V30H820V50H860V15H900V55H950V35H1000V55H1040V20H1080V45H1120V60H1160V30H1200V80H0Z" stroke="#ffffff" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Bottom SEO Directory: Buy Used car in / Car repair & servicing in */}
        <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '12px', color: 'rgba(255, 255, 255, 0.55)', lineHeight: 1.8 }}>
          <div style={{ marginBottom: '10px' }}>
            <strong style={{ color: 'rgba(255, 255, 255, 0.85)' }}>Buy Used car in: </strong>
            {['Delhi NCR', 'Bangalore', 'Hyderabad', 'Mumbai', 'Pune', 'Delhi', 'Gurgaon', 'Noida', 'Ahmedabad', 'Chennai', 'Kolkata', 'Lucknow', 'Jaipur', 'Agra', 'Ambala', 'Chandigarh', 'Coimbatore', 'Faridabad', 'Ghaziabad', 'Howrah', 'Jalandhar', 'Jodhpur', 'Kanpur', 'Karnal', 'Kochi', 'Ludhiana', 'Mangaluru', 'Mohali', 'Mysuru', 'Nagpur', 'Nashik', 'Prayagraj', 'Ranchi', 'Sonipat', 'Trivandrum', 'Vadodara', 'Visakhapatnam'].map((c, i) => (
              <span key={c}>
                <a href="#" style={{ color: 'inherit' }}>{c}</a>
                {i < 36 && ' | '}
              </span>
            ))}
          </div>

          <div>
            <strong style={{ color: 'rgba(255, 255, 255, 0.85)' }}>Car repair & servicing in: </strong>
            {['Delhi NCR', 'Bangalore', 'Hyderabad', 'Mumbai', 'Pune', 'Ahmedabad', 'Chennai'].map((c, i) => (
              <span key={c}>
                <a href="#" style={{ color: 'inherit' }}>{c}</a>
                {i < 6 && ' | '}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
