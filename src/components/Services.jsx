import React from "react";

const services = [
  {
    name: "Logo Design",
    price: "FROM 1500LKR",
    image: "/assets/services/logodesign.jpg", // Replace with actual image path
    description: "Unique and professional logo designs tailored to your brand.",
  },
  {
    name: "Poster Design",
    price: "FROM 800LKR",
    image: "/assets/services/posterdesign.jpg", // Replace with actual image path
    description: "Eye-catching poster designs to promote your events or products.",
  },
  {
    name: "Banner Design",
    price: "FROM 1200LKR",
    image: "/assets/services/bannerdesign.jpg", // Replace with actual image path
    description: "Custom banner designs that stand out online and offline.",
  },
  {
    name: "Business Card Design",
    price: "FROM 750LKR",
    image: "/assets/services/bcarddesign.jpg", // Replace with actual image path
    description: "Professional business card designs to leave a lasting impression.",
  },
  {
    name: "Label Design",
    price: "FROM 1000LKR",
    image: "/assets/services/labeldesign.jpg", // Replace with actual image path
    description: "Creative label designs for products that shine on the shelf.",
  },
  {
    name: "Vector Illustrations",
    price: "FROM 1500LKR",
    image: "/assets/services/vectordesign.jpg", // Replace with actual image path
    description: "High-quality vector illustrations for any purpose.",
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm md:text-base">
                  {service.description}
                </p>
                <div className="text-md md:text-lg font-semibold text-blue-400">
                  {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;