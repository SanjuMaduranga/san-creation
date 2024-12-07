import React from "react";
import { FaFacebook, FaTiktok, FaYoutube, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-gray-400">
          &copy; 2024 SAN Creation. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=100095658751945"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 text-2xl transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.tiktok.com/@s_a_n_creation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 text-2xl transition"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.youtube.com/@sancreationyt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 text-2xl transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.behance.net/sanjulamaduranga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 text-2xl transition"
          >
            <FaBehance />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;