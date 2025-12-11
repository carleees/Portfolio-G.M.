

export default function Contact() {
  return (
    <div className="min-h-screen font-['Arial'] pb-8 md:pb-10 relative">
      <div className="relative pt-28 md:pt-32 px-6 md:px-12 max-w-[1000px] mx-auto mb-8 md:mb-12">
        {/* Video Section - First on Mobile */}
        <div className="w-[250px] md:w-[300px] aspect-square overflow-hidden bg-neutral-50 shadow-sm mx-auto mb-16 md:mb-0 md:absolute md:top-40 md:translate-y-[-25px]" style={{ right: '150px' }}>
          <video
            src="/images/info%20vid/copy_CBEDFBD0-458F-4376-9D8C-50FF3DF6B7B9.MOV"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="hidden md:block text-2xl md:text-3xl tracking-[0.2em] font-light mb-8">Contact</h2>
            <div className="space-y-8 text-black font-['Arial']">
              <div>
                <span className="text-black text-base uppercase block mb-1">PHONE:</span>
                <a href="tel:+5492254590563" className="text-sm tracking-wide text-neutral-600 hover:text-black transition-colors block">
                  +54 92254590563
                </a>
              </div>
              <div>
                <span className="text-black text-base uppercase block mb-1">EMAIL:</span>
                <a href="mailto:marianigalia4@gmail.com" className="text-sm tracking-wide text-neutral-600 hover:text-black transition-colors block uppercase">
                  MARIANIGALIA4@GMAIL.COM
                </a>
              </div>
              <div>
                <span className="text-black text-base uppercase block mb-1">INSTAGRAM:</span>
                <a href="https://instagram.com/galiamariani" target="_blank" rel="noopener noreferrer" className="text-sm tracking-wide text-neutral-600 hover:text-black transition-colors block uppercase">
                  @GALIAMARIANI
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 pt-10 md:pt-28 mb-8 md:mb-12">
          <p className="text-[10px] md:text-xs text-black text-center md:text-right font-bold md:translate-x-[25px] mt-8 md:mt-0">
            © 2025, Galia Mariani. All Rights Reserved.
          </p>
        </div>
      </div>

    </div>
  );
}
