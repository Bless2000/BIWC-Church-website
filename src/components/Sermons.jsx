import React from "react";
import { useNavigate } from "react-router-dom";
import { sermon } from "../data/sermonData"; // adjust path if needed

const Sermons = () => { // Renamed from SermonsPreview to Sermons
  const navigate = useNavigate();

  // Show first 3 sermons only
  const previewSermons = sermon.slice(0, 3);

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recent Sermons
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the sermon you would like to watch or catch up on the one you
            missed. Grow in faith through the Word.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Sermon Cards */}
          {previewSermons.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/sermons/${item.id}`)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group hover:-translate-y-2 transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.header}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.header}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.date}
                </p>
              </div>
            </div>
          ))}

          {/* View All Sermons Card */}
          <div
            onClick={() => navigate("/sermons")}
            className="bg-blue-900 text-white rounded-2xl shadow-lg flex items-center justify-center cursor-pointer hover:-translate-y-2 transition duration-300"
          >
            <div className="text-center p-8">
              <h3 className="text-xl font-bold mb-2">
                View All Sermons
              </h3>
              <p className="text-blue-200 text-sm">
                Browse our complete sermon archive
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Sermons;