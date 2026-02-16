import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../data/events";
import Navbar from "../components/Navbar";

const IndividualEvent = () => {
  const { id } = useParams();

  const event = events.find(
    (event) => event.id === parseInt(id)
  );

  if (!event) {
    return <div className="p-20 text-center">Event Not Found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6">
        <Navbar textColorClass="text-blue-500" marginBottomClass="mb-8" />
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mt-10">

        <img
          src={event.image}
          alt={event.header}
          className="w-full h-96 object-cover"
        />

        <div className="p-10">
          <h1 className="text-3xl font-bold mb-4">
            {event.header}
          </h1>

          <p className="text-gray-600 mb-6">
            {event.description}
          </p>

          {event.deadline && (
            <p className="text-red-500 mb-4 font-medium">
              {event.deadline}
            </p>
          )}

          <div className="space-y-2 text-gray-700">
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default IndividualEvent;