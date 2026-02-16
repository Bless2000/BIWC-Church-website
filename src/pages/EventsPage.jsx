import React from "react";
import { useNavigate } from "react-router-dom";
import { events } from "../data/events";
import heroImg from '../assets/img/eventsHero.jpg';
import Navbar from '../components/Navbar';

const EventsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] flex items-center justify-center text-white">

        {/* Background Image */}
        <img
          src={heroImg}
          alt="Events Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.2) 0%,
                rgba(0,0,0,0.2) 50%,
                rgba(0,0,0,0.4) 100%
              )
            `,
          }}
        />

        <h1 className="relative text-4xl md:text-6xl font-bold">
          Upcoming Events
        </h1>
      </section>

      {/* ================= EVENTS GRID ================= */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => navigate(`/events/${event.id}`)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group hover:-translate-y-2 transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.header}
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {event.header}
                </h3>

                <p className="text-gray-500 text-sm mb-1">
                  {event.date}
                </p>

                <p className="text-gray-400 text-xs">
                  {event.location}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default EventsPage;
