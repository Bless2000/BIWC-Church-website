import React from 'react';

import pastorImg from '../assets/img/pastor.jpg';
import churchImg from '../assets/img/church.jpg';

const PastorMessage = () => {
  

  return (
    <section className="relative bg-stone-100 overflow-hidden" aria-label="Message from the pastor">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-3 lg:items-center">
          {/* Left Image (Pastor) */}
          <div className="relative">
            <img
              src={pastorImg}
              alt="Pastor"
              className="w-full h-[420px] md:h-[500px] lg:h-[540px] object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>

          {/* Center Content (between both images) */}
          <div className="relative mx-auto flex max-w-2xl flex-col justify-center text-center">
           

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              SHORT MESSAGE FROM OUR
              <br />
              PASTOR 
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              We are a warm and welcoming community of believers committed to growing in
              faith, serving others, and sharing the love of Christ. Whether you're
              exploring church for the first time or looking for a church to call home,
              we invite you to join us and experience the love and fellowship of our
              congregation.
            </p>
          </div>

          {/* Right Image (Church) - bottom-right on desktop */}
          <div className="relative lg:justify-self-end lg:self-end">
            <img
              src={churchImg}
              alt="Church building"
              className="w-full lg:w-[420px] h-[320px] md:h-[380px] lg:h-[420px] object-cover rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
        </div>

       </div>
    </section>
  );
};

export default PastorMessage;
