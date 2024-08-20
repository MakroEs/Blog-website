import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Instagram, LinkedIn, and GitHub icons
import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <div className='text-white text-lg font-bold'>Makro</div>
      <p className='text-sm text-white'>Copyright 2024 by @MakroES</p>
      <div className='flex gap-4'>
        <a
          href="https://instagram.com"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={25} color="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/eren-öztürk-9027a0249/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={25} color="white" />
        </a>
        <a
          href="https://github.com/MakroEs"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={25} color="white" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
