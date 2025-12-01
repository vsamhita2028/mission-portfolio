import React from 'react'
import { PiLinkedinLogoBold } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#3B4150] text-white py-4">
      <div className="container mx-auto text-center">
        <p className='text-xl font-semibold mb-5'>Contact Me</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="mailto:samhitavetcha@gmail.com" className="hover:text-[#FF4EDB] transition">
            <SiGmail className='h-8 w-8'/>
          </a>
          <a href="https://www.linkedin.com/in/samhitavetcha" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4EDB] transition">
            <PiLinkedinLogoBold className='h-8 w-8'/>
          </a>
          <a href="https://github.com/vsamhita2028" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4EDB] transition">
            <FaGithubSquare className='h-8 w-8'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer