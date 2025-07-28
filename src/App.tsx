import React, { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Hero from './components/Hero';
import SystemsSection from './components/SystemsSection';
import WhyChooseSection from './components/WhyChooseSection';
import ImplementationSection from './components/ImplementationSection';
import FinalCTA from './components/FinalCTA';
import CaseStudiesSection from './components/CaseStudiesSection';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { isDarkMode, theme, setTheme } = useDarkMode();
  const bookingLink = "https://cal.com/sridhar-bolanwar-qlky7g/30min";

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Dark/Light Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle 
          theme={theme}
          isDarkMode={isDarkMode}
          onThemeChange={setTheme}
        />
      </div>
      
      <Header onBookingClick={handleBookingClick} isDarkMode={isDarkMode} />
      <Hero onBookingClick={handleBookingClick} isDarkMode={isDarkMode} />
      <SystemsSection onBookingClick={handleBookingClick} isDarkMode={isDarkMode} />
      <WhyChooseSection isDarkMode={isDarkMode} />
      <ImplementationSection isDarkMode={isDarkMode} />
      <CaseStudiesSection isDarkMode={isDarkMode} />
      <FinalCTA onBookingClick={handleBookingClick} isDarkMode={isDarkMode} />
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={handleCloseModal}
        bookingLink={bookingLink}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;