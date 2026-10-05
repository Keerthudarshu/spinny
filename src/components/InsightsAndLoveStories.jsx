import React from 'react';
import { ChevronRight, Star, Users, Car, Smile } from 'lucide-react';

const STATS = [
  {
    value: '4.8/5',
    suffix: 'Our',
    desc: 'average review rating on Google and on Social platforms',
    renderAvatar: () => (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        {/* Purple diamond mascot from Image 3 */}
        <path d="M30 4L54 28L30 52L6 28Z" fill="#7c3aed" stroke="#ffffff" strokeWidth="2.5" />
        {/* Yellow stars above */}
        <polygon points="12,14 14,10 16,14 20,14 17,17 18,21 14,19 10,21 11,17 8,14" fill="#fbbf24" />
        <polygon points="22,8 24,4 26,8 30,8 27,11 28,15 24,13 20,15 21,11 18,8" fill="#fbbf24" />
        <polygon points="32,10 34,6 36,10 40,10 37,13 38,17 34,15 30,17 31,13 28,10" fill="#fbbf24" />
        {/* Cartoon Face: Big glasses / eyes */}
        <circle cx="23" cy="27" r="4.5" fill="#ffffff" />
        <circle cx="23" cy="27" r="2" fill="#1e1b4b" />
        <circle cx="37" cy="27" r="4.5" fill="#ffffff" />
        <circle cx="37" cy="27" r="2" fill="#1e1b4b" />
        {/* Smile */}
        <path d="M25 35 Q30 40 35 35" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Raised hand pointing up */}
        <path d="M42 22 L46 16 Q48 15 49 17 L47 24" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="#7c3aed" />
      </svg>
    ),
  },
  {
    value: 'Over 1 Lakh',
    suffix: '',
    desc: 'Happy families driving Spinny assured cars across India',
    renderAvatar: () => (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        {/* Yellow thumb up character from Image 3 */}
        <circle cx="30" cy="30" r="24" fill="#fbbf24" />
        <path d="M26 34 L26 24 C26 21 28 17 31 17 C32 17 33 18 33 20 L33 24 L39 24 C41 24 43 26 43 28 L40 37 C39 39 37 40 35 40 L26 40" stroke="#1f2937" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="#fde047" />
        <rect x="20" y="24" width="6" height="16" rx="2" fill="#1f2937" />
      </svg>
    ),
  },
  {
    value: '> 70%',
    suffix: '',
    desc: "People who've become customers after their first test drive",
    renderAvatar: () => (
      <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#f43f5e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '26px' }}>
        🚗
      </div>
    ),
  },
  {
    value: '35%',
    suffix: '',
    desc: 'The number of Spinny customers that are referrals',
    renderAvatar: () => (
      <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '26px' }}>
        🤝
      </div>
    ),
  },
];

const LOVE_STORIES = [
  {
    id: 1,
    name: 'Karishma Shah | Ahmedabad',
    quote: "Superb experience with the team. It didn't feel like we are buying a used car even for a second. Happily making new memories everyday!",
    image: '/assets/stories/story_1.jpg',
  },
  {
    id: 2,
    name: 'Madhulika Singh | Lucknow',
    quote: "Spinny helped us find a family car that's great for daily commutes and long trips",
    image: '/assets/stories/story_2.jpg',
  },
  {
    id: 3,
    name: 'Manu Rasho | Bengaluru',
    quote: "Our car looks like a new car, feels like a new car and drives like one. The smile on our daughters' faces has made the decision worth it.",
    image: '/assets/stories/story_3.jpg',
  },
  {
    id: 4,
    name: 'Pazhaniandi | Chennai',
    quote: "Being able to spoil my family with a reliable car was a win for Spinny and me.",
    image: '/assets/stories/story_4.jpg',
  },
];

export default function InsightsAndLoveStories() {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '56px 24px 64px',
        borderBottom: '1px solid #ededf2',
      }}
    >
      <div style={{ maxWidth: '1240px', marginInline: 'auto' }}>
        {/* Part A: Insights That Drive Us */}
        <div style={{ marginBottom: '52px' }}>
          <div className="spinny-section-header">
            <div className="spinny-section-header-line" />
            <h2 className="spinny-section-title">
              Insights That Drive Us
            </h2>
            <div className="spinny-section-header-line reverse" />
          </div>

          {/* 4 Soft Lavender Stat Cards */}
          <div
            className="mobile-slide-carousel"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
          >
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="mobile-slide-card"
                style={{
                  backgroundColor: '#7d8df5',
                  borderRadius: '20px',
                  padding: '24px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  boxShadow: '0 8px 24px rgba(125, 141, 245, 0.25)',
                  transition: 'transform 0.2s ease',
                }}
                onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {stat.renderAvatar()}
                <div style={{ color: '#ffffff' }}>
                  <div style={{ fontSize: '26px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '4px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '12px', lineHeight: 1.35, color: 'rgba(255, 255, 255, 0.9)' }}>
                    {stat.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part B: Over 2 Lakh Spinny Love Stories */}
        <div>
          <div className="spinny-section-header">
            <div className="spinny-section-header-line" />
            <h2 className="spinny-section-title">
              Over 2 Lakh Spinny Love Stories
            </h2>
            <div className="spinny-section-header-line reverse" />
          </div>

          {/* 4 Story Cards Grid */}
          <div style={{ position: 'relative' }}>
            <div
              className="mobile-slide-carousel"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px',
              }}
            >
              {LOVE_STORIES.map(story => (
                <div
                  key={story.id}
                  className="mobile-slide-card"
                  style={{
                    height: '380px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    cursor: 'pointer',
                    transition: 'all 0.22s ease',
                    backgroundColor: '#1b0231',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                  }}
                >
                  {/* Photo */}
                  <img
                    src={story.image}
                    alt={story.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />

                  {/* Top Instagram story indicator dashes matching Image 3 */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '16px',
                      right: '16px',
                      display: 'flex',
                      gap: '4px',
                      zIndex: 5,
                    }}
                  >
                    <div style={{ flex: 1, height: '2.5px', backgroundColor: '#ffffff', borderRadius: '9999px', boxShadow: '0 1px 3px rgba(0,0,0,0.4)' }} />
                    <div style={{ flex: 1, height: '2.5px', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '9999px' }} />
                    <div style={{ flex: 1, height: '2.5px', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '9999px' }} />
                  </div>

                  {/* Top myspinny badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: 'rgba(0, 0, 0, 0.45)',
                      backdropFilter: 'blur(6px)',
                      padding: '4px 10px',
                      borderRadius: '16px',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: 600,
                      zIndex: 5,
                    }}
                  >
                    <div style={{ width: '14px', height: '14px', borderRadius: '4px', backgroundColor: '#ed264f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 800 }}>
                      S
                    </div>
                    <span>myspinny</span>
                  </div>

                  {/* Dark bottom gradient overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.9) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '24px 20px',
                      color: '#ffffff',
                    }}
                  >
                    {/* User name & city */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#a855f7', transform: 'rotate(45deg)' }} />
                      <h4 style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.2px' }}>
                        {story.name}
                      </h4>
                    </div>

                    {/* Quote */}
                    <p style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.45 }}>
                      "{story.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Floating Chevron */}
            <button
              aria-label="Next stories"
              style={{
                position: 'absolute',
                top: '50%',
                right: '-18px',
                transform: 'translateY(-50%)',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid #e8e8e8',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 20,
              }}
            >
              <ChevronRight size={18} color="#333" strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
