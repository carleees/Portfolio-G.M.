import { useRef, useEffect, useState, useCallback } from 'react';
import { FashionItem } from '../lib/types';

interface ImageCarouselProps {
  images?: string[]; // Legacy support for string array
  items?: FashionItem[]; // New support for FashionItem objects
  onImageClick?: (item: string | FashionItem) => void;
  speed?: number;
  landscape?: boolean;
}

export default function ImageCarousel({ images, items, onImageClick, speed = 0.5, landscape = false }: ImageCarouselProps) {
  // Normalize data to array of items or strings
  const data = items || images || [];

  // Quadrupling the array to ensure absolutely seamless looping
  const duplicatedData = [...data, ...data, ...data, ...data];

  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const positionRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const previousXRef = useRef(0);
  const isClickRef = useRef(true);

  const widthRef = useRef(0);

  const isHoveringRef = useRef(false);

  // State for cursor style
  const [isGrabbing, setIsGrabbing] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  // Calculate the width of one set of images
  const calculateWidth = useCallback(() => {
    if (containerRef.current) {
      // Calculate the width of one full set of images (1/4 of the total scrollWidth)
      widthRef.current = containerRef.current.scrollWidth / 4;
    }
  }, []);

  // Handle Touchpad/Wheel scrolling
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleWheel = (e: WheelEvent) => {
      // Check if the scroll is primarily horizontal
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        positionRef.current -= e.deltaX;
      }
    };

    // Add non-passive listener to prevent browser navigation gestures
    wrapper.addEventListener('wheel', handleWheel, { passive: false });
    return () => wrapper.removeEventListener('wheel', handleWheel);
  }, []);

  useEffect(() => {
    calculateWidth();
    // Re-calculate on resize
    const resizeObserver = new ResizeObserver(() => calculateWidth());
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [calculateWidth]);

  const animate = useCallback(() => {
    // If width isn't calculated yet, try to calculate
    if (widthRef.current === 0) calculateWidth();

    const singleSetWidth = widthRef.current;

    // Only animate if we have a valid width
    if (singleSetWidth > 0) {
      if (!isDraggingRef.current) {
        // Auto-scroll speed (half speed when hovering)
        const currentSpeed = isHoveringRef.current ? speed * 0.5 : speed;
        positionRef.current -= currentSpeed;
      }

      // Seamless loop logic
      // If we've scrolled past the first set of duplicated images, reset to the start of the second set
      if (positionRef.current <= -singleSetWidth) {
        positionRef.current += singleSetWidth;
      }
      // If we've scrolled too far back (e.g., dragged left past the start), reset to the end of the previous set
      else if (positionRef.current > 0) {
        positionRef.current -= singleSetWidth;
      }

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }
    }

    requestRef.current = requestAnimationFrame(animate);
  }, [calculateWidth, speed]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    setIsGrabbing(true);
    startXRef.current = e.clientX;
    previousXRef.current = e.clientX;
    isClickRef.current = true;

    // Capture pointer to track outside the element
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    const currentX = e.clientX;
    const delta = currentX - previousXRef.current;
    previousXRef.current = currentX;

    positionRef.current += delta;

    // If we moved more than 5 pixels, it's not a click
    if (Math.abs(currentX - startXRef.current) > 5) {
      isClickRef.current = false;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    setIsGrabbing(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleItemClick = (item: string | FashionItem) => {
    if (isClickRef.current && onImageClick) {
      onImageClick(item);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="w-full overflow-hidden bg-neutral-50 pt-4 pb-12 touch-none"
      onMouseEnter={() => { isHoveringRef.current = true; }}
      onMouseLeave={() => { isHoveringRef.current = false; }}
      style={{ touchAction: 'pan-y' }} // Allow vertical scroll, but we handle horiz? Actually 'none' or 'pan-y'.
    >
      <div
        ref={containerRef}
        className="flex w-max whitespace-nowrap will-change-transform items-start"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ cursor: isGrabbing ? 'grabbing' : 'grab' }}
      >
        {duplicatedData.map((item, index) => {
          const src = typeof item === 'string' ? item : item.src;
          const isObject = typeof item !== 'string';

          return (
            <div
              key={index}
              onClick={() => handleItemClick(item)}
              className={`${landscape ? 'w-[90vw] md:w-[675px]' : 'w-[85vw] md:w-[300px]'} flex-shrink-0 mx-4 select-none flex flex-col gap-4 group cursor-pointer`}
              draggable={false}
            >
              <div className={`w-full h-[60vh] md:h-[450px] overflow-hidden transition-all duration-300 bg-white ${isGrabbing ? '' : 'group-hover:shadow-2xl group-hover:scale-[1.02]'}`}>
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover pointer-events-none"
                  loading="eager"
                />
              </div>

              {/* Credits Section - Only visible if item is FashionItem */}
              {isObject && (
                <div className="text-[10px] md:text-[11px] leading-snug text-black font-normal mt-2 pointer-events-none font-['Arial']">
                  {(item as FashionItem).credits.photographer && <p>Photographer: {(item as FashionItem).credits.photographer}</p>}
                  {(item as FashionItem).credits.stylist && <p>Stylist: {(item as FashionItem).credits.stylist}</p>}
                  {(item as FashionItem).credits.mua && <p>Mua: {(item as FashionItem).credits.mua}</p>}
                  {(item as FashionItem).credits.model && <p>Model: {(item as FashionItem).credits.model}</p>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
