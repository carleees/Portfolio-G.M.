import { useState, useEffect } from 'react';

interface NavigationProps {
  currentPage: 'home' | 'fashion' | 'films' | 'contact';
  onNavigate: (page: 'home' | 'fashion' | 'films' | 'contact') => void;
  isTransparent?: boolean;
  isScrolled?: boolean;
}

export default function Navigation({ currentPage, onNavigate, isTransparent = false, isScrolled = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const handleNav = (page: 'home' | 'fashion' | 'films' | 'contact') => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent && !isScrolled && !isMenuOpen ? 'bg-transparent backdrop-blur-none' : 'bg-neutral-50/80 backdrop-blur-sm'
          }`}
      >
        <div className="max-w-[1600px] mx-auto pl-4 md:pl-12 pr-6 md:pr-24 py-4 md:py-8 flex items-center justify-between gap-4">

          {/* Logo Section - Mobile: Left (Order 1), Desktop: Right (Order 2) */}
          <div className="order-1 md:order-2 text-left md:text-right">
            <button
              onClick={() => handleNav('home')}
              className="hover:opacity-60 transition-opacity"
            >
              <h1 className="text-xl md:text-2xl font-light font-['Helvetica'] tracking-normal text-black uppercase">GALIA MARIANI</h1>
            </button>
          </div>

          {/* Navigation Section - Mobile: Right (Order 2), Desktop: Left (Order 1) */}
          <div className="order-2 md:order-1 flex items-center">

            {/* Desktop Links (Hidden on Mobile) - RESTORED ORIGINAL STYLING */}
            <div className="hidden md:flex gap-12 text-sm">
              <button
                onClick={() => handleNav('home')}
                className={`text-sm tracking-wider transition-colors ${currentPage === 'home' ? 'text-black' : 'text-neutral-400 hover:text-black'}`}
              >
                home
              </button>
              <button
                onClick={() => handleNav('fashion')}
                className={`text-sm tracking-wider transition-colors ${currentPage === 'fashion' ? 'text-black' : 'text-neutral-400 hover:text-black'}`}
              >
                fashion
              </button>
              <button
                onClick={() => handleNav('films')}
                className={`text-sm tracking-wider transition-colors ${currentPage === 'films' ? 'text-black' : 'text-neutral-400 hover:text-black'}`}
              >
                films
              </button>
              <button
                onClick={() => handleNav('contact')}
                className={`text-sm tracking-wider transition-colors ${currentPage === 'contact' ? 'text-black' : 'text-neutral-400 hover:text-black'}`}
              >
                contact
              </button>
            </div>

            {/* Mobile Hamburger Menu (Visible on Mobile) */}
            <button
              className="md:hidden text-black p-2 -mr-2"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-fadeIn">
          {/* Close Button Header */}
          <div className="flex justify-end pt-6 pr-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-black hover:opacity-60 transition-opacity"
              aria-label="Close menu"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col items-center justify-center gap-10 pb-20">
            <button
              onClick={() => handleNav('home')}
              className="text-lg text-black font-normal font-['Arial'] hover:opacity-60 transition-opacity"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('fashion')}
              className="text-lg text-black font-normal font-['Arial'] hover:opacity-60 transition-opacity"
            >
              Fashion
            </button>
            <button
              onClick={() => handleNav('films')}
              className="text-lg text-black font-normal font-['Arial'] hover:opacity-60 transition-opacity"
            >
              Films
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="text-lg text-black font-normal font-['Arial'] hover:opacity-60 transition-opacity"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
}
