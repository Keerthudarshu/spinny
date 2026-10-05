import React from 'react';
import { ChevronRight, Star, Users, Car, Smile } from 'lucide-react';

const STATS = [
  {
    value: '4.8/5',
    desc: 'Our average review rating on Google and on Social platforms',
    renderAvatar: () => (
      <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '28px', transform: 'rotate(5deg)' }}>
        🤩
      </div>
    ),
  },
  {
    value: '35%',
    desc: 'The number of Spinny customers that are referrals',
    renderAvatar: () => (
      <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: '#fbbf24', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '28px', transform: 'rotate(-5deg)' }}>
        🥳
      </div>
    ),
  },
  {
    value: '> 70%',
    desc: "People who've become customers after their first test drive",
    renderAvatar: () => (
      <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: '#f43f5e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '28px', transform: 'rotate(4deg)' }}>
        👳
      </div>
    ),
  },
  {
    value: '32%',
    desc: 'Our women customer quotient',
    renderAvatar: () => (
      <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '28px', transform: 'rotate(-4deg)' }}>
        😎
      </div>
    ),
  },
];

const LOVE_STORIES = [
  {
    id: 1,
    name: 'Madhulika Singh | Lucknow',
    quote: "Spinny helped us find a family car that's great for daily commutes and long trips",
    image: '/assets/stories/story_2.jpg',
  },
  {
    id: 2,
    name: 'Ayush Srivastava | Lucknow',
    quote: "Our first car that we'd truly love for years to come.",
    image: '/assets/stories/story_1.jpg',
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
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '32px' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(68, 2, 116, 0.2) 100%)' }} />
            <h2
              style={{
                fontSize: '28px',
                fontWeight: 800,
                color: '#2e054e',
                letterSpacing: '-0.3px',
                whiteSpace: 'nowrap',
              }}
            >
              Insights That Drive Us
            </h2>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(68, 2, 116, 0.2) 0%, transparent 100%)' }} />
          </div>

          {/* 4 Soft Lavender Stat Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
          >
            {STATS.map((stat, idx) => (
              <div
                key={idx}
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '36px' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(68, 2, 116, 0.2) 100%)' }} />
            <h2
              style={{
                fontSize: '28px',
                fontWeight: 800,
                color: '#2e054e',
                letterSpacing: '-0.3px',
                whiteSpace: 'nowrap',
              }}
            >
              Over 2 Lakh Spinny Love Stories
            </h2>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(68, 2, 116, 0.2) 0%, transparent 100%)' }} />
          </div>

          {/* 4 Story Cards Grid */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px',
              }}
            >
              {LOVE_STORIES.map(story => (
                <div
                  key={story.id}
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

                  {/* Top myspinny badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
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
