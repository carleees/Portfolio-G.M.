export default function Home() {
  return (
    <div className="pt-28 md:pt-32 pb-20 md:pb-32 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="flex items-start justify-center min-h-[calc(100vh-8rem)]">
        <div className="w-full max-w-5xl">
          <img
            src="/images/home-hero.jpg"
            alt="Fashion styling"
            className="w-full h-[60vh] md:h-[70vh] object-cover shadow-2xl"
            onError={(e) => {
              // Fallback si la imagen no existe
              (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/6069571/pexels-photo-6069571.jpeg?auto=compress&cs=tinysrgb&w=1600';
            }}
          />
        </div>
      </div>
    </div>
  );
}
