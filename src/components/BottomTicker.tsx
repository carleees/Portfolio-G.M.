const text = 'MARIANIGALIA4@GMAIL.COM';

interface BottomTickerProps {
  fixedPosition?: boolean;
}

export default function BottomTicker({ fixedPosition = true }: BottomTickerProps) {
  // Duplicate the text enough times to avoid any visible gap during the loop.
  const items = Array.from({ length: 12 }, (_, i) => `${text} ${i + 1}`);

  return (
    <div className={`${fixedPosition ? 'fixed bottom-0' : 'relative'} left-0 right-0 w-full h-16 text-black uppercase tracking-[0.12em] text-4xl md:text-5xl overflow-hidden pointer-events-none flex items-center z-10`}>
      <div className="flex w-[400%] animate-marqueeRight whitespace-nowrap">
        {items.map((_, idx) => (
          <span key={idx} className="mx-2">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

