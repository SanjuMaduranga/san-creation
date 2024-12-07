const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "SAN Creation provided outstanding design work for our brand.",
    },
    {
      name: "Jane Smith",
      feedback: "The logo they created was exactly what we needed to stand out.",
    },
    {
      name: "Michael Brown",
      feedback: "Their design solutions are creative and perfectly executed.",
    },
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-100 mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-gray-300 mb-4">
                &quot;{testimonial.feedback}&quot;
              </p>
              <h3 className="text-xl text-blue-400 font-semibold">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;