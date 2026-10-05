import React, { useState } from 'react';
import Header from './components/Header';
import ExploreBar from './components/ExploreBar';
import HeroBanner from './components/HeroBanner';
import SpinnyBenefits from './components/SpinnyBenefits';
import HowSpinnyWorks from './components/HowSpinnyWorks';
import FeaturedCars from './components/FeaturedCars';
import ExploreByBodyType from './components/ExploreByBodyType';
import CarsAcrossIndia from './components/CarsAcrossIndia';
import ExploreMore from './components/ExploreMore';
import SpinnyBuzz from './components/SpinnyBuzz';
import InsightsAndLoveStories from './components/InsightsAndLoveStories';
import FaqAndSeo from './components/FaqAndSeo';
import Footer from './components/Footer';
import CityModal from './components/CityModal';
import SearchModal from './components/SearchModal';
import AccountModal from './components/AccountModal';
import ShortlistDrawer from './components/ShortlistDrawer';

export default function App() {
  const [selectedCity, setSelectedCity] = useState('Delhi NCR');
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isShortlistOpen, setIsShortlistOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [shortlistedCars, setShortlistedCars] = useState([
    {
      id: 101,
      name: '2019 Mahindra TUV300',
      price: '₹6.16 Lakh',
    },
  ]);

  const handleFilterSelect = (filterKey, option) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterKey]: option,
    }));
  };

  const handleToggleShortlist = (car) => {
    setShortlistedCars(prev => {
      const exists = prev.find(item => item.id === car.id);
      if (exists) {
        return prev.filter(item => item.id !== car.id);
      } else {
        return [...prev, car];
      }
    });
  };

  const scrollToCars = () => {
    const el = document.getElementById('featured-cars');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCtaClick = (slide) => {
    if (slide.ctaLink === '#cars') {
      scrollToCars();
    } else if (slide.ctaLink === '#sell') {
      alert('Spinny Sell Car: Get instant online valuation at zero fee!');
    } else if (slide.ctaLink === '#loan') {
      alert('Spinny Loans: Calculate your monthly EMI with 0 down payment!');
    } else {
      scrollToCars();
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fcfcfd' }}>
      {/* 1. Header & Top Navbar */}
      <Header
        selectedCity={selectedCity}
        onOpenCityModal={() => setIsCityModalOpen(true)}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
        onOpenAccountModal={() => setIsAccountModalOpen(true)}
        onOpenShortlist={() => setIsShortlistOpen(true)}
        shortlistCount={shortlistedCars.length}
      />

      {/* 2. "Explore By" Secondary Filter Bar */}
      <ExploreBar
        selectedFilters={selectedFilters}
        onFilterSelect={handleFilterSelect}
      />

      {/* 3. Hero Section Carousel Banner (Navratri Special & Festival of Spinny) */}
      <HeroBanner onCtaClick={handleCtaClick} />

      {/* 4. Spinny benefits (Buy/Sell toggle, 4 photo cards with icon badges) */}
      <SpinnyBenefits onBrowseCars={scrollToCars} />

      {/* 5. How Spinny® Works (3 illustrated steps with authentic SVGs) */}
      <HowSpinnyWorks />

      {/* 6. Featured Spinny cars (Best buys for you / Newly added, car cards carousel) */}
      <div id="featured-cars">
        <FeaturedCars
          onToggleShortlist={handleToggleShortlist}
          shortlistedIds={shortlistedCars.map(c => c.id)}
        />
      </div>

      {/* 7. Explore by Body Type (Silhouette icons, Baleno, Kwid, Grand i10, Swift) */}
      <ExploreByBodyType
        onSelectCar={car => {
          alert(`Selected ${car.name}. Browsing available verified stock.`);
        }}
      />

      {/* 8. Cars across India (Vibrant cards with 45-deg diamond landmark photos) */}
      <CarsAcrossIndia
        onSelectCity={city => {
          setSelectedCity(city);
          alert(`Switched city to ${city}. Showing hubs and verified cars.`);
        }}
      />

      {/* 9. Explore More (Loan, Buyback, FASTag, Challan with neon outlines) */}
      <ExploreMore
        onServiceClick={srv => {
          alert(`Opened ${srv.title} service: ${srv.subtitle}`);
        }}
      />

      {/* 10. Spinny Buzz (Economic Times, Yourstory, Financial Express, AFAQS press cards) */}
      <SpinnyBuzz />

      {/* 11. Insights That Drive Us & Over 2 Lakh Spinny Love Stories */}
      <InsightsAndLoveStories />

      {/* 12. Frequently Asked Questions & Why buy a used car from Spinny? SEO Block */}
      <FaqAndSeo />

      {/* 13. Official Spinny Mega Footer */}
      <Footer onBrowseCars={scrollToCars} />

      {/* Modals & Interactive Drawers */}
      <CityModal
        isOpen={isCityModalOpen}
        onClose={() => setIsCityModalOpen(false)}
        selectedCity={selectedCity}
        onSelectCity={city => setSelectedCity(city)}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSearchSelect={modelName => {
          alert(`Searching verified cars for "${modelName}" in ${selectedCity}`);
          scrollToCars();
        }}
      />

      <AccountModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
      />

      <ShortlistDrawer
        isOpen={isShortlistOpen}
        onClose={() => setIsShortlistOpen(false)}
        shortlistedItems={shortlistedCars}
      />
    </div>
  );
}
