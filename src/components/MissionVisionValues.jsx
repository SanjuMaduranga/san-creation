const MissionVisionValues = () => {
    return (
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Mission, Vision, and Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl text-blue-900 mb-4">Mission</h3>
              <p className="text-gray-700">
                Our mission is to deliver creative and strategic design solutions that not only look great but also help businesses communicate their message effectively and achieve their goals.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl text-blue-900 mb-4">Vision</h3>
              <p className="text-gray-700">
                Our vision is to be a global leader in graphic design by creating impactful visuals that inspire, engage, and drive growth for businesses worldwide.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl text-blue-900 mb-4">Values</h3>
              <ul className="text-gray-700">
                <li>Creativity</li>
                <li>Innovation</li>
                <li>Customer-Centricity</li>
                <li>Integrity</li>
                <li>Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MissionVisionValues;  