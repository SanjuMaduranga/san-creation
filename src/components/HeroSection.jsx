import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

const HeroSection = ({ bannerImage }) => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      loop: true,
      delay: 75,
    });
    typewriter
      .typeString("Welcome to SAN Creation")
      .pauseFor(2000)
      .deleteAll()
      .start();
  }, []);

  return (
    <section
      className="relative bg-cover bg-center h-[70vh] sm:h-screen"
      style={{
        backgroundImage: `url(${bannerImage || "/assets/banners/banner1.jpg"})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute bottom-0 w-full px-4 sm:px-8 pb-6 bg-gray-900 bg-opacity-0">
        <div
          ref={typewriterRef}
          className="text-2xl sm:text-4xl md:text-5xl text-gray-100 font-bold mb-2 sm:mb-4 text-center"
        ></div>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6 text-center">
          Creative solutions for your brand
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.behance.net/sanjulamaduranga"
            className="border-2 border-blue-500 text-blue-500 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-lg hover:text-white hover:border-blue-400 transition-all duration-300 relative overflow-hidden group"
          >
            View Portfolio
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-500 opacity-10 group-hover:opacity-100 transition-all duration-300"></span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;