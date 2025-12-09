import BottomTicker from '../components/BottomTicker';

export default function Home() {
  return (
    <div className="pt-28 md:pt-32 pb-0 px-6 md:px-12 max-w-[1600px] mx-auto font-['Arial']">
      <div className="flex items-start justify-center">
        <div className="w-full max-w-5xl">
          <img
            src="/images/home-hero.jpg"
            alt="Fashion styling"
            className="w-3/4 h-[55vh] md:h-[65vh] object-cover shadow-2xl mx-auto"
            onError={(e) => {
              // Fallback si la imagen no existe
              (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/6069571/pexels-photo-6069571.jpeg?auto=compress&cs=tinysrgb&w=1600';
            }}
          />
        </div>
      </div>
      <BottomTicker />
    </div>
  );
}
