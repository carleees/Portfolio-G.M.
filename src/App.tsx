import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Work from './pages/Work';
import Info from './pages/Info';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'work' | 'info'>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(false);
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} isScrolled={isScrolled} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'work' && <Work />}
      {currentPage === 'info' && <Info />}
    </div>
  );
}

export default App;
