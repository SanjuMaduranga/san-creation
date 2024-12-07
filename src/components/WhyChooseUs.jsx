const WhyChooseUs = () => {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Choose SAN Creation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <h3 className="text-2xl text-blue-900 mb-4">Creative Expertise</h3>
              <p className="text-gray-700">
                With years of experience in graphic design, we bring creativity and strategic thinking to every project we take on.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <h3 className="text-2xl text-blue-900 mb-4">Client-Focused</h3>
              <p className="text-gray-700">
                We take the time to understand your business and work closely with you to ensure your design needs are met.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <h3 className="text-2xl text-blue-900 mb-4">Innovative Solutions</h3>
              <p className="text-gray-700">
                We stay on top of design trends and technology to provide innovative solutions that stand out in the market.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;  