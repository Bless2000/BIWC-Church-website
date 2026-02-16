import React from "react";
import { useNavigate } from "react-router-dom";
import aboutImage from "../assets/img/people.webp"; // replace with your actual image

const About = () => { // Changed from AboutPreview to About
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our mission and purpose define who we are and guide everything we do.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image (Left) */}
          <div>
            <img
              src={aboutImage}
              alt="Church community"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Text (Right) */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Our Mission
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              At BIWC, we believe that our mission is more than words — it is a
              calling. We exist to help people discover their purpose, grow in
              their faith, and find their way to Christ. Through worship,
              teaching, fellowship, and outreach, we are committed to building
              a community rooted in love, truth, and transformation.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              What we are about is simple yet powerful: leading people into a
              life-changing relationship with Jesus Christ and equipping them
              to live it out daily.
            </p>

            {/* Button */}
            <button
              onClick={() => navigate("/about")}
              className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition duration-300"
            >
              Learn More About Us
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;