import React from "react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    name: "Logo Design",
    price: "FROM 1500LKR",
    image: "/assets/services/logodesign.jpg",
    description: "Unique and professional logo designs tailored to your brand.",
  },
  {
    name: "Poster Design",
    price: "FROM 800LKR",
    image: "/assets/services/posterdesign.jpg",
    description: "Eye-catching poster designs to promote your events or products.",
  },
  {
    name: "Banner Design",
    price: "FROM 1200LKR",
    image: "/assets/services/bannerdesign.jpg",
    description: "Custom banner designs that stand out online and offline.",
  },
  {
    name: "Business Card Design",
    price: "FROM 750LKR",
    image: "/assets/services/bcarddesign.jpg",
    description: "Professional business card designs to leave a lasting impression.",
  },
  {
    name: "Label Design",
    price: "FROM 1000LKR",
    image: "/assets/services/labeldesign.jpg",
    description: "Creative label designs for products that shine on the shelf.",
  },
  {
    name: "Vector Illustrations",
    price: "FROM 1500LKR",
    image: "/assets/services/vectordesign.jpg",
    description: "High-quality vector illustrations for any purpose.",
  },
];

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  return (
    <div
      ref={ref}
      className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
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
  );
};

const Services = () => {
  return (
    <section className="py-12 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;