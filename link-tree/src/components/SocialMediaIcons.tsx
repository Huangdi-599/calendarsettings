import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface SocialMediaIconsProps {
  buttonColor?: string;
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ buttonColor = "#007BFF" }) => {
  return (
    <div className="flex justify-center space-x-6 mt-8">
      <a href="https://facebook.com" className="hover:opacity-75">
        <FaFacebook size={30} style={{ color: buttonColor }} />
      </a>
      <a href="https://twitter.com" className="hover:opacity-75">
        <FaTwitter size={30} style={{ color: buttonColor }} />
      </a>
      <a href="https://instagram.com" className="hover:opacity-75">
        <FaInstagram size={30} style={{ color: buttonColor }} />
      </a>
      <a href="https://linkedin.com" className="hover:opacity-75">
        <FaLinkedin size={30} style={{ color: buttonColor }} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
