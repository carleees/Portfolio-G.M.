interface NavigationProps {
  currentPage: 'home' | 'fashion' | 'films' | 'info';
  onNavigate: (page: 'home' | 'fashion' | 'films' | 'info') => void;
  isScrolled?: boolean;
}

export default function Navigation({ currentPage, onNavigate, isScrolled = false }: NavigationProps) {
  const isTransparent = isScrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent backdrop-blur-none' : 'bg-neutral-50/80 backdrop-blur-sm'
      }`}>
      <div className="max-w-[1600px] mx-auto pl-6 md:pl-12 pr-12 md:pr-24 py-4 md:py-8 flex items-center justify-between gap-4">
        {/* Links Section (Left) - Reverted to original */}
        <div className="flex gap-6 md:gap-12 text-xs md:text-sm">
          <button
            onClick={() => onNavigate('home')}
            className={`text-sm tracking-wider transition-colors ${currentPage === 'home' ? 'text-black' : 'text-neutral-400 hover:text-black'
              }`}
          >
            home
          </button>
          <button
            onClick={() => onNavigate('fashion')}
            className={`text-sm tracking-wider transition-colors ${currentPage === 'fashion' ? 'text-black' : 'text-neutral-400 hover:text-black'
              }`}
          >
            fashion
          </button>
          <button
            onClick={() => onNavigate('films')}
            className={`text-sm tracking-wider transition-colors ${currentPage === 'films' ? 'text-black' : 'text-neutral-400 hover:text-black'
              }`}
          >
            films
          </button>
          <button
            onClick={() => onNavigate('info')}
            className={`text-sm tracking-wider transition-colors ${currentPage === 'info' ? 'text-black' : 'text-neutral-400 hover:text-black'
              }`}
          >
            info
          </button>
        </div>

        {/* Logo Section (Right) - Updated Style, No Stylist */}
        <div className="text-right">
          <button
            onClick={() => onNavigate('home')}
            className="text-right hover:opacity-60 transition-opacity"
          >
            <h1 className="text-xl md:text-2xl font-light font-['Helvetica'] tracking-normal text-black uppercase">GALIA MARIANI</h1>
          </button>
        </div>
      </div>
    </nav>
  );
}
