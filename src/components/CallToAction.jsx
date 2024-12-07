const CallToAction = () => {
  return (
    <section className="py-8 sm:py-12 bg-black text-center">
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-100 mb-4">
        Ready to work with SAN Creation?
      </h2>
      <p className="text-base sm:text-xl text-gray-300 mb-6 px-4 sm:px-0">
        Let us help you bring your brand vision to life.
      </p>
      <a
        href="https://wa.me/94762125884?text=Hi%20SAN%20Creation!%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-center border border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-gray-100 transition duration-300"
      >
        Contact Us
      </a>
    </section>
  );
};

export default CallToAction;