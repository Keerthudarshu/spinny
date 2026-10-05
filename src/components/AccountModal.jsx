import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import AccountIcon from './AccountIcon';

export default function AccountModal({ isOpen, onClose }) {
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [otp, setOtp] = useState(['', '', '', '']);

  if (!isOpen) return null;

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setStep('otp');
    }
  };

  const handleOtpChange = (val, idx) => {
    if (val.length <= 1) {
      const newOtp = [...otp];
      newOtp[idx] = val;
      setOtp(newOtp);
      // Auto-focus next input
      if (val && idx < 3) {
        document.getElementById(`otp-input-${idx + 1}`)?.focus();
      }
    }
  };

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
          maxWidth: '460px',
          boxShadow: 'var(--ds-shadow-modal)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header graphic banner */}
        <div
          style={{
            backgroundColor: 'var(--ds-header-bg)',
            padding: '28px 24px 24px',
            color: '#ffffff',
            position: 'relative',
          }}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#fff',
            }}
          >
            <X size={16} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AccountIcon size={20} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700 }}>
              {step === 'phone' ? 'Login or Sign up' : 'Verify OTP'}
            </h3>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.4 }}>
            {step === 'phone'
              ? 'Access shortlisted cars, booking status, test drives, and personalized recommendations.'
              : `Enter the 4-digit code sent to +91 ${phone}`}
          </p>
        </div>

        {/* Body Form */}
        <div style={{ padding: '24px' }}>
          {step === 'phone' ? (
            <form onSubmit={handlePhoneSubmit}>
              <label style={{ fontSize: '12px', fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Enter Mobile Number
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1.5px solid #d5d7dc',
                  borderRadius: '12px',
                  padding: '12px 14px',
                  marginTop: '8px',
                  marginBottom: '20px',
                  transition: 'border-color 0.2s',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#444' }}>+91</span>
                <input
                  type="tel"
                  placeholder="Enter 10-digit number"
                  maxLength={10}
                  value={phone}
                  onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                  style={{
                    width: '100%',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#222',
                  }}
                  autoFocus
                />
              </div>

              <button
                type="submit"
                disabled={phone.length < 10}
                style={{
                  width: '100%',
                  height: '46px',
                  borderRadius: '9999px',
                  backgroundColor: phone.length >= 10 ? 'var(--ds-primary-pink)' : '#e0e0e0',
                  color: '#ffffff',
                  fontSize: '15px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: phone.length >= 10 ? 'pointer' : 'not-allowed',
                  transition: 'background-color 0.2s',
                }}
              >
                Continue
                <ArrowRight size={16} />
              </button>
            </form>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-input-${idx}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={e => handleOtpChange(e.target.value, idx)}
                    style={{
                      width: '48px',
                      height: '52px',
                      textAlign: 'center',
                      fontSize: '20px',
                      fontWeight: 700,
                      borderRadius: '12px',
                      border: '1.5px solid #ccc',
                      backgroundColor: '#f9f9fb',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  alert('Login successful! Welcome to Spinny.');
                  onClose();
                }}
                style={{
                  width: '100%',
                  height: '46px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--ds-primary-pink)',
                  color: '#ffffff',
                  fontSize: '15px',
                  fontWeight: 600,
                }}
              >
                Verify & Proceed
              </button>

              <div style={{ textAlign: 'center', marginTop: '14px' }}>
                <button
                  type="button"
                  onClick={() => setStep('phone')}
                  style={{ fontSize: '13px', color: '#666', textDecoration: 'underline' }}
                >
                  Change mobile number
                </button>
              </div>
            </div>
          )}

          {/* Spinny assurance icons */}
          <div
            style={{
              marginTop: '24px',
              paddingTop: '16px',
              borderTop: '1px solid #f0f0f0',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#666' }}>
              <ShieldCheck size={16} color="#00a368" />
              <span>Safe & Secure login with OTP</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#666' }}>
              <CheckCircle2 size={16} color="var(--ds-primary-pink)" />
              <span>200-point inspected cars & 1-year warranty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
