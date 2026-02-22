import React from "react";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WorshipSection = () => {

    const navigate = useNavigate()

  return (
    <section className="px-6 py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Blue Hero Container */}
        <div className="bg-blue-900 text-white rounded-3xl py-20 px-6 text-center relative">
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Worship With Us
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-blue-100 mb-10">
            During our weekly worship gathering, you will engage in meaningful
            relationships, live worship, and sermons from one of our teaching
            pastors.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              GET DIRECTIONS
              <ArrowUpRight size={18} />
            </button>

            <button onClick={() => navigate("/sermons")} className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              WATCH
            </button>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="relative -mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Sunday Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <Clock className="mx-auto mb-4 text-blue-900" size={28} />
            <h3 className="text-2xl font-bold mb-2">Sunday Mornings</h3>
            <p className="text-gray-600">7:00am - 9:00am</p>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <MapPin className="mx-auto mb-4 text-blue-900" size={28} />
            <h3 className="text-2xl font-bold mb-2">Location</h3>
            <p className="text-gray-600">
              Abelemkpe, Accra - Ghana
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WorshipSection;
