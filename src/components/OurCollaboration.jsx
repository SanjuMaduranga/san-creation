import React from "react";

function OurCollaboration() {

  const brands = [
    { name: "aura beauty", logo: "/assets/brands/aurabeauty.jpg" },
    { name: "g ceylon", logo: "/assets/brands/gceylon.jpg" },
    { name: "keshika", logo: "/assets/brands/keshika.jpg" },
    { name: "kesme", logo: "/assets/brands/kesme.jpg" },
    { name: "u rose", logo: "/assets/brands/urose.jpg" },
  ];

  return (
    <section className="py-12 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-8">
          Our Collaboration with Brands
        </h2>
        <p className="text-center text-gray-400 mb-12">
          We are proud to collaborate with some of the most trusted and creative brands in the industry.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 shadow-lg rounded-full flex justify-center items-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="rounded-full max-h-16 w-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurCollaboration;