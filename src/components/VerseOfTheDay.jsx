import React from 'react';

const VerseOfTheDay = () => {
  // TODO: Replace with dynamic verse source/API when ready.
  const verse = {
    heading: 'Verse Of The Day',
    body: '“Your word is a lamp to my feet and a light to my path.”',
    reference: 'Psalm 119:105',
  };

  return (
    <section aria-label="Verse of the day" className="bg-stone-100">
      <div className="container mx-auto px-6 py-12 md:py-16">
        {/* Social wall container */}
        <div className="relative overflow-hidden rounded-[28px] bg-sky-400 text-white shadow-2xl">
          {/* Decorative blobs (keeps it feeling like a modern social wall) */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/15 blur-2xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          </div>

          <div className="relative p-8 md:p-12">
            {/* Post card */}
            <div className="rounded-2xl bg-white/10 p-7 md:p-10 backdrop-blur-sm ring-1 ring-white/20">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/20 ring-1 ring-white/30" />
                <div className="leading-tight">
                  <h2 className="font-heading text-2xl md:text-3xl font-black tracking-wide">
                    {verse.heading}
                  </h2>
                  <p className="text-white/90 font-semibold">Daily encouragement</p>
                </div>
              </div>

              <p className="mt-7 font-heading text-2xl md:text-4xl font-black leading-snug tracking-tight">
                {verse.body}
              </p>

              <p className="mt-5 font-heading text-xl md:text-2xl font-black text-white/95">
                — {verse.reference}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerseOfTheDay;
