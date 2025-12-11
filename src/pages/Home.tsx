import BottomTicker from '../components/BottomTicker';

export default function Home() {
  return (
    <div className="min-h-screen font-['Arial'] pb-8 md:pb-10 bg-neutral-50">
      <div className="pt-28 md:pt-32 px-6 md:px-12 max-w-[1600px] mx-auto mb-8 md:mb-12">
        <div className="flex items-start justify-center">
          <div className="w-full max-w-5xl">
            <img
              src="/images/home-hero.jpg"
              alt="Fashion styling"
              className="w-full h-[80vh] md:h-[75vh] object-cover shadow-2xl mx-auto"
              onError={(e) => {
                // Fallback si la imagen no existe
                (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/6069571/pexels-photo-6069571.jpeg?auto=compress&cs=tinysrgb&w=1600';
              }}
            />
          </div>
        </div>
      </div>
      <BottomTicker fixedPosition={false} />
    </div>
  );
}
