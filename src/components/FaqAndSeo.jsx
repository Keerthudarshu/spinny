import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    q: 'Q. When and where can I take a test drive?',
    a: 'With our test drive booking form, you can conveniently schedule a test drive at home or visit our hub to try out multiple cars. Once you book your preferred option, your relationship manager will call you to confirm the details before arriving at your location. You can book home test drive from Spinny website or App.',
  },
  {
    q: "Q. What's the process for booking my car?",
    a: 'Select your preferred car, reserve it online with a refundable deposit of ₹10,000, and choose your preferred delivery date or schedule a test drive.',
  },
  {
    q: 'Q. Will Spinny help me with car finance?',
    a: 'Yes! Spinny provides instant used car loans with competitive interest rates starting from 12.99%, zero down payment options, and paperless documentation.',
  },
  {
    q: "Q. How does Spinny's money back guarantee work?",
    a: "Drive the car for up to 5 days or 300 kms. If you don't love it, return it for a 100% full refund with no questions asked.",
  },
];

export default function FaqAndSeo() {
  const [openIdx, setOpenIdx] = useState(0); // first item open by default

  const toggleFaq = (idx) => {
    setOpenIdx(prev => (prev === idx ? -1 : idx));
  };

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '56px 24px 72px',
        borderBottom: '1px solid #ededf2',
      }}
    >
      <div style={{ maxWidth: '1240px', marginInline: 'auto' }}>
        {/* Frequently Asked Questions */}
        <div style={{ marginBottom: '64px' }}>
          <h3
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#555555',
              marginBottom: '20px',
            }}
          >
            Frequently Asked Questions
          </h3>

          {/* Accordion List */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderBottom: '1px solid #ebebeb',
                    paddingBlock: '18px',
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#2e054e',
                      padding: 0,
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ color: '#888' }}>
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="animate-fade-in"
                      style={{
                        fontSize: '14px',
                        color: '#666666',
                        lineHeight: 1.6,
                        marginTop: '12px',
                        maxWidth: '960px',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Visit help center Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '36px' }}>
            <button
              style={{
                backgroundColor: '#ffffff',
                color: '#440274',
                border: '1.5px solid #440274',
                fontSize: '14.5px',
                fontWeight: 600,
                padding: '11px 36px',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
              }}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = '#440274';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#440274';
              }}
            >
              Visit help center
            </button>
          </div>
        </div>

        {/* Why buy a used car from Spinny? SEO Block */}
        <div style={{ paddingTop: '16px' }}>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 800,
              color: '#2e054e',
              marginBottom: '16px',
              letterSpacing: '-0.3px',
            }}
          >
            Why buy a used car from Spinny?
          </h2>

          <p
            style={{
              fontSize: '13.5px',
              color: '#6e6e78',
              lineHeight: 1.7,
              textAlign: 'justify',
            }}
          >
            Spinny takes the uncertainty and risk out of buying a used car, offering peace of mind at every step with zero compromises. Our selection process ensures that only the highest quality certified second hand cars in your city. A Spinny car is only certified once it passes a thorough 200-point evaluation that checks the condition of every part of the car. Any used car can get certified. It takes perfection to be Spinny Assured. Experience a simple &amp; fully transparent way of buying used cars with Spinny. Find your perfect match from our wide range of fully inspected &amp; certified used cars at the best prices. All Spinny cars come with hassle-free paperwork, free RC transfer, and used car finance options with low-interest rates starting from only 12.99%. With Spinny, pre-owned is better than new. Get the savings of a pre-owned with the quality of a new car. All this through a transparent, convenient and trustworthy process, to make sure you buy a car you'll love, guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
