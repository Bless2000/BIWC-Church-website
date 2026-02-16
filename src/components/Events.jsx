import React from "react";
import { useNavigate } from "react-router-dom";
import { events } from "../data/events"; // adjust path if needed

const HomepageEvents = () => {
  const navigate = useNavigate();

  // Show only first 3 events on homepage
  const previewEvents = events.slice(0, 3);

  return (
    <section className="bg-blue-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-7xl font-bold text-white mb-4">
             Events
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto">
            Stay connected and join us for our upcoming church events and gatherings.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Event Cards */}
          {previewEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => navigate(`/events/${event.id}`)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group hover:-translate-y-2 transition duration-300"
            >
              <img
                src={event.image}
                alt={event.header}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {event.header}
                </h3>
                <p className="text-sm text-gray-500">
                  {event.date}
                </p>
              </div>
            </div>
          ))}

          {/* View All Events Card */}
          <div
            onClick={() => navigate("/events")}
            className="bg-white rounded-2xl shadow-lg flex items-center justify-center cursor-pointer hover:-translate-y-2 transition duration-300"
          >
            <div className="text-center p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                View All Events
              </h3>
              <p className="text-gray-500 text-sm">
                See everything happening at BIWC
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomepageEvents;