import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMediaIcons: React.FC = () => {
  return (
    <div className="flex justify-center space-x-6 mt-8">
      <a href="https://facebook.com" className="text-white hover:text-gray-300">
        <FaFacebook size={24} />
      </a>
      <a href="https://twitter.com" className="text-white hover:text-gray-300">
        <FaTwitter size={24} />
      </a>
      <a href="https://instagram.com" className="text-white hover:text-gray-300">
        <FaInstagram size={24} />
      </a>
      <a href="https://linkedin.com" className="text-white hover:text-gray-300">
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
