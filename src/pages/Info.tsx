export default function Info() {
  return (
    <div className="pt-28 md:pt-32 px-6 md:px-12 max-w-[1000px] mx-auto pb-24 min-h-screen">
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl md:text-3xl tracking-[0.2em] font-light mb-8">About</h2>
          <div className="space-y-6 text-neutral-600 leading-relaxed">
            <p>
              Galia Mariani is a fashion stylist specializing in editorial, commercial, and personal styling.
              With an eye for detail and a passion for creating compelling visual narratives, she brings a
              unique perspective to every project.
            </p>
            <p>
              Her work spans across fashion editorials, advertising campaigns, celebrity styling, and brand
              collaborations. Based in Argentina, Galia works internationally with photographers, designers,
              and creative teams to craft memorable fashion moments.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl tracking-[0.2em] font-light mb-8">Services</h2>
          <ul className="space-y-4 text-neutral-600">
            <li className="flex items-start gap-4">
              <span className="text-neutral-400 text-xs mt-1">01</span>
              <div>
                <h3 className="tracking-wider mb-1">Editorial Styling</h3>
                <p className="text-sm text-neutral-500">Fashion editorials for magazines and digital publications</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-neutral-400 text-xs mt-1">02</span>
              <div>
                <h3 className="tracking-wider mb-1">Commercial Styling</h3>
                <p className="text-sm text-neutral-500">Brand campaigns and advertising projects</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-neutral-400 text-xs mt-1">03</span>
              <div>
                <h3 className="tracking-wider mb-1">Celebrity & Personal Styling</h3>
                <p className="text-sm text-neutral-500">Red carpet events and personal wardrobe curation</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-neutral-400 text-xs mt-1">04</span>
              <div>
                <h3 className="tracking-wider mb-1">Creative Direction</h3>
                <p className="text-sm text-neutral-500">Visual concept development and art direction</p>
              </div>
            </li>
          </ul>
        </section>

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
          </div>
        </section>
      </div>
      <p className="text-xs text-black mt-16 text-right font-bold">
        © 2025, Galia Mariani. All Rights Reserved.
      </p>
    </div>
  );
}
