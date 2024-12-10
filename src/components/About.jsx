import React from "react";
import { FaFacebook, FaTiktok, FaYoutube, FaBehance } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: socialRef, inView: socialInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-12 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-gray-100 text-center mb-8 transform transition-all duration-700 ${
            aboutInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
          ref={aboutRef}
        >
          About SAN Creation
        </h2>
        <div
          className={`flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-700 ${
            aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Side Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/assets/about.jpg" // Replace with the actual image path
              alt="SAN Creation"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>

          {/* Right Side Description */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
              SAN Creation was born from a passion for creativity, design, and
              helping businesses bring their brand to life through impactful
              visuals. Founded by a dedicated graphic designer with years of
              experience in branding, logo design, and digital art, SAN Creation
              has grown into a trusted name in the creative industry. Our journey
              began with a simple mission: to create designs that resonate and
              tell a story.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Over the years, we’ve worked with a wide variety of clients, from
              startups to established businesses, helping them find their unique
              visual identity. At SAN Creation, we believe that good design is
              about more than just aesthetics—it’s about conveying the right
              message and creating lasting impressions.
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div
          className={`mt-8 text-center transform transition-all duration-700 ${
            socialInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          ref={socialRef}
        >
          <h3 className="text-2xl font-bold text-gray-100 mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=100095658751945"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 text-3xl transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.tiktok.com/@s_a_n_creation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 text-3xl transition"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@sancreationyt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 text-3xl transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.behance.net/sanjulamaduranga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 text-3xl transition"
            >
              <FaBehance />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;