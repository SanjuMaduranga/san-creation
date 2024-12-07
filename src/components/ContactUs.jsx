import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="py-12 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-8">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-gray-100">Get in Touch</h3>
            <p className="text-gray-300">
              We’d love to hear from you! Please reach out with any questions or
              project inquiries.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-blue-400 text-xl mr-3" />
                <span>+94 76 212 5884</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-400 text-xl mr-3" />
                <span>sanjulamaduranga99@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-400 text-xl mr-3" />
                <span>Godakawela, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-gray-100 py-2 rounded-lg font-semibold hover:bg-blue-400 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
