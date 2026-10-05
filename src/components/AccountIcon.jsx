import React from 'react';

export default function AccountIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* Rotated diamond with rounded corners */}
      <rect
        x="12"
        y="1.5"
        width="14.8"
        height="14.8"
        rx="3.5"
        transform="rotate(45 12 1.5)"
        stroke="currentColor"
        strokeWidth="1.9"
        fill="none"
      />
      {/* Left eye dot */}
      <circle cx="9.6" cy="10" r="1.3" fill="currentColor" />
      {/* Right eye dot */}
      <circle cx="14.4" cy="10" r="1.3" fill="currentColor" />
      {/* Happy smile arc */}
      <path
        d="M9 13.5C9.5 15.5 11 16.5 12 16.5C13 16.5 14.5 15.5 15 13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="currentColor"
      />
    </svg>
  );
}
