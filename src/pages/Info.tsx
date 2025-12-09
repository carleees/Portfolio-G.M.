import BottomTicker from '../components/BottomTicker';

export default function Info() {
  return (
    <div className="pt-28 md:pt-32 px-6 md:px-12 max-w-[1000px] mx-auto pb-24 min-h-screen flex flex-col font-['Arial']">
      <div className="space-y-16">

        <section>
          <h2 className="text-2xl md:text-3xl tracking-[0.2em] font-light mb-8">Contact</h2>
          <div className="space-y-4 text-neutral-600">
            <p>
              <span className="text-neutral-400 text-sm tracking-wider block mb-1">Email</span>
              <a href="mailto:marianigalia4@gmail.com" className="hover:text-black transition-colors">
                marianigalia4@gmail.com
              </a>
            </p>
            <p>
              <span className="text-neutral-400 text-sm tracking-wider block mb-1">Instagram</span>
              <a href="https://instagram.com/galiamariani" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                @galiamariani
              </a>
            </p>
            <p>
              <span className="text-neutral-400 text-sm tracking-wider block mb-1">Phone</span>
              <a href="tel:+5492254590563" className="hover:text-black transition-colors">
                +54 92254590563
              </a>
            </p>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
      <p className="text-xs text-black mt-auto text-right font-bold">
        © 2025, Galia Mariani. All Rights Reserved.
      </p>
      <br />
      <br />
      <br />
      <br />

      <BottomTicker />
    </div>
  );
}
