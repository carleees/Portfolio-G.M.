interface NavigationProps {
  currentPage: 'home' | 'work' | 'info';
  onNavigate: (page: 'home' | 'work' | 'info') => void;
  isScrolled?: boolean;
}

export default function Navigation({ currentPage, onNavigate, isScrolled = false }: NavigationProps) {
  const isTransparent = isScrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isTransparent ? 'bg-transparent backdrop-blur-none' : 'bg-neutral-50/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 md:py-8 flex items-center justify-between gap-4">
        <div className="flex gap-6 md:gap-12 text-xs md:text-sm">
          <button
            onClick={() => onNavigate('home')}
            className={`text-sm tracking-wider transition-colors ${
              currentPage === 'home' ? 'text-black' : 'text-neutral-400 hover:text-black'
            }`}
          >
            home
          </button>
          <button
            onClick={() => onNavigate('work')}
            className={`text-sm tracking-wider transition-colors ${
              currentPage === 'work' ? 'text-black' : 'text-neutral-400 hover:text-black'
            }`}
          >
            work
          </button>
          <button
            onClick={() => onNavigate('info')}
            className={`text-sm tracking-wider transition-colors ${
              currentPage === 'info' ? 'text-black' : 'text-neutral-400 hover:text-black'
            }`}
          >
            info
          </button>
        </div>

        <div className="text-right">
          <h1 className="text-lg md:text-2xl tracking-[0.3em] font-light">GALIA MARIANI</h1>
          {!isTransparent && (
            <p className="text-sm italic text-rose-400 tracking-widest mt-1">stylist</p>
          )}
        </div>
      </div>
    </nav>
  );
}
