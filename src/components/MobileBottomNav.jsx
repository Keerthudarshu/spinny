import React, { useState } from 'react';
import { Home, Car, Tag, Heart, User } from 'lucide-react';

export default function MobileBottomNav({
  shortlistCount = 0,
  onOpenShortlist,
  onOpenAccount,
  onOpenSell,
  onBrowseCars,
}) {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      action: () => {
        setActiveTab('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 'buy',
      label: 'Buy Car',
      icon: Car,
      action: () => {
        setActiveTab('buy');
        if (onBrowseCars) onBrowseCars();
      },
    },
    {
      id: 'sell',
      label: 'Sell Car',
      icon: Tag,
      action: () => {
        setActiveTab('sell');
        if (onOpenSell) onOpenSell();
      },
    },
    {
      id: 'shortlisted',
      label: 'Shortlisted',
      icon: Heart,
      badge: shortlistCount,
      action: () => {
        setActiveTab('shortlisted');
        if (onOpenShortlist) onOpenShortlist();
      },
    },
    {
      id: 'account',
      label: 'Account',
      icon: User,
      action: () => {
        setActiveTab('account');
        if (onOpenAccount) onOpenAccount();
      },
    },
  ];

  return (
    <nav
      className="mobile-only"
      aria-label="Mobile Bottom Navigation"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '60px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e9e9ee',
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.08)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingInline: '8px',
      }}
    >
      {navItems.map(item => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={item.action}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3px',
              padding: '6px 12px',
              color: isActive ? '#ed264f' : '#6b7280',
              cursor: 'pointer',
              position: 'relative',
              transition: 'color 0.15s ease',
              flex: 1,
            }}
          >
            <div style={{ position: 'relative' }}>
              <Icon size={20} strokeWidth={isActive ? 2.4 : 1.8} fill={isActive && item.id === 'shortlisted' ? '#ed264f' : 'none'} />
              {item.badge > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-8px',
                    backgroundColor: '#ed264f',
                    color: '#ffffff',
                    fontSize: '10px',
                    fontWeight: 700,
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1.5px solid #ffffff',
                  }}
                >
                  {item.badge}
                </span>
              )}
            </div>
            <span style={{ fontSize: '11px', fontWeight: isActive ? 600 : 500 }}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
