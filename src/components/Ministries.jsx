import ministries from '../data/ministries';

const Ministries = () => {
  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header */}
        <h2 className="text-4xl font-bold text-blue-800 mb-4">
          Check Out Our Ministries
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Explore our ministries and discover meaningful ways to serve, grow in
          faith, and build relationships.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={ministry.image}
                alt={ministry.title}
                className="w-full h-98 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <h3 className="text-2xl font-semibold mb-2">
                  {ministry.title}
                </h3>
                <p className="mb-4">{ministry.description}</p>
                <button className="bg-white text-blue-800 px-6 py-2 rounded-full font-medium hover:bg-blue-100 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ministries;
